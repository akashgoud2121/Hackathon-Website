import { motion } from "framer-motion";

// Import Track Images
import PromptCombatImg from "../../assets/Prompt_Combat.png";
import FullstackFusionImg from "../../assets/Fullstack_Fusion.png";
import MechanicMeleeImg from "../../assets/Mechanic_Melee.png";
import KineticKombatImg from "../../assets/Kinetic_Kombat.png";

const fadeInUp = {
  initial: { opacity: 0, y: 25 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-20px" },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.15
    }
  },
  viewport: { once: true, margin: "-20px" }
};

function FutureAddonsSection() {
  const tracks = [
    {
      name: "Prompt Combat",
      image: PromptCombatImg,
      glowColor: "hover:shadow-[0_22px_45px_rgba(249,115,22,0.12)]"
    },
    {
      name: "Full-Stack Fusion",
      image: FullstackFusionImg,
      glowColor: "hover:shadow-[0_22px_45px_rgba(124,58,237,0.12)]"
    },
    {
      name: "Mechanic Melee",
      image: MechanicMeleeImg,
      glowColor: "hover:shadow-[0_22px_45px_rgba(244,63,94,0.12)]"
    },
    {
      name: "Kinetic Kombat",
      image: KineticKombatImg,
      glowColor: "hover:shadow-[0_22px_45px_rgba(168,85,247,0.12)]"
    }
  ];

  return (
    <section
      id="arenas"
      className="overflow-hidden bg-[var(--color-bg-alt)] px-6 py-20 md:px-12 md:py-24 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        
        {/* Title block */}
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-secondary)]">
            Choose Your Battleground
          </p>

          <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-[var(--color-text)] md:text-5xl lg:text-6xl">
            The Active Arena Tracks
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[var(--color-muted)] md:text-lg">
            Bypass generic templates. Select your field of battle, form your squad, and build complex, original architectures designed to satisfy challenging corporate briefs and active sponsor requirements.
          </p>
        </div>

        {/* Visual Folded-Paper Cards Grid (With Zero Cropping) */}
        <motion.div 
          className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4"
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-20px" }}
        >
          {tracks.map((track) => {
            return (
              <motion.div
                key={track.name}
                variants={fadeInUp}
                className={`group relative w-full rounded-[32px] bg-transparent transition duration-300 hover:-translate-y-2 ${track.glowColor}`}
              >
                {/* Card Container holding the image */}
                <div className="relative w-full overflow-hidden rounded-[32px]">
                  {/* Dynamic full-width image carrying its own native aspect ratio with ZERO cropping */}
                  <img
                    src={track.image}
                    alt={`${track.name} artwork`}
                    className="w-full h-auto block transition duration-500 group-hover:scale-[1.03]"
                  />

                  {/* Mask and Fold System sitting perfectly at bottom-right corner of the image */}
                  <div className="absolute bottom-0 right-0 h-11 w-11 pointer-events-none z-20">
                    {/* 1. Masking Triangle: Matches section background to hide the original image corner */}
                    <div 
                      className="absolute inset-0 bg-[var(--color-bg-alt)]"
                      style={{
                        clipPath: "polygon(100% 0, 0 100%, 100% 100%)"
                      }}
                    />
                    
                    {/* 2. Folded Flap Triangle: Simulates the folded-back paper corner */}
                    <div 
                      className="absolute inset-0 bg-gradient-to-br from-white to-slate-200 border-t border-l border-slate-200 shadow-[-3px_-3px_10px_rgba(15,23,42,0.08)]"
                      style={{
                        clipPath: "polygon(0 0, 100% 0, 0 100%)"
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default FutureAddonsSection;