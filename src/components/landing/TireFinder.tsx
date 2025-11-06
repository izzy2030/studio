
import { useEffect } from 'react';

export function TireFinder() {
  useEffect(() => {
    // Create script element
    const script = document.createElement('script');
    script.src = "https://tireflow.ezytire.com/6057/1/Script/Client.js";
    script.async = true;
    
    // Append to body or the container
    document.body.appendChild(script);
    
    // Cleanup function to remove script when component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []); // Empty dependency array means this runs once on mount

  return (
    <section id="finder" className="bg-secondary py-20">
      <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground mb-12 text-center px-6">
        Search by Brand
        <br />
        or Tire Size
      </h2>
      <div className="border-y-2 border-dashed border-border/50 bg-background">
        <div id="tire-flow-responsive-container">
          {/* The script will inject the tire finder tool here */}
        </div>
      </div>
    </section>
  );
}
