import { motion } from "framer-motion";
import { Brain, Terminal, Gamepad2 } from "lucide-react";

function WhyUsSection() {
  const highlights = [
    {
      step: "01",
      title: "AI & Machine Learning",
      subtitle: "Beyond the API Call",
      icon: Brain,
      description: "Stop just calling openai.ChatCompletion. Learn to fine-tune models, optimize inference, and architect RAG systems that actually handle messy, real-world data. Build agents that do work, not just chat.",
    },
    {
      step: "02",
      title: "Web Development",
      subtitle: "Beyond the Landing Page",
      icon: Terminal,
      description: "The world has enough CSS buttons. We challenge you to build high-concurrency systems, real-time collaborative tools, and edge-computed applications that don't break when 1,000 users hit the 'Sign Up' button at once.",
    },
    {
      step: "03",
      title: "Game Development",
      subtitle: "Beyond the Asset Store",
      icon: Gamepad2,
      description: "Downloading a character controller isn't 'Game Dev.' We push you to master game loop optimization, custom physics, and multiplayer networking. Build mechanics that feel unique, not just 'Standard Asset #4.'",
    },
  ];

  return (
    <section
      id="why-us"
      className="relative overflow-hidden bg-[var(--color-bg-alt)] px-6 py-20 md:px-12 md:py-24 lg:px-20"
    >
      {/* Decorative ambient blurred blobs */}
      <div className="absolute left-1/2 top-16 h-64 w-64 -translate-x-1/2 rounded-full bg-[var(--color-secondary)]/10 blur-3xl" />
      <div className="absolute bottom-10 right-10 h-48 w-48 rounded-full bg-[var(--color-accent-2)]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        
        {/* Header Block with custom hierarchy */}
        <motion.div 
          className="mx-auto max-w-4xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-secondary)]">
            Break the Cycle of Copy-Paste
          </p>

          <h2 className="mt-4 text-4xl font-extrabold leading-tight text-[var(--color-text)] md:text-5xl lg:text-6xl">
            Still stuck in "Hello World" loops?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-slate-700 md:text-lg font-semibold italic border-l-4 border-[var(--color-secondary)] bg-violet-50/20 py-3.5 px-6 rounded-r-2xl">
            "It’s easy to fork a repo. It’s hard to build a legacy. If your entire portfolio is a collection of copied YouTube tutorials, you aren’t an engineer—you’re a compiler."
          </p>

          <p className="mx-auto mt-6 max-w-3xl text-sm leading-relaxed text-[var(--color-muted)] md:text-base">
            The industry doesn't need more people who can follow instructions. It needs people who can solve problems. Our tracks are designed to rip away the training wheels and force you to build original architecture from scratch.
          </p>
        </motion.div>

        {/* Robust Highlight Cards Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {highlights.map((item, index) => {
            const IconComponent = item.icon;
            
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.55, delay: index * 0.12, ease: "easeOut" }}
                className="group relative overflow-hidden rounded-[28px] border border-slate-200/80 bg-white p-8 shadow-[0_8px_30px_rgba(15,23,42,0.02)] transition duration-300 hover:-translate-y-2 hover:border-[var(--color-primary)] hover:shadow-[0_22px_45px_rgba(124,58,237,0.08)]"
              >
                {/* Subtle large background watermark 'doodle' */}
                <div className="absolute -bottom-8 -right-8 text-[var(--color-primary)]/4 pointer-events-none select-none transform rotate-12 transition-all duration-500 group-hover:scale-110 group-hover:rotate-[6deg] group-hover:text-[var(--color-primary)]/8">
                  <IconComponent className="h-36 w-36" strokeWidth={0.75} />
                </div>

                {/* Floating Highlight Track Badge */}
                <div className="absolute right-8 top-8 rounded-full bg-slate-50 px-3 py-1.5 text-xs font-extrabold text-slate-400 border border-slate-100 transition duration-300 group-hover:bg-violet-50 group-hover:border-violet-100 group-hover:text-[var(--color-primary)]">
                  Track {item.step}
                </div>

                {/* Animated Icon Wrapper */}
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-50/60 border border-violet-100/50 transition-all duration-300 group-hover:bg-[var(--color-primary)] group-hover:border-transparent group-hover:shadow-[0_10px_20px_rgba(124,58,237,0.2)]">
                  <IconComponent className="h-6 w-6 text-[var(--color-primary)] transition-colors duration-300 group-hover:text-white" />
                </div>

                {/* Categorization & Subtitle Header */}
                <div className="space-y-1">
                  <p className="text-xs font-black uppercase tracking-widest text-[var(--color-secondary)]">
                    {item.title}
                  </p>
                  
                  <h3 className="text-xl font-bold text-slate-800 transition-colors duration-300 group-hover:text-[var(--color-primary)]">
                    {item.subtitle}
                  </h3>
                </div>

                {/* Core Description Text */}
                <p className="mt-4 text-sm leading-relaxed text-[var(--color-muted)] transition duration-300 group-hover:text-slate-650 relative z-10">
                  {item.description}
                </p>

                {/* Interactive bottom bar slider */}
                <div className="mt-8 h-1 w-12 rounded-full bg-slate-200 transition-all duration-300 group-hover:w-28 group-hover:bg-[var(--color-primary)]" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhyUsSection;