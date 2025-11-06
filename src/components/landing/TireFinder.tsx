"use client";

import { useEffect } from 'react';

export function TireFinder() {
  useEffect(() => {
    const container = document.getElementById('tire-flow-responsive-container');
    if (!container) return;

    const script = document.createElement('script');
    script.src = 'https://tireflow.ezytire.com/6057/1/Script/Client.js';
    script.async = true;
    
    // The script is expected to find and inject into the div with the id 'tire-flow-responsive-container'
    container.appendChild(script);

    return () => {
      // Clean up the script when the component unmounts
      if (container.contains(script)) {
        container.removeChild(script);
      }
      // The external script might also add other elements that need cleanup.
      // A simple approach is to clear the container.
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    };
  }, []);

  return (
    <section id="finder" className="bg-secondary py-20">
      <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground mb-12 text-center px-6">
        Search by Brand
        <br />
        or Tire Size
      </h2>
      <div className="border-y-2 border-dashed border-border/50">
        <div id="tire-flow-responsive-container">
          {/* The external script will inject the tire finder tool here */}
        </div>
      </div>
    </section>
  );
}
