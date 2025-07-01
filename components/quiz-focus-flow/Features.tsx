
import { Brain, Target, Zap, BookOpen, TrendingUp, Users } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Generated Quizzes",
      description: "Our advanced AI creates personalized quizzes for any topic, from Python programming to world history, tailored to your skill level.",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: Target,
      title: "Focused Recommendations",
      description: "Get specific study recommendations based on your quiz performance. Know exactly what to focus on next for maximum learning efficiency.",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: Zap,
      title: "Instant Results",
      description: "Receive immediate feedback and scoring with detailed explanations. Learn from your mistakes in real-time and build confidence.",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: BookOpen,
      title: "Any Subject",
      description: "Master programming languages, mathematics, sciences, languages, history, and more. Our AI adapts to any learning domain.",
      color: "from-orange-500 to-red-600"
    },
    {
      icon: TrendingUp,
      title: "Track Progress",
      description: "Monitor your learning journey with performance analytics. See your improvement over time and identify areas for growth.",
      color: "from-teal-500 to-cyan-600"
    },
    {
      icon: Users,
      title: "Beginner to Advanced",
      description: "Whether you're just starting or looking to advance your skills, our AI adjusts difficulty to match your current level.",
      color: "from-violet-500 to-purple-600"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose EduBot AI?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the future of personalized learning with AI that understands your unique learning style and adapts to help you succeed.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="group bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
