"use client";
import { Check, Star, Zap } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';

const Pricing = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const plans = [
    {
      name: "Free Trial",
      price: "£0",
      period: "3 days",
      description: "Perfect for trying out EduBot AI",
      features: [
        "Up to 5 AI-generated quizzes",
        "Any topic or subject",
        "Personalized recommendations",
        "Beginner to intermediate levels",
        "Email quiz summaries"
      ],
      cta: "Start Free Trial",
      popular: false,
      gradient: "from-gray-500 to-gray-600"
    },
    {
      name: "Monthly Pro",
      price: "£7.99",
      period: "per month",
      description: "Unlimited learning for serious students",
      features: [
        "Unlimited AI-generated quizzes",
        "All topics and skill levels",
        "Advanced personalized recommendations",
        "Performance tracking & analytics",
        "Priority email support",
        "Mobile-responsive access"
      ],
      cta: "Go Pro Monthly",
      popular: true,
      gradient: "from-indigo-500 to-purple-600"
    },
    {
      name: "Lifetime Access",
      price: "£29.99",
      period: "one-time",
      description: "Best value for long-term learners",
      features: [
        "Everything in Monthly Pro",
        "Lifetime access - pay once",
        "Future feature updates included",
        "Premium support",
        "Early access to new features",
        "Best value for money"
      ],
      cta: "Get Lifetime Access",
      popular: false,
      gradient: "from-green-500 to-emerald-600"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Choose Your Learning Plan
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Start with our free trial and upgrade when you're ready. No hidden fees, cancel anytime.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-white rounded-2xl border-2 p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${
                plan.popular ? 'border-indigo-500 shadow-lg pt-12' : 'border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-2 rounded-full flex items-center gap-2 font-semibold">
                    <Star className="h-4 w-4 fill-current" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600 ml-2">/ {plan.period}</span>
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button onClick={() => router.push('/sign-up')}
                className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white' 
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                }`}
              >
                {plan.cta} 
              </Button>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 animate-fade-in">
          <div className="flex items-center justify-center gap-2 text-gray-600 mb-4">
            <Zap className="h-5 w-5 text-green-500" />
            <span>All plans include mobile access and email support</span>
          </div>
          <p className="text-sm text-gray-500">
            Secure payments powered by Stripe. Cancel anytime. No questions asked.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
