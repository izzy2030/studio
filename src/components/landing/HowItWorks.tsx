import { Card, CardContent } from '@/components/ui/card';
import { MapPin, CreditCard, ShoppingCart, Truck } from 'lucide-react';

const steps = [
  {
    icon: <MapPin className="w-8 h-8" />,
    title: "Select a local tire shop",
    description: "Choose a tire shop from our network of dealers.",
  },
  {
    icon: <CreditCard className="w-8 h-8" />,
    title: "Find The Right Tires",
    description: "Easily search for new tires online and select a store to see price and install.",
  },
  {
    icon: <ShoppingCart className="w-8 h-8" />,
    title: "Order your tires Online",
    description: "Quickly and simply order your tires and schedule your out-the-door pricing.",
  },
  {
    icon: <Truck className="w-8 h-8" />,
    title: "Installation At Queens Auto",
    description: "Tires installed the right way every time by our expert mechanics in Elgin.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-6 text-center">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground mb-4">
          Finding Great Tire Deals
        </h2>
        <p className="text-muted-foreground mb-12 text-lg">
          Has Never Been Easier
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="bg-secondary border-none shadow-sm text-center">
              <CardContent className="p-8">
                <div className="flex justify-center items-center mb-4 h-16 w-16 mx-auto rounded-lg bg-primary/10 text-primary">
                  {step.icon}
                </div>
                <h3 className="font-headline text-xl font-bold mb-2 text-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
