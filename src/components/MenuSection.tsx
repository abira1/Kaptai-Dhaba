import React, { useState } from 'react';
import { Coffee, Utensils, Fish, Soup, Cake, Wine } from 'lucide-react';
type MenuSectionProps = {
  standalone?: boolean;
};
export const MenuSection = ({
  standalone = false
}: MenuSectionProps) => {
  const [activeCategory, setActiveCategory] = useState('beverages');
  const [isAnimating, setIsAnimating] = useState(false);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right'>('left');
  const handleCategoryChange = (categoryId: string) => {
    // Determine slide direction based on category index
    const currentIndex = categories.findIndex(cat => cat.id === activeCategory);
    const newIndex = categories.findIndex(cat => cat.id === categoryId);
    setSlideDirection(newIndex > currentIndex ? 'left' : 'right');
    setIsAnimating(true);
    setActiveCategory(categoryId);
    setTimeout(() => setIsAnimating(false), 300); // Match this with animation duration
  };
  const categories = [{
    id: 'beverages',
    name: 'Beverages',
    icon: Coffee
  }, {
    id: 'mains',
    name: 'Main Course',
    icon: Utensils
  }, {
    id: 'fish',
    name: 'Fish Items',
    icon: Fish
  }, {
    id: 'rice',
    name: 'Rice & Veg',
    icon: Soup
  }, {
    id: 'desserts',
    name: 'Desserts',
    icon: Cake
  }, {
    id: 'specials',
    name: 'Specials',
    icon: Wine
  }];
  const menuItems = {
    beverages: [{
      name: 'Mineral Water',
      price: '20-30',
      description: 'Refreshing bottled mineral water'
    }, {
      name: 'Soft Drinks',
      price: '30-40',
      description: 'Coke, Sprite, and other carbonated beverages'
    }, {
      name: 'Tea',
      price: '15',
      description: 'Freshly brewed local tea'
    }, {
      name: 'Coffee',
      price: '40',
      description: 'Hot brewed coffee'
    }, {
      name: 'Lemonade',
      price: '30',
      description: 'Fresh squeezed lemonade'
    }, {
      name: 'Seasonal Juice',
      price: '50',
      description: 'Fresh juice made from seasonal fruits'
    }],
    mains: [{
      name: 'Chicken Biryani',
      price: '130',
      description: 'Aromatic rice cooked with tender chicken and spices'
    }, {
      name: 'Beef Biryani',
      price: '220',
      description: 'Rich biryani prepared with premium beef cuts'
    }, {
      name: 'Chicken Chap',
      price: '140',
      description: 'Grilled chicken in special marinade'
    }, {
      name: 'Chicken Masala',
      price: '230',
      description: 'Chicken cooked in rich spicy gravy'
    }, {
      name: 'Grilled Chicken',
      price: '110',
      description: '1 x 8 Quarter piece of grilled chicken'
    }, {
      name: 'Fried Chicken',
      price: '80',
      description: 'Crispy fried chicken'
    }],
    fish: [{
      name: 'Guruk (Seasonal)',
      price: '250',
      description: '5 pieces of seasonal Guruk fish'
    }, {
      name: 'Katla Fish',
      price: '180',
      description: 'Fresh Katla fish preparation'
    }, {
      name: 'Rui Fish',
      price: '180',
      description: 'Traditional Rui fish curry'
    }, {
      name: 'Boal Fish',
      price: '150-200',
      description: 'Fresh Boal fish preparation'
    }, {
      name: 'Shrimp Curry',
      price: '200',
      description: 'Fresh shrimp cooked in traditional style'
    }, {
      name: 'Kalo Baim',
      price: '200',
      description: 'Black Eel prepared in special sauce'
    }],
    rice: [{
      name: 'Plain Rice',
      price: '30',
      description: 'Per person serving of steamed rice'
    }, {
      name: 'Lentils',
      price: '30',
      description: 'Traditional Bengali dal preparation'
    }, {
      name: 'Mixed Vegetables',
      price: '40',
      description: 'Seasonal vegetables cooked together'
    }, {
      name: 'Egg Curry',
      price: '40',
      description: 'Eggs cooked in aromatic curry sauce'
    }],
    desserts: [{
      name: 'Firni',
      price: '40',
      description: 'Traditional rice pudding dessert'
    }, {
      name: 'Semai',
      price: '30',
      description: 'Sweet vermicelli pudding'
    }, {
      name: 'Sweet Yogurt',
      price: '50',
      description: 'Creamy sweet yogurt dessert'
    }, {
      name: 'Ice Cream',
      price: '40',
      description: 'Served in cup'
    }],
    specials: [{
      name: 'Dried Fish Vorta',
      price: '70',
      description: 'Traditional mashed dried fish preparation'
    }, {
      name: 'Eggplant Mash',
      price: '40',
      description: 'Smoky mashed eggplant'
    }, {
      name: 'Fish Mash',
      price: '50',
      description: 'Spiced mashed fish preparation'
    }, {
      name: 'Shrimp Mash',
      price: '50',
      description: 'Spiced mashed shrimp'
    }, {
      name: 'Roti',
      price: '10',
      description: 'Freshly made flatbread'
    }, {
      name: 'Paratha',
      price: '30',
      description: 'Layered flatbread'
    }]
  };
  return <section id="menu" className={`py-16 bg-[#f9f1de] relative overflow-hidden ${standalone ? 'pt-32' : ''}`}>
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#0e3e2e]/10 to-transparent"></div>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-4xl font-bold text-[#0e3e2e] mb-2">
            Our Menu
          </h2>
          <p className="text-base md:text-lg text-[#0e3e2e]/80 max-w-2xl mx-auto">
            Savor the authentic flavors of Kaptai
          </p>
        </div>
        <div className="flex flex-row gap-6 max-w-6xl mx-auto">
          {/* Category Icons Column */}
          <div className="flex flex-col gap-2">
            {categories.map(category => <button key={category.id} onClick={() => handleCategoryChange(category.id)} className={`p-3 rounded-lg transition-all duration-300 group relative overflow-hidden
                  ${activeCategory === category.id ? 'bg-[#0e3e2e] text-[#f9f1de] shadow-lg scale-105' : 'bg-[#0e3e2e]/5 text-[#0e3e2e] hover:bg-[#0e3e2e]/10'}`}>
                <div className="relative z-10 transition-transform duration-300 group-hover:scale-110">
                  <category.icon size={24} />
                  <span className={`
                      absolute left-full ml-2 px-2 py-1 text-sm bg-[#0e3e2e] text-[#f9f1de] rounded
                      opacity-0 group-hover:opacity-100 transition-all duration-300
                      translate-x-2 group-hover:translate-x-0
                      pointer-events-none whitespace-nowrap z-10
                    `}>
                    {category.name}
                  </span>
                </div>
                {activeCategory === category.id && <div className="absolute inset-0 bg-[#e79c56] opacity-20 animate-pulse"></div>}
              </button>)}
          </div>
          {/* Menu Items Grid */}
          <div className="flex-1 overflow-hidden">
            <div className={`
                grid grid-cols-1 md:grid-cols-2 gap-4
                transition-all duration-300 ease-out transform
                ${isAnimating ? `opacity-0 translate-${slideDirection}-full` : 'opacity-100 translate-x-0'}
              `}>
              {menuItems[activeCategory as keyof typeof menuItems].map((item, index) => <div key={index} className={`
                      flex flex-col transform transition-all duration-300
                      animate-slideIn
                    `} style={{
              animationDelay: `${index * 50}ms`
            }}>
                    <div className={`
                        bg-white/80 backdrop-blur-sm p-3 rounded-lg shadow-sm
                        border-l-4 border-[#e79c56] hover:shadow-md
                        transition-all duration-300 group h-full
                        hover:translate-y-[-2px] hover:shadow-lg
                        transform opacity-0 animate-fadeSlideIn
                      `} style={{
                animationDelay: `${index * 50}ms`,
                animationFillMode: 'forwards'
              }}>
                      <div className="flex justify-between items-start gap-2">
                        <h3 className="text-sm font-semibold text-[#0e3e2e] group-hover:text-[#e79c56] transition-colors duration-300">
                          {item.name}
                        </h3>
                        <span className="text-sm font-bold text-[#e79c56] whitespace-nowrap">
                          {item.price} BDT
                        </span>
                      </div>
                      <p className="text-[#0e3e2e]/70 text-xs mt-1">
                        {item.description}
                      </p>
                    </div>
                  </div>)}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0e3e2e]/10 to-transparent"></div>
    </section>;
};