import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Header() {
  const logo = PlaceHolderImages.find((img) => img.id === 'logo');

  return (
    <header className="bg-card shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" aria-label="Queens Auto Services Home">
          {logo && (
            <Image
              src={logo.imageUrl}
              alt={logo.description}
              width={192}
              height={48}
              className="h-12 w-auto"
              data-ai-hint={logo.imageHint}
              priority
            />
          )}
        </Link>
        <Button asChild className="hidden md:inline-block">
          <Link href="#finder">Shop For Tires Now</Link>
        </Button>
      </div>
    </header>
  );
}
