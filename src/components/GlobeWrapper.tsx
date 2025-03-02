"use client";
import dynamic from 'next/dynamic';
import React from 'react';

const Globe = dynamic(() => import('./Globe'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[70vh] flex items-center justify-center">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  ),
});

const GlobeWrapper: React.FC = () => {
  return <Globe />;
};

export default GlobeWrapper;
