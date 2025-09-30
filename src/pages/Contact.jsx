import { Mail, MapPin, Phone } from "lucide-react";
import { Container } from "../components";

const Contact = () => (
  <section id="contact" className="py-16 lg:py-24">
    <Container className="grid items-center gap-12 md:grid-cols-2">
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600">
          Get in touch
        </p>
        <h2 className="mt-2 text-3xl font-black sm:text-4xl">
          Let’s build something great
        </h2>
        <p className="mt-3 text-neutral-600 dark:text-neutral-300">
          Tell us about your goals and we’ll craft a plan that fits. We
          typically respond within one business day.
        </p>
        <div className="mt-6 grid gap-4 text-sm">
          <a
            href="mailto:hello@agenzio.co"
            className="inline-flex items-center gap-2"
          >
            <Mail className="h-4 w-4" /> hello@agenzio.co
          </a>
          <a href="tel:+1234567890" className="inline-flex items-center gap-2">
            <Phone className="h-4 w-4" /> +1 (234) 567‑890
          </a>
          <div className="inline-flex items-center gap-2">
            <MapPin className="h-4 w-4" /> 123 Creative Ave, Remote
          </div>
        </div>
      </div>
      <form className="rounded-2xl border bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
        <div className="grid gap-4">
          <div className="grid gap-2">
            <label className="text-sm font-medium">Name</label>
            <input
              className="rounded-xl border px-3 py-2 outline-none transition focus:ring-2 focus:ring-indigo-500 dark:border-neutral-700 dark:bg-neutral-950"
              placeholder="Jane Doe"
            />
          </div>
          <div className="grid gap-2">
            <label className="text-sm font-medium">Email</label>
            <input
              type="email"
              className="rounded-xl border px-3 py-2 outline-none transition focus:ring-2 focus:ring-indigo-500 dark:border-neutral-700 dark:bg-neutral-950"
              placeholder="jane@company.com"
            />
          </div>
          <div className="grid gap-2">
            <label className="text-sm font-medium">Budget</label>
            <select className="rounded-xl border px-3 py-2 outline-none transition focus:ring-2 focus:ring-indigo-500 dark:border-neutral-700 dark:bg-neutral-950">
              <option>Under $5k</option>
              <option>$5k – $15k</option>
              <option>$15k – $50k</option>
              <option>$50k+</option>
            </select>
          </div>
          <div className="grid gap-2">
            <label className="text-sm font-medium">Message</label>
            <textarea
              rows={4}
              className="rounded-xl border px-3 py-2 outline-none transition focus:ring-2 focus:ring-indigo-500 dark:border-neutral-700 dark:bg-neutral-950"
              placeholder="Tell us about your project..."
            />
          </div>
          <button className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow hover:opacity-90">
            Send message
          </button>
        </div>
      </form>
    </Container>
  </section>
);

export default Contact;
