import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-16 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2 space-y-4">
            <h3 className="text-2xl font-bold text-card-foreground">
              BookEasely
            </h3>
            <p className="text-muted-foreground">
              The modern booking platform for solo professionals and small
              teams.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-card-foreground">Product</h4>
            <nav className="flex flex-col space-y-2">
              <Link
                href="#"
                className="text-muted-foreground hover:text-card-foreground transition-colors"
              >
                Features
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-card-foreground transition-colors"
              >
                Pricing
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-card-foreground transition-colors"
              >
                Integrations
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-card-foreground">Support</h4>
            <nav className="flex flex-col space-y-2">
              <Link
                href="#"
                className="text-muted-foreground hover:text-card-foreground transition-colors"
              >
                Help Center
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-card-foreground transition-colors"
              >
                Contact Us
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-card-foreground transition-colors"
              >
                Privacy Policy
              </Link>
            </nav>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} BookEasely. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
