
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Computer Science Student at Stanford",
      content: "I was spending 6+ hours studying JavaScript but still failing quizzes. EduBot AI showed me I was missing fundamental concepts about closures and scope. Now I focus my time on actual gaps instead of reviewing things I already knew.",
      rating: 5,
      avatar: "SC",
      painPoint: "Wasted time on unfocused studying"
    },
    {
      name: "Marcus Johnson",
      role: "High School Math Teacher",
      content: "My students were struggling with calculus concepts. EduBot AI helps me quickly identify which specific areas each student needs to work on. Instead of generic homework, I can give targeted practice that actually helps.",
      rating: 5,
      avatar: "MJ",
      painPoint: "Couldn't pinpoint student weaknesses"
    },
    {
      name: "Elena Rodriguez",
      role: "Medical Student preparing for MCAT",
      content: "Studying for the MCAT felt overwhelming until I found EduBot AI. It breaks down complex biology topics and tells me exactly which systems I need to review. Went from 60% to 85% on practice tests in 3 weeks.",
      rating: 5,
      avatar: "ER",
      painPoint: "Overwhelmed by vast study material"
    },
    {
      name: "David Kim",
      role: "Software Developer switching to Python",
      content: "Learning Python for a new job was stressful. EduBot AI identified that I understood syntax but struggled with data structures. The focused recommendations helped me land my dream job at a fintech startup.",
      rating: 5,
      avatar: "DK",
      painPoint: "Career change pressure"
    },
    {
      name: "Lisa Thompson",
      role: "College Student - Business Major",
      content: "Statistics was my worst subject. EduBot AI showed me I was actually good at the math but confused about when to use different tests. The specific guidance helped me go from D+ to A- in one semester.",
      rating: 5,
      avatar: "LT",
      painPoint: "Struggling with core requirements"
    },
    {
      name: "Ahmed Hassan",
      role: "Professional Developer learning React",
      content: "Had to learn React fast for a client project. EduBot AI's quizzes revealed I understood components but was weak on state management. The targeted approach saved my project deadline and my reputation.",
      rating: 5,
      avatar: "AH",
      painPoint: "Tight deadline pressure"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Real Results from Real Students
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how EduBot AI helped students, professionals, and educators overcome their specific learning challenges and achieve breakthrough results.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 relative"
            >
              <Quote className="absolute top-4 right-4 h-8 w-8 text-indigo-100" />
              
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <div className="mb-4">
                <span className="inline-block bg-red-100 text-red-800 text-xs font-medium px-2 py-1 rounded-full mb-3">
                  Before: {testimonial.painPoint}
                </span>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">"{testimonial.content}"</p>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center text-white font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
