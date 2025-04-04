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
  const [schools, setSchools] = useState<BusinessSchool[]>(businessSchools);

  // Add a new useEffect to prevent scrolling past the Dream Big section
  // useEffect(() => {
  //   let lastScrollY = window.scrollY;
  //   let isScrollingUp = false;

  //   const handleScroll = () => {
  //     const currentScrollY = window.scrollY;
  //     isScrollingUp = currentScrollY < lastScrollY;

  //     // If scrolling up and near the Dream Big section
  //     if (
  //       isScrollingUp &&
  //       currentScrollY < window.innerHeight &&
  //       currentScrollY > 0
  //     ) {
  //       window.scrollTo({
  //         top: window.innerHeight,
  //         behavior: "instant",
  //       });
  //     }

  //     lastScrollY = currentScrollY;
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

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

  const handleScrollButtonClick = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#1c3f60]">
      <div
        ref={globeRef}
        className="w-full h-[120vh] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      />
      {showScrollButton && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            className="text-white flex flex-col items-center gap-2"
            onClick={handleScrollButtonClick}
          >
            <span className="text-2xl">Raggiungi l&apos;obiettivo</span>
            <svg
              className="w-20 h-20"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M3 8l9 9 9-9"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default InteractiveGlobe;
