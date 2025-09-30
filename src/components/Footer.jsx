import Container from "./Container";

const Footer = () => (
  <footer className="border-t bg-white dark:bg-neutral-900 dark:border-neutral-800">
    <Container className="py-10">
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <a href="#" className="flex items-center gap-2 text-lg font-bold">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-600 text-white">
              A
            </span>
            Agenzio
          </a>
          <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-300">
            Creative partner for fast‑moving teams.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Company</h4>
          <ul className="mt-3 grid gap-2 text-sm text-neutral-600 dark:text-neutral-300">
            <li>
              <a href="#about" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#works" className="hover:underline">
                Work
              </a>
            </li>
            <li>
              <a href="#blog" className="hover:underline">
                Blog
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Services</h4>
          <ul className="mt-3 grid gap-2 text-sm text-neutral-600 dark:text-neutral-300">
            <li>Brand Strategy</li>
            <li>UI/UX Design</li>
            <li>Web Development</li>
            <li>Growth & Analytics</li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Newsletter</h4>
          <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-300">
            Get monthly insights and updates.
          </p>
          <div className="mt-3 flex items-center gap-2">
            <input
              className="w-full rounded-xl border px-3 py-2 text-sm outline-none transition focus:ring-2 focus:ring-indigo-500 dark:border-neutral-700 dark:bg-neutral-950"
              placeholder="you@company.com"
            />
            <button className="rounded-xl bg-neutral-900 px-4 py-2 text-sm font-semibold text-white dark:bg-white dark:text-neutral-900">
              Join
            </button>
          </div>
        </div>
      </div>
      <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t pt-6 text-sm text-neutral-500 dark:border-neutral-800 md:flex-row">
        <p>© {new Date().getFullYear()} Agenzio. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Cookies</a>
        </div>
      </div>
    </Container>
  </footer>
);

export default Footer;
