import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useAuth } from "../../contexts/AuthContext";
import { 
  ArrowRight, 
  Flame,
  Quote
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.08
    }
  }
};

function HeroSection() {
  const { user } = useAuth();

  return (
    <section className="relative min-h-[calc(100vh-90px)] overflow-hidden bg-slate-50/50 px-6 pt-4 pb-12 md:px-12 md:pt-6 md:pb-16 lg:px-20 lg:pt-8 lg:pb-20 flex items-center">
      {/* Decorative ambient blurred blobs */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
      >
        <div className="absolute -left-[10%] top-[5%] h-[550px] w-[550px] rounded-full bg-violet-200/40 blur-[130px]" />
        <div className="absolute -right-[5%] top-[10%] h-[450px] w-[450px] rounded-full bg-indigo-100/40 blur-[110px]" />
        <div className="absolute left-[40%] bottom-[5%] h-[350px] w-[350px] rounded-full bg-orange-100/30 blur-[100px]" />
      </motion.div>

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-12 w-full">
        
        {/* Left Column: Core content, headline, and calls to action */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="lg:col-span-6 flex flex-col justify-center"
        >
          {/* Live Platform Badge */}
          <motion.div variants={fadeInUp} className="mb-4 flex">
            <span className="inline-flex items-center gap-2 rounded-full border border-violet-100 bg-violet-50/80 px-4 py-1.5 text-xs font-semibold text-[var(--color-primary)] backdrop-blur-sm shadow-xs">
              <Flame className="h-3.5 w-3.5 text-[var(--color-accent-1)] animate-pulse" />
              <span>The Next Generation Hackathon Hub</span>
            </span>
          </motion.div>

          {/* Epic Main Headline */}
          <motion.h1 
            variants={fadeInUp}
            className="max-w-4xl text-4xl font-extrabold tracking-tight text-[var(--color-text)] sm:text-5xl md:text-6xl md:leading-[1.1]"
          >
            Code. Connect. <br />
            Create the <span className="bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-secondary)] to-[var(--color-accent-1)] bg-clip-text text-transparent drop-shadow-xs">Future.</span>
          </motion.h1>

          {/* Premium Quote Block for Description (Double Quotations + Dual Icons) */}
          <motion.div 
            variants={fadeInUp}
            className="mt-5 relative border-l-4 border-[var(--color-secondary)] bg-violet-50/30 px-6 py-4.5 rounded-r-2xl border-y border-r border-violet-100/30 shadow-[0_4px_20px_rgba(124,58,237,0.02)] backdrop-blur-xs"
          >
            <p className="text-base italic leading-relaxed text-slate-650 md:text-[1.05rem] font-medium">
              <Quote 
                fill="none"
                strokeWidth={1.5}
                className="inline-block h-7 w-7 text-[var(--color-secondary)]/25 transform -scale-x-100 mr-2 align-top -translate-y-1" 
              />
              Why wait for a degree to change the world? Jump into hackathons, build real-world projects, and start your legacy while you’re still on campus.
              <Quote 
                fill="none"
                strokeWidth={1.5}
                className="inline-block h-7 w-7 text-[var(--color-secondary)]/25 ml-2 align-top -translate-y-1" 
              />
            </p>
          </motion.div>

          {/* Premium Call to Actions */}
          <motion.div 
            variants={fadeInUp}
            className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
          >
            <Link
              to={user ? "/dashboard" : "/signup"}
              className="group relative flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-[var(--color-primary)] px-8 py-4 text-center text-sm font-bold text-white shadow-lg transition-all hover:scale-[1.02] hover:shadow-[0_12px_24px_-10px_rgba(53,0,139,0.5)] active:scale-[0.98]"
            >
              <span className="relative z-10 flex items-center gap-2">
                Start Building <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/15 to-transparent transition-transform duration-600 group-hover:translate-x-full" />
            </Link>

            <a
              href="#why-us"
              className="flex items-center justify-center gap-2 rounded-xl border border-slate-200/80 bg-white/80 px-8 py-4 text-center text-sm font-semibold text-slate-700 transition-all hover:border-[var(--color-primary)] hover:bg-[var(--color-bg-alt)] hover:text-[var(--color-primary)] shadow-xs"
            >
              How It Works
            </a>
          </motion.div>
        </motion.div>

        {/* Right Column: High-Fidelity Custom Hackathon SaaS Illustration */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, x: 25 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.12, ease: "easeOut" }}
          className="lg:col-span-6 relative w-full"
        >
          {/* Subtle glowing ambient circles behind the image */}
          <div className="absolute -left-6 -top-6 h-40 w-40 rounded-full bg-[var(--color-accent-2)]/25 blur-3xl" />
          <div className="absolute -bottom-8 -right-6 h-48 w-48 rounded-full bg-[var(--color-secondary)]/20 blur-3xl" />

          {/* Smooth floating container with premium double-border and shadow styling */}
          <motion.div 
            animate={{ 
              y: [0, -10, 0],
            }}
            transition={{ 
              duration: 5.5, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-3 shadow-2xl transition-shadow duration-300 hover:shadow-[0_32px_60px_-15px_rgba(15,23,42,0.18)] max-w-[485px] mx-auto lg:ml-auto"
          >
            <div className="overflow-hidden rounded-2xl border border-slate-100">
              <img
                src="/hackathon_coder_doodle.png"
                alt="Focused developer coding passionately"
                fetchPriority="high"
                loading="eager"
                className="h-full w-full object-cover rounded-2xl transition-transform duration-500 hover:scale-[1.015]"
              />
            </div>
          </motion.div>
        </motion.div>
        
      </div>
    </section>
  );
}

export default HeroSection;
