import { Leaf, Droplets, Heart } from "lucide-react";
import productImage from "@/assets/product-lifestyle.jpg";

const AboutProduct = () => {
  const benefits = [
    {
      icon: Leaf,
      title: "Natural",
      description: "Pure botanical ingredients sourced from sustainable farms"
    },
    {
      icon: Droplets,
      title: "Hydrating",
      description: "Deep moisture that lasts all day for supple, soft skin"
    },
    {
      icon: Heart,
      title: "Gentle on Skin",
      description: "Dermatologist-tested formula suitable for all skin types"
    }
  ];

  return (
    <section className="py-20 bg-cream-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img 
              src={productImage} 
              alt="Luxe Cream with natural ingredients" 
              className="rounded-3xl shadow-2xl w-full h-96 object-cover"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-lavender rounded-full opacity-60 blur-2xl"></div>
          </div>
          
          <div>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
              The Science of
              <span className="text-primary block">Beautiful Skin</span>
            </h2>
            <p className="font-poppins text-lg text-muted-foreground mb-8 leading-relaxed">
              Our premium hydrating cream combines the wisdom of nature with modern skincare science. 
              Each jar contains carefully selected ingredients that work in harmony to nourish, 
              protect, and rejuvenate your skin.
            </p>
            
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-lg text-foreground mb-2">
                      {benefit.title}
                    </h3>
                    <p className="font-poppins text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutProduct;