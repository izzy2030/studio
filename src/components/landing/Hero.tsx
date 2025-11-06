import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { WistiaPlayer } from './WistiaPlayer';

export function Hero() {
  return (
    <section className="bg-secondary/50">
      <div className="container mx-auto px-6 py-20 lg:py-24 grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left">
          <h1 className="font-headline text-4xl md:text-5xl font-extrabold text-foreground mb-4 leading-tight drop-shadow-sm">
            Find Great Deals On Tires Online, Shop Local!
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Buy tires online and get them installed at our local tire shop. We have a great selection of new tires from the most popular brands.
          </p>
          <Button asChild size="lg" className="transition-transform transform hover:scale-105 shadow-lg hover:shadow-primary/40">
            <Link href="#finder">
              Shop for tires now
            </Link>
          </Button>
        </div>
        <div className="w-full">
          <WistiaPlayer videoId="zx3wmw2c10" />
        </div>
      </div>
    </section>
  );
}
