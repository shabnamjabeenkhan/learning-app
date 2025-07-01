"use client";
import { ArrowRight, Brain, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';
import { useState } from "react";

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="flex items-center justify-center gap-2 mb-6 animate-fade-in">
          <Brain className="h-8 w-8 text-indigo-400" />
          <span className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            EduBot AI
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight animate-fade-in">
          <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Master Any Topic
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed animate-fade-in">
          Get AI-powered quizzes that identify your knowledge gaps and tell you exactly what to study next. 
          Master any subject 3x faster with personalized recommendations.
        </p>

        {/* Key Benefits List */}
        <div className="flex flex-wrap justify-center gap-6 mb-12 animate-fade-in">
          <div className="flex items-center gap-2 text-gray-300">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span className="font-medium">Know exactly what to study next</span>
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
            <span className="font-medium">Save hours of unfocused studying</span>
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
            <span className="font-medium">Works for any topic or skill level</span>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-fade-in">
          <Button size="lg" onClick={() => router.push('/sign-up')} className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
            Start Your Free Trial
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <div className="flex items-center gap-2 text-gray-300">
            <Zap className="h-5 w-5 text-green-400" />
            <span className="font-medium">3-day free trial • No credit card required</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center animate-fade-in">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-white/20">
            <div className="text-3xl font-bold text-indigo-400 mb-2">5-8</div>
            <div className="text-gray-300">Questions per quiz</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-white/20">
            <div className="text-3xl font-bold text-purple-400 mb-2">&lt;5s</div>
            <div className="text-gray-300">Quiz generation time</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-white/20">
            <div className="text-3xl font-bold text-green-400 mb-2">∞</div>
            <div className="text-gray-300">Topics available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
