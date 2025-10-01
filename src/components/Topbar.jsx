import Container from "./Container";
import { Phone, Mail, Instagram, Facebook, Linkedin } from "lucide-react";

const Topbar = () => (
  <div className="hidden border-b border-border bg-panel/80 backdrop-blur supports-[backdrop-filter]:bg-panel/95 md:block">
    <Container className="flex items-center justify-between py-2 text-sm">
      <div className="flex items-center gap-6 text-muted-fg">
        <a
          href="tel:+1234567890"
          className="flex items-center gap-2 transition-colors hover:text-fg"
        >
          <Phone className="h-4 w-4" /> +1 (234) 567-890
        </a>
        <a
          href="mailto:hello@agenzio.co"
          className="flex items-center gap-2 transition-colors hover:text-fg"
        >
          <Mail className="h-4 w-4" /> hello@agenzio.co
        </a>
      </div>
      <div className="flex items-center gap-4 text-muted-fg">
        <a
          href="#"
          aria-label="Instagram"
          className="transition-opacity hover:opacity-80"
        >
          <Instagram className="h-4 w-4" />
        </a>
        <a
          href="#"
          aria-label="Facebook"
          className="transition-opacity hover:opacity-80"
        >
          <Facebook className="h-4 w-4" />
        </a>
        <a
          href="#"
          aria-label="Linkedin"
          className="transition-opacity hover:opacity-80"
        >
          <Linkedin className="h-4 w-4" />
        </a>
      </div>
    </Container>
  </div>
);

export default Topbar;
