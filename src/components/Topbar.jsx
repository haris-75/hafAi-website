import Container from "./Container";
import {
  Phone,
  Mail,
  Instagram,
  Twitter,
  Facebook,
  Linkedin,
} from "lucide-react";
const Topbar = () => (
  <div className="hidden border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-neutral-900/70 dark:border-neutral-800 md:block">
    <Container className="flex items-center justify-between py-2 text-sm">
      <div className="flex items-center gap-6 text-neutral-600 dark:text-neutral-300">
        <a
          href="tel:+1234567890"
          className="flex items-center gap-2 hover:text-neutral-900 dark:hover:text-white transition-colors"
        >
          <Phone className="h-4 w-4" /> +1 (234) 567‑890
        </a>
        <a
          href="mailto:hello@agenzio.co"
          className="flex items-center gap-2 hover:text-neutral-900 dark:hover:text-white transition-colors"
        >
          <Mail className="h-4 w-4" /> hello@agenzio.co
        </a>
      </div>
      <div className="flex items-center gap-4">
        <a href="#" aria-label="Twitter" className="hover:opacity-80">
          <Twitter className="h-4 w-4" />
        </a>
        <a href="#" aria-label="Instagram" className="hover:opacity-80">
          <Instagram className="h-4 w-4" />
        </a>
        <a href="#" aria-label="Facebook" className="hover:opacity-80">
          <Facebook className="h-4 w-4" />
        </a>
        <a href="#" aria-label="Linkedin" className="hover:opacity-80">
          <Linkedin className="h-4 w-4" />
        </a>
      </div>
    </Container>
  </div>
);

export default Topbar;
