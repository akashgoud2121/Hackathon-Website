function StudentLoveSection() {
  const items = [
    "Frictionless squad matching in just 3 clicks",
    "Built specifically for college students & campus clubs",
    "Integrated Google Gemini for lightning-fast debugging",
    "Sponsor-aligned briefings to ensure high-impact pitches",
    "Direct recruiting shortcuts with tech corporate sponsors",
    "Flexible workspace that scales from scripts to full repos",
  ];

  return (
    <section className="bg-white px-6 py-16 md:px-12 md:py-24 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-secondary)]">
              Why Builders Love It
            </p>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[var(--color-text)] md:text-4xl leading-tight">
              Designed to help you build when shipping feels overwhelming
            </h2>

            <p className="mt-4 text-base leading-relaxed text-[var(--color-muted)] md:text-lg">
              Talengrid streamlines team recruiting, API key config, and presentation templates so you can direct 100% of your focus on building premium code.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {items.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-[0_4px_15px_rgba(15,23,42,0.01)] hover:border-[var(--color-primary)] transition duration-250"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-slate-200">
                    <span className="h-2 w-2 rounded-full bg-[var(--color-primary)]" />
                  </div>

                  <p className="text-sm font-semibold leading-relaxed text-[var(--color-text)]">
                    {item}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default StudentLoveSection;