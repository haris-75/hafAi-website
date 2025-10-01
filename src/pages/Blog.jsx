import { BlogCard, Container } from "../components";

const Blog = () => (
  <section id="blog" className="border-y border-border bg-muted py-16 lg:py-24">
    <Container>
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">
          Resources
        </p>
        <h2 className="mt-2 text-3xl font-black text-fg sm:text-4xl">
          Insights & stories
        </h2>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <BlogCard
          title="Design systems that scale"
          date="Sep 10, 2025"
          img="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1600&auto=format&fit=crop"
        />
        <BlogCard
          title="From MVP to product-market fit"
          date="Aug 26, 2025"
          img="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop"
        />
        <BlogCard
          title="Core Web Vitals in 2025"
          date="Aug 2, 2025"
          img="https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1600&auto=format&fit=crop"
        />
      </div>
    </Container>
  </section>
);

export default Blog;
