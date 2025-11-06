import Link from 'next/link';

export function Footer() {
  return (
    <footer className="dark bg-secondary text-secondary-foreground py-10">
      <div className="container mx-auto px-6 text-center text-sm">
        <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-4 mb-4 text-muted-foreground">
          <span>© {new Date().getFullYear()} Queens Auto Service. All Rights Reserved.</span>
          <span className="hidden md:inline">|</span>
          <Link href="#" className="hover:text-secondary-foreground">
            Privacy Policy
          </Link>
          <span className="hidden md:inline">|</span>
          <Link href="#" className="hover:text-secondary-foreground">
            Terms of Use
          </Link>
        </div>
        <div className="mb-2 text-muted-foreground">
          <p>1303 Dundee Ave, Elgin, IL 60120</p>
        </div>
        <div className="text-muted-foreground">
          <p>
            Call Us:{' '}
            <a href="tel:224-635-3000" className="hover:text-secondary-foreground font-semibold">
              (224) 635-3000
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
