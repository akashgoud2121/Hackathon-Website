import { useLocation } from "react-router-dom";
import Logo from "../../assets/Carrer_Copilot_Logo.png";

function Footer() {
  const location = useLocation();

  return (
    <footer className="border-t border-slate-200 bg-[linear-gradient(180deg,#f8fafc_0%,#ffffff_100%)]">
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-12 lg:px-20">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-0">
              <img
                src={Logo}
                alt="Talengrid logo"
                className="h-9 w-9 object-contain md:h-12 md:w-12"
              />

              <span className="-ml-0.5 text-xl font-bold tracking-[-0.03em] text-[var(--color-primary)] md:text-2xl">
                <span className="sr-only">T</span>alengrid
              </span>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-[var(--color-muted)]">
              Talengrid helps campus builders and developers form balanced squads, co-pilot software prototypes with Google Gemini, and fast-track their tech careers through direct sponsor evaluation.
            </p>
          </div>

          <div className={`grid gap-10 sm:grid-cols-2 md:gap-14 ${location.pathname !== "/" ? "sm:grid-cols-1" : ""}`}>
            {location.pathname === "/" && (
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--color-text)]">
                  Explore
                </p>
                <div className="mt-4 flex flex-col gap-3 text-sm text-slate-600 font-medium">
                  <a
                    href="#why-us"
                    className="transition hover:text-[var(--color-primary)] font-medium"
                  >
                    Why Us
                  </a>
                  <a
                    href="#features"
                    className="transition hover:text-[var(--color-primary)] font-medium"
                  >
                    Features
                  </a>
                  <a
                    href="#arenas"
                    className="transition hover:text-[var(--color-primary)] font-medium"
                  >
                    Active Tracks
                  </a>
                  <a
                    href="#ai-tools"
                    className="transition hover:text-[var(--color-primary)] font-medium"
                  >
                    AI Workspace
                  </a>
                </div>
              </div>
            )}


            <div>
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--color-text)]">
                Platform
              </p>
              <div className="mt-4 flex flex-col gap-3 text-sm text-slate-600 font-medium">
                <p>Hacker Dashboard</p>
                <p>Gemini Workspace</p>
                <p>Squad Matchmaker</p>
                <p>Venture Pitch Coach</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-200 pt-6">
          <div className="flex flex-col gap-3 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
            <p>© 2026 Talengrid. All rights reserved.</p>
            <p>Empowering student innovation and engineering excellence.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;