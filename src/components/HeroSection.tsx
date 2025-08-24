import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-cream-bg/95 to-background/95 z-10" />
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(/lovable-uploads/9df41b9c-fa14-4aa5-8d3c-3093d004f4c7.png)` }}
      />
      
      <div className="relative z-20 text-center max-w-4xl mx-auto px-6">
        <h1 className="font-playfair text-6xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 leading-tight">
          Glow Naturally
        </h1>
        <p className="font-playfair text-2xl md:text-3xl text-muted-foreground mb-8">
          with Our Hydrating Cream
        </p>
        <p className="font-poppins text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          Experience the transformative power of nature's finest ingredients. 
          Our luxurious cream delivers deep hydration and radiant results for healthy, glowing skin.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-poppins font-medium px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Shop Now
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-poppins font-medium px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105"
          >
            Discover More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;