
"use client";

import Script from 'next/script';
import { useEffect } from 'react';

export function TireFinder() {
  useEffect(() => {
    // This effect is now just for cleanup.
    return () => {
      const container = document.getElementById('tire-flow-responsive-container');
      if (container) {
        // The external script can sometimes leave elements behind on page navigation.
        // This clears the container when the component unmounts.
        while (container.firstChild) {
          container.removeChild(container.firstChild);
        }
      }
      // Also, remove any stylesheets the script might have added to the head
      const head = document.getElementsByTagName('head')[0];
      const stylesheets = head.querySelectorAll('link[href*="ezytire.com"]');
      stylesheets.forEach(sheet => head.removeChild(sheet));
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
          {/* The Next.js Script component below will load the script, which then injects the tire finder tool here */}
        </div>
        <Script 
          src="https://tireflow.ezytire.com/6057/1/Script/Client.js" 
          strategy="lazyOnload"
        />
      </div>
    </section>
  );
}
