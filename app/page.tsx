import Navigation from '@/components/quiz-focus-flow/Navigation';
import Hero from '@/components/quiz-focus-flow/Hero';
import Benefits from '@/components/quiz-focus-flow/Benefits';
import HowItWorks from '@/components/quiz-focus-flow/HowItWorks';
import Pricing from '@/components/quiz-focus-flow/Pricing';
import FAQ from '@/components/quiz-focus-flow/FAQ';
import Footer from '@/components/quiz-focus-flow/Footer';

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <div id="features">
        <Benefits />
      </div>
      <div id="how-it-works">
        <HowItWorks />
      </div>
      <div id="pricing">
        <Pricing />
      </div>
      <div id="faq">
        <FAQ />
      </div>
      <Footer />
    </div>
  );
}
