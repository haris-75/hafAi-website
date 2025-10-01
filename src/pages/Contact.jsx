import { Mail, MapPin, Phone } from "lucide-react";
import { Container } from "../components";

const Contact = () => (
  <section id="contact" className="py-16 lg:py-24 bg-bg">
    <Container className="grid items-center gap-12 md:grid-cols-2">
      {/* Left copy */}
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">
          Get in touch
        </p>

        <h2 className="mt-2 text-3xl font-black text-fg sm:text-4xl">
          Let’s build something great
        </h2>

        <p className="mt-3 text-muted-fg">
          Tell us about your goals and we’ll craft a plan that fits. We
          typically respond within one business day.
        </p>

        <div className="mt-6 grid gap-4 text-sm text-fg">
          <a
            href="mailto:hello@agenzio.co"
            className="inline-flex items-center gap-2"
          >
            <Mail className="h-4 w-4 text-primary" /> hello@agenzio.co
          </a>
          <a href="tel:+1234567890" className="inline-flex items-center gap-2">
            <Phone className="h-4 w-4 text-primary" /> +1 (234) 567-890
          </a>
          <div className="inline-flex items-center gap-2">
            <MapPin className="h-4 w-4 text-primary" /> 123 Creative Ave, Remote
          </div>
        </div>
      </div>

      {/* Form */}
      <form className="rounded-2xl border border-border bg-card p-6 shadow-sm">
        <div className="grid gap-4">
          {/* Name */}
          <div className="grid gap-2">
            <label className="text-sm font-medium text-fg">Name</label>
            <input
              className="rounded-xl border border-border bg-accent px-3 py-2 text-fg placeholder:text-muted-fg/70 outline-none transition focus:ring-2 focus:ring-primary"
              placeholder="Jane Doe"
            />
          </div>

          {/* Email */}
          <div className="grid gap-2">
            <label className="text-sm font-medium text-fg">Email</label>
            <input
              type="email"
              className="rounded-xl border border-border bg-accent px-3 py-2 text-fg placeholder:text-muted-fg/70 outline-none transition focus:ring-2 focus:ring-primary"
              placeholder="jane@company.com"
            />
          </div>

          {/* Budget */}
          <div className="grid gap-2">
            <label className="text-sm font-medium text-fg">Budget</label>
            <select className="rounded-xl border border-border bg-accent px-3 py-2 text-fg outline-none transition focus:ring-2 focus:ring-primary">
              <option>Under $5k</option>
              <option>$5k – $15k</option>
              <option>$15k – $50k</option>
              <option>$50k+</option>
            </select>
          </div>

          {/* Message */}
          <div className="grid gap-2">
            <label className="text-sm font-medium text-fg">Message</label>
            <textarea
              rows={4}
              className="rounded-xl border border-border bg-accent px-3 py-2 text-fg placeholder:text-muted-fg/70 outline-none transition focus:ring-2 focus:ring-primary"
              placeholder="Tell us about your project..."
            />
          </div>

          {/* Submit */}
          <button className="inline-flex items-center justify-center rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-primary-fg shadow transition hover:opacity-90">
            Send message
          </button>
        </div>
      </form>
    </Container>
  </section>
);

export default Contact;
