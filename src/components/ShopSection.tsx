import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import productImage from "@/assets/hero-cream.jpg";

const ShopSection = () => {
  const products = [
    {
      id: 1,
      name: "Luxe Hydrating Cream",
      price: "$89",
      originalPrice: "$120",
      description: "Our signature hydrating cream with natural botanicals",
      image: productImage,
      badge: "Best Seller",
      size: "50ml"
    },
    {
      id: 2,
      name: "Luxe Night Renewal Cream",
      price: "$95",
      description: "Intensive overnight treatment for skin regeneration",
      image: productImage,
      badge: "New",
      size: "50ml"
    },
    {
      id: 3,
      name: "Luxe Travel Set",
      price: "$120",
      originalPrice: "$150",
      description: "Perfect travel-sized collection of our bestsellers",
      image: productImage,
      badge: "Limited Edition",
      size: "3 x 15ml"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
            Shop Our
            <span className="text-primary block">Luxury Collection</span>
          </h2>
          <p className="font-poppins text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our carefully crafted collection of premium skincare products. 
            Each formula is designed to deliver exceptional results and a luxurious experience.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="bg-card rounded-3xl shadow-lg border border-border overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                <Badge 
                  className="absolute top-4 left-4 bg-primary text-primary-foreground"
                >
                  {product.badge}
                </Badge>
              </div>
              
              <div className="p-6">
                <h3 className="font-playfair text-2xl font-semibold text-foreground mb-2">
                  {product.name}
                </h3>
                <p className="font-poppins text-sm text-muted-foreground mb-1">
                  {product.size}
                </p>
                <p className="font-poppins text-muted-foreground mb-4">
                  {product.description}
                </p>
                
                <div className="flex items-center gap-3 mb-6">
                  <span className="font-poppins text-2xl font-bold text-foreground">
                    {product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="font-poppins text-lg text-muted-foreground line-through">
                      {product.originalPrice}
                    </span>
                  )}
                </div>
                
                <Button 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-poppins font-medium py-3 rounded-full transition-all duration-300 hover:scale-105"
                >
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopSection;