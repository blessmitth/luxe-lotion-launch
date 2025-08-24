import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      rating: 5,
      text: "This cream has completely transformed my skin! The texture is luxurious and my skin feels hydrated all day long. I've received so many compliments!",
      location: "New York, NY"
    },
    {
      name: "Emily Chen",
      rating: 5,
      text: "As someone with sensitive skin, I was hesitant to try new products. This cream is so gentle yet effective. My skin has never looked better!",
      location: "Los Angeles, CA"
    },
    {
      name: "Maria Rodriguez",
      rating: 5,
      text: "I love that it's made with natural ingredients. The results speak for themselves - my skin is glowing and feels incredibly soft and smooth.",
      location: "Miami, FL"
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
            What Our Customers
            <span className="text-primary block">Are Saying</span>
          </h2>
          <p className="font-poppins text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. See what thousands of satisfied customers 
            have to say about their transformation.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-card p-8 rounded-3xl shadow-lg border border-border hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <p className="font-poppins text-muted-foreground mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              
              <div>
                <p className="font-poppins font-semibold text-foreground">
                  {testimonial.name}
                </p>
                <p className="font-poppins text-sm text-muted-foreground">
                  {testimonial.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;