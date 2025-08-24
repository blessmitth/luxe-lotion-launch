import HeroSection from "@/components/HeroSection";
import AboutProduct from "@/components/AboutProduct";
import IngredientsSection from "@/components/IngredientsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ShopSection from "@/components/ShopSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutProduct />
      <IngredientsSection />
      <TestimonialsSection />
      <ShopSection />
      <Footer />
    </main>
  );
};

export default Index;
