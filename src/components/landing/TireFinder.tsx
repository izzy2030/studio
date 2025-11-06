
"use client";

import Script from 'next/script';

export function TireFinder() {
  return (
    <section id="finder" className="bg-secondary py-20">
      <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground mb-12 text-center px-6">
        Search by Brand
        <br />
        or Tire Size
      </h2>
      <div className="border-y-2 border-dashed border-border/50 bg-background">
        <div id="tire-flow-responsive-container">
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
