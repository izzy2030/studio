"use client";

import { useEffect } from 'react';

export function TireFinder() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://tireflow.ezytire.com/6057/1/Script/Client.js';
    script.async = true;
    
    document.body.appendChild(script);

    return () => {
      // Clean up the script when the component unmounts
      try {
        document.body.removeChild(script);
      } catch (e) {
        // Ignore error if script is already removed
      }
      
      // The external script adds content inside this div, so we should clear it.
      const container = document.getElementById('tire-flow-responsive-container');
      if (container) {
        while (container.firstChild) {
          container.removeChild(container.firstChild);
        }
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
      <div className="border-y-2 border-dashed border-border/50 bg-background">
        <div id="tire-flow-responsive-container" className="min-h-[500px]">
          {/* The external script will inject the tire finder tool here */}
        </div>
      </div>
    </section>
  );
}
