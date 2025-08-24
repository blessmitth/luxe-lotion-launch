const IngredientsSection = () => {
  const ingredients = [
    {
      name: "Aloe Vera",
      benefit: "Soothes and calms irritated skin while providing gentle hydration",
      icon: "🌱"
    },
    {
      name: "Shea Butter",
      benefit: "Rich in vitamins A & E, deeply moisturizes and repairs skin barrier",
      icon: "🥥"
    },
    {
      name: "Vitamin E",
      benefit: "Powerful antioxidant that protects against environmental damage",
      icon: "✨"
    },
    {
      name: "Hyaluronic Acid",
      benefit: "Holds 1000x its weight in water for plump, hydrated skin",
      icon: "💧"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
            Powerful Ingredients,
            <span className="text-primary block">Proven Results</span>
          </h2>
          <p className="font-poppins text-lg text-muted-foreground max-w-3xl mx-auto">
            We carefully select each ingredient for its unique benefits and proven effectiveness. 
            Every component works synergistically to deliver exceptional results.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ingredients.map((ingredient, index) => (
            <div 
              key={index} 
              className="bg-card p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-border"
            >
              <div className="text-5xl mb-6 text-center">
                {ingredient.icon}
              </div>
              <h3 className="font-playfair text-2xl font-semibold text-foreground mb-4 text-center">
                {ingredient.name}
              </h3>
              <p className="font-poppins text-muted-foreground text-center leading-relaxed">
                {ingredient.benefit}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IngredientsSection;