
import { Target, Clock, TrendingUp, BookOpen, Brain, Lightbulb } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: Target,
      title: "Stop Studying the Wrong Things",
      description: "Get precise recommendations on exactly what concepts you need to focus on next, eliminating wasted study time on topics you already know.",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: Clock,
      title: "Learn 3x Faster Than Traditional Methods",
      description: "Skip hours of aimless studying. Our AI identifies your knowledge gaps in seconds and creates a personalized learning path for maximum efficiency.",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: TrendingUp,
      title: "Build Confidence Through Targeted Practice",
      description: "See immediate improvement as you focus on your weak spots. Track your progress and gain confidence with every quiz you complete.",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: BookOpen,
      title: "Master Any Subject at Your Level",
      description: "Whether you're learning Python, calculus, or history - our AI adapts to your current knowledge level and helps you progress step by step.",
      color: "from-orange-500 to-red-600"
    },
    {
      icon: Brain,
      title: "Get Instant, Personalized Feedback",
      description: "Understand not just what you got wrong, but why. Receive detailed explanations and specific study recommendations after every quiz.",
      color: "from-teal-500 to-cyan-600"
    },
    {
      icon: Lightbulb,
      title: "Adaptive Learning That Evolves With You",
      description: "Our AI continuously learns from your responses, adjusting difficulty and focus areas to match your improving skill level and learning style.",
      color: "from-amber-500 to-orange-600"
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 left-20 w-96 h-96 bg-indigo-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-indigo-500/20">
            <Brain className="h-5 w-5 text-indigo-400" />
            <span className="text-indigo-300 font-semibold">Transform Your Learning</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
            <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              Why Choose
            </span>
            <br />
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              EduBot AI?
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Stop wasting time on ineffective studying. Experience AI-powered learning that adapts to your needs and accelerates your progress.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={index}
                className="group relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 hover:-translate-y-3 border border-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-indigo-500/10"
              >
                {/* Gradient border effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>
                
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${benefit.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                  <Icon className="h-10 w-10 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-indigo-300 transition-colors duration-300">
                  {benefit.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed text-lg group-hover:text-gray-200 transition-colors duration-300">
                  {benefit.description}
                </p>
                
                {/* Subtle bottom accent */}
                <div className={`absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r ${benefit.color} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA section */}
        <div className="text-center animate-fade-in">
          <div className="inline-flex items-center gap-3 text-gray-400 mb-4">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
            <span className="text-sm font-medium">Ready to transform your learning?</span>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
          </div>
          <p className="text-gray-300 text-lg">
            Join thousands of students already learning smarter with EduBot AI
          </p>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
