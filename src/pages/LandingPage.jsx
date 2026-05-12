import HeroSection from "../components/sections/HeroSection";
import WhyUsSection from "../components/sections/WhyUsSection";
import FeaturesSection from "../components/sections/FeaturesSection";
import FutureAddonsSection from "../components/sections/FutureAddonsSection";
import AIToolsSection from "../components/sections/AIToolsSection";
import HowItWorksSection from "../components/sections/HowItWorksSection";
import StudentLoveSection from "../components/sections/StudentLoveSection";
import CTASection from "../components/sections/CTASection";
import BackToTop from "../components/common/BackToTop";
import SEO from "../components/common/SEO";

function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <SEO 
        title="Talengrid | AI-Powered Cohort Launch Hub for Campus Builders"
        description="Form elite squads, co-pilot your projects with Google Gemini, and ship production-grade prototypes directly to sponsors. Designed for campus developers to change the world."
        path="/"
      />

      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is Talengrid?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Talengrid is an AI-powered platform and workspace designed specifically for campus builders, developers, and designers to discover active cohorts, form elite squads, and build real-world products."
                }
              },
              {
                "@type": "Question",
                "name": "How does Talengrid use Google Gemini AI?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "By connecting your Gemini API key, Talengrid gives squads a built-in co-pilot to help brainstorm product features, scaffold starting database schemas, audit code for security leaks, and practice pitches."
                }
              },
              {
                "@type": "Question",
                "name": "Is it completely free for campus builders?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, Talengrid is free for students and developers. Sponsoring corporations fund the prize pools and API credits to bridge the gap between education and high-growth careers."
                }
              }
            ]
          })
        }}
      />
      <main>
        <HeroSection />
        <WhyUsSection />
        <FeaturesSection />
        <FutureAddonsSection />
        <AIToolsSection />
        <HowItWorksSection />
        <StudentLoveSection />
        <CTASection />
      </main>
      <BackToTop />
    </div>
  );
}


export default LandingPage;