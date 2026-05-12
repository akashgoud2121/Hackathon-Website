import { motion } from "framer-motion";

function AIToolsSection() {
  const steps = [
    "Open Google AI Studio",
    "Sign in with your developer account",
    "Open the API Keys dashboard",
    "Create or copy your Gemini API key",
    "Paste it in your profile to unlock elite AI features",
  ];

  const marqueeKeywords = [
    "Gemini Workspace", "Code Generation", "System Architect", "Auto Evaluation", 
    "Team Matching", "Pitch Coach", "Feature Ideation", "Repo Analysis",
    "Boilerplate Scaffolding", "Mock Pitch AI", "Code Audit Agent"
  ];

  return (
    <section
      id="ai-tools"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#fcfbff_100%)] px-6 py-16 md:px-12 md:py-24 lg:px-20"
    >
      {/* Background Decorative Marquee */}
      <div className="absolute top-0 left-0 w-full overflow-hidden opacity-[0.035] pointer-events-none select-none">
        <motion.div 
          animate={{ x: [0, -1200] }}
          transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap py-4 text-8xl font-black uppercase tracking-tighter text-[var(--color-primary)]"
        >
          {marqueeKeywords.join(" • ")} • {marqueeKeywords.join(" • ")}
        </motion.div>
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        
        {/* Left Column: Instructions and Copy */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-secondary)]">
            AI-Powered Co-piloting
          </p>

          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[var(--color-text)] md:text-4xl leading-tight">
            Connect Gemini: Your 24/7 Hacker Co-pilot
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--color-muted)] md:text-lg">
            Talengrid empowers builders to connect their personal Gemini API key. Bring your own key to activate real-time AI code generation, system architecture design, and automated project auditing without usage limits or cost markups.
          </p>

          {/* Setup steps card */}
          <div className="mt-8 rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_8px_30px_rgba(15,23,42,0.03)]">
            <p className="text-sm font-bold text-slate-800">
              How to retrieve your free Gemini API key
            </p>

            <div className="mt-5 space-y-4">
              {steps.map((step, index) => (
                <motion.div 
                  key={step} 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)] text-[10px] font-bold text-white shadow-xs">
                    {index + 1}
                  </div>
                  <p className="pt-0.5 text-sm leading-relaxed text-[var(--color-muted)]">
                    {step}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-6 rounded-2xl border border-orange-100 bg-orange-50/60 p-5"
          >
            <p className="text-sm leading-relaxed text-[var(--color-muted)]">
              💡 <span className="font-bold text-slate-800">Tip:</span> Your API key is stored securely in your browser's local state and sent directly to Google AI APIs. We never intermediate, proxy, or store your key on our servers.
            </p>
          </motion.div>
        </motion.div>

        {/* Right Column: Key Input Field Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, rotate: 1 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative rounded-3xl border border-slate-200 bg-white/50 p-4 shadow-xl backdrop-blur-sm md:p-6"
          style={{ touchAction: "pan-y" }}
        >
          {/* Subtle floating interactive chips */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute -top-4 -right-4 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-bold shadow-md text-violet-600"
          >
            ✨ AI Co-pilot
          </motion.div>
          <motion.div 
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="pointer-events-none absolute -bottom-2 -left-4 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-bold shadow-md text-indigo-600"
          >
            Generate Code
          </motion.div>

          <div className="rounded-2xl border border-slate-200/80 bg-[var(--color-bg-alt)] p-6 shadow-xs">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-bold text-[var(--color-primary)]">
                  Connect your API Key
                </p>
                <p className="mt-1 text-xs text-[var(--color-muted)]">
                  Bring your Google AI Studio credentials
                </p>
              </div>

              <span className="rounded-full bg-violet-50 px-3 py-1 text-xs font-bold text-[var(--color-primary)] border border-violet-100">
                Developer Setup
              </span>
            </div>

            <div className="mt-6">
              <label className="mb-2 block text-sm font-bold text-slate-700">
                Gemini API Key
              </label>

              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  type="text"
                  placeholder="AIzaSy..."
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-600 outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-violet-100 transition-all shadow-inner"
                />
                <button className="rounded-xl bg-[var(--color-primary)] px-6 py-3 text-sm font-bold text-white shadow-md transition-all hover:scale-[1.03] hover:opacity-95 active:scale-95 cursor-pointer">
                  Save Key
                </button>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-dashed border-slate-200 bg-white p-5">
              <p className="text-xs leading-relaxed text-[var(--color-muted)] font-medium">
                Once connected, your development workspaces are enhanced with AI suggestions, automated security analysis, and interactive project generation modules.
              </p>
            </div>

            <div className="mt-5 rounded-2xl bg-slate-900 px-4 py-4 text-xs text-slate-200 border border-slate-850">
              <p className="font-bold text-white">Security Checklist</p>
              <p className="mt-1.5 leading-relaxed text-slate-400">
                Your key remains encrypted inside your browser. Never share your key inside chat channels or public repository commits.
              </p>
            </div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}

export default AIToolsSection;