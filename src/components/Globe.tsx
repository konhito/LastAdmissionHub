// @ts-nocheck
"use client";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Globe from "globe.gl";
import { businessSchools } from "../constants/businessSchools";

// Use useLayoutEffect only on client side
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

interface BusinessSchool {
  lat: number;
  lng: string;
  name: string;
  selected?: boolean;
}

const InteractiveGlobe: React.FC = () => {
  const globeRef = useRef<HTMLDivElement | null>(null);
  const globeInstanceRef = useRef<any>(null);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [selectedSchool, setSelectedSchool] = useState<BusinessSchool | null>(
    null
  );
  const [schools, setSchools] = useState<BusinessSchool[]>(businessSchools);

  useIsomorphicLayoutEffect(() => {
    if (!globeRef.current) return;

    globeInstanceRef.current = new Globe(globeRef.current)
      .globeImageUrl(
        "//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
      )
      .backgroundColor("#1c3f60") // Set background color
      .atmosphereColor("#1c3f60") // Match atmosphere color
      .pointsData(schools)
      .pointAltitude(0.07)
      .pointColor((d: BusinessSchool) => (d.selected ? "#ff0000" : "#ffffff"))
      .pointRadius(0.5)
      .onPointClick(handlePointClick);

    const globe = globeInstanceRef.current;

    // Configure initial view
    globe.controls().enableZoom = true;
    globe.controls().autoRotate = true;
    globe.controls().autoRotateSpeed = 0.5;

    // Set closer zoom and position to show half globe
    globe.pointOfView({
      lat: 30, // Adjust latitude to show desired region
      lng: 0, // Center longitude
      altitude: 1.8, // Closer zoom (smaller number = closer zoom)
    });

    // Limit zoom range
    globe.controls().minDistance = 200;
    globe.controls().maxDistance = 400;

    // Adjust camera FOV for wider view
    globe.camera().fov = 45;
    globe.camera().updateProjectionMatrix();

    // Make globe appear larger
    globe.width(window.innerWidth);
    globe.height(window.innerHeight * 1.2); // Slightly taller than viewport

    // Handle window resize
    const handleResize = () => {
      globe.width(window.innerWidth);
      globe.height(window.innerHeight * 1.2);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      if (globe) {
        // Remove event listeners
        window.removeEventListener("resize", handleResize);

        // Clean up Three.js scene
        const scene = globe.scene();
        if (scene) {
          scene.traverse((object: THREE.Object3D) => {
            if (object.material) {
              object.material.dispose();
            }
            if (object.geometry) {
              object.geometry.dispose();
            }
          });
        }

        // Clean up renderer
        const renderer = globe.renderer();
        if (renderer) {
          renderer.dispose();
        }

        // Remove the canvas element
        if (globeRef.current) {
          globeRef.current.innerHTML = "";
        }
      }
    };
  }, [schools]);

  const handlePointClick = (point: BusinessSchool) => {
    const updatedSchools = schools.map((school) => ({
      ...school,
      selected: school.name === point.name,
    }));

    setSchools(updatedSchools);
    setSelectedSchool(point);
    setShowScrollButton(true);

    if (globeInstanceRef.current) {
      // Center view on selected point
      globeInstanceRef.current.pointOfView(
        {
          lat: point.lat,
          lng: point.lng,
          altitude: 1.5,
        },
        1000
      );
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#1c3f60]">
      {" "}
      
      <div
        ref={globeRef}
        className="w-full h-[120vh] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      />
      {selectedSchool && (
        <div className="absolute top-30 left-4 bg-white/80 p-4 rounded-lg shadow-lg backdrop-blur-sm">
          <h3 className="text-lg font-bold text-gray-800">
            {selectedSchool.name}
          </h3>
        </div>
      )}
      {showScrollButton && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg
                       hover:bg-blue-700 transition-all duration-300 flex items-center gap-2"
            onClick={() => {
              window.scrollTo({
                top: window.innerHeight,
                behavior: "smooth",
              });
            }}
          >
            <span>Explore This School</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default InteractiveGlobe;
