import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useAuth } from "../../contexts/AuthContext";

function FeaturesSection() {
  const { user } = useAuth();
  
  const features = [
    {
      number: "01",
      tagline: "Architect the Vision",
      title: "Go Beyond the Notebook",
      description:
        "Don’t just write a script; design a system. Whether it’s AI/ML, Web, or Game Dev, we help you move past isolated snippets to create comprehensive project blueprints. Plan your data flow and system logic like a Lead Engineer from day one.",
    },
    {
      number: "02",
      tagline: "The Full-Stack Connection",
      title: "Bridge Frontend to Database",
      description:
        "Experience the 'click' moment when your project comes alive. We guide you through connecting a sleek Frontend to a robust Backend and a scalable Database. Learn how to manage real-world data and user state in a way that tutorials never show you.",
    },
    {
      number: "03",
      tagline: "AI-Augmented Building",
      title: "Write Logic with a Co-Pilot",
      description:
        "Use AI to handle the heavy lifting. Leverage integrated tools to generate clean boilerplate, debug complex logic, and write scalable system code in record time. AI doesn't just write the code—it teaches you how to build professional architecture faster.",
    },
    {
      number: "04",
      tagline: "Production-Ready Launch",
      title: "Ship Scalable Reality",
      description:
        "Move from 'it works on my machine' to 'it works for the world.' Analyze your data, optimize your performance, and deploy a live, working product. Pitch your GitHub repository to industry leaders as a verified production-ready engineer.",
    },
  ];

  return (
    <section
      id="features"
      className="bg-white px-6 py-20 md:px-12 md:py-24 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          
          {/* Left Column (Sticky Sidebar) */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-28 lg:self-start"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-primary)]">
              The Production Flow
            </p>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[var(--color-text)] md:text-4xl lg:text-5xl">
              From Class Projects to Production Systems
            </h2>

            <p className="mt-6 max-w-md text-base leading-relaxed text-[var(--color-muted)] md:text-lg">
              Stop writing code that only lives in a college notebook. Use the power of AI to architect, build, and deploy full-scale applications that are ready for the real world.
            </p>

            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Link
                to={user ? "/dashboard" : "/signup"}
                className="rounded-xl bg-[var(--color-primary)] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[rgba(53,0,139,0.15)] transition-all hover:scale-[1.02] hover:opacity-95"
              >
                Join an Active Arena
              </Link>

              <a
                href="#ai-tools"
                className="rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
              >
                Explore Workspace
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column (Timeline Scroll) */}
          <div className="relative">
            {/* Timeline vertical line indicator */}
            <div className="absolute left-[36px] top-0 hidden h-full w-px bg-slate-100 md:block" />

            {features.map((feature, index) => (
              <motion.div
                key={feature.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative h-[80vh] min-h-[500px]"
              >
                <div className="sticky top-24">
                  <div className="grid gap-6 md:grid-cols-[72px_1fr] md:gap-8">
                    
                    {/* Number Circle Badge (Desktop) */}
                    <div className="relative hidden md:flex md:justify-center">
                      <motion.div 
                        initial={{ scale: 0.8 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true, margin: "-20px" }}
                        className="relative z-10 flex h-[72px] w-[72px] items-center justify-center rounded-full border-[6px] border-white bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] text-white shadow-[0_12px_24px_rgba(53,0,139,0.18)]"
                      >
                        <span className="text-lg font-black">
                          {feature.number}
                        </span>
                      </motion.div>
                    </div>

                    {/* Content Box */}
                    <div className="pt-2">
                      {/* Number Circle Badge (Mobile) */}
                      <div className="mb-4 md:hidden">
                        <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] text-sm font-black text-white shadow-[0_10px_20px_rgba(53,0,139,0.15)]">
                          {feature.number}
                        </span>
                      </div>

                      <p className="text-xs font-bold uppercase tracking-wider text-[var(--color-secondary)]">
                        {feature.tagline}
                      </p>

                      <h3 className="mt-3 text-2xl font-extrabold text-[var(--color-text)] md:text-3xl leading-snug">
                        {feature.title}
                      </h3>

                      <p className="mt-4 max-w-xl text-base leading-relaxed text-[var(--color-muted)] md:text-lg">
                        {feature.description}
                      </p>
                    </div>

                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;