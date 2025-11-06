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
      document.body.removeChild(script);
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
      <div className="border-y-2 border-dashed border-border/50">
        <div id="tire-flow-responsive-container">
          {/* The external script will inject the tire finder tool here */}
        </div>
      </div>
    </section>
  );
}
