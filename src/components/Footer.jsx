import CompanyLogo from "./CompanyLogo";
import Container from "./Container";

const Footer = () => (
  <footer className="border-t border-border bg-bg">
    <Container className="py-10">
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <a href="#">
            <CompanyLogo />
          </a>
          <p className="mt-3 text-sm text-muted-fg">
            Creative partner for fast-moving teams.
          </p>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-sm font-semibold text-fg">Company</h4>
          <ul className="mt-3 grid gap-2 text-sm text-muted-fg">
            <li>
              <a
                href="#about"
                className="hover:underline text-fg/90 hover:text-fg"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#works"
                className="hover:underline text-fg/90 hover:text-fg"
              >
                Work
              </a>
            </li>
            <li>
              <a
                href="#blog"
                className="hover:underline text-fg/90 hover:text-fg"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:underline text-fg/90 hover:text-fg"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-sm font-semibold text-fg">Services</h4>
          <ul className="mt-3 grid gap-2 text-sm text-muted-fg">
            <li>Brand Strategy</li>
            <li>UI/UX Design</li>
            <li>Web Development</li>
            <li>Growth & Analytics</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-sm font-semibold text-fg">Newsletter</h4>
          <p className="mt-3 text-sm text-muted-fg">
            Get monthly insights and updates.
          </p>
          <div className="mt-3 flex items-center gap-2">
            <input
              className="w-full rounded-xl border border-border bg-accent px-3 py-2 text-sm text-fg placeholder:text-muted-fg/70 outline-none transition focus:ring-2 focus:ring-primary"
              placeholder="you@company.com"
            />
            <button className="rounded-xl bg-cta px-4 py-2 text-sm font-semibold text-cta-fg">
              Join
            </button>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-sm text-muted-fg md:flex-row">
        <p>© {new Date().getFullYear()} Agenzio. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:underline hover:text-fg">
            Privacy
          </a>
          <a href="#" className="hover:underline hover:text-fg">
            Terms
          </a>
          <a href="#" className="hover:underline hover:text-fg">
            Cookies
          </a>
        </div>
      </div>
    </Container>
  </footer>
);

export default Footer;
