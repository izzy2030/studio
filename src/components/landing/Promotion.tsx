import { Gift } from 'lucide-react';

export function Promotion() {
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-repeat bg-center opacity-[3%]"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}}
      />
      <div className="container relative mx-auto flex flex-col items-center justify-center gap-4 px-6 py-10 text-center shadow-2xl md:flex-row md:gap-8">
        <div className="flex-shrink-0">
          <Gift className="h-16 w-16 animate-pulse drop-shadow-lg md:h-20 md:w-20" />
        </div>
        <div>
          <h2 className="text-2xl font-extrabold leading-tight drop-shadow-md sm:text-3xl md:text-4xl">
            Get a <span className="underline decoration-wavy decoration-yellow-300">FREE</span> Wheel Alignment
          </h2>
          <p className="mt-2 text-lg font-semibold drop-shadow-sm">
            when you buy a set of 4 new tires.
          </p>
          <p className="mt-2 rounded-full bg-black/10 px-3 py-1 text-xs font-medium d:text-sm">
            (Online Offer Only)
          </p>
        </div>
      </div>
    </section>
  );
}
