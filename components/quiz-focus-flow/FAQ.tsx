"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How does the AI generate personalized quizzes?",
      answer: "Our AI uses advanced natural language processing to understand your chosen topic and skill level. It then creates relevant questions that test fundamental concepts while adapting to your learning needs. The AI draws from a vast knowledge base to ensure accuracy and relevance across all subjects."
    },
    {
      question: "What happens after my 3-day free trial ends?",
      answer: "After your trial ends, you'll be prompted to choose between our monthly plan (£7.99/month) or lifetime access (£29.99 one-time). You can continue using the service with unlimited quizzes, or if you choose not to upgrade, you'll keep access to your quiz history but won't be able to generate new quizzes."
    },
    {
      question: "Can I really study any topic?",
      answer: "Yes! Our AI can generate quizzes for virtually any subject - from programming languages like Python and JavaScript to academic subjects like mathematics, history, biology, chemistry, and even niche topics. Just type in what you want to learn and select your skill level."
    },
    {
      question: "How accurate are the AI-generated questions?",
      answer: "Our AI is trained on high-quality educational content and continuously improved based on user feedback. While we strive for 100% accuracy, we recommend cross-referencing with authoritative sources for critical learning. We're constantly updating our AI to improve question quality and accuracy."
    },
    {
      question: "Do I need to install any software?",
      answer: "No installation required! EduBot AI is a web-based platform that works on any device with an internet connection. Whether you're on your computer, tablet, or smartphone, you can access your quizzes and study recommendations anywhere."
    },
    {
      question: "How do the personalized recommendations work?",
      answer: "Based on your quiz performance, our AI analyzes which concepts you've mastered and which areas need improvement. It then provides specific, actionable recommendations like 'Focus on JavaScript array methods' or 'Review photosynthesis processes' to guide your next study session effectively."
    },
    {
      question: "Is my data secure and private?",
      answer: "Absolutely. We use industry-standard encryption and follow GDPR and CCPA compliance standards. Your quiz data is anonymized for improving our AI, and we never share personal information with third parties. You can delete your account and data at any time."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel your monthly subscription at any time with no questions asked. You'll continue to have access until the end of your current billing period. The lifetime access plan is a one-time payment with no recurring charges."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Got questions? We've got answers. If you can't find what you're looking for, feel free to contact us.
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <button
                className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-inset"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                  )}
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
