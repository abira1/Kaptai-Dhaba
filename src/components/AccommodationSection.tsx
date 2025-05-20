import React, { useState } from 'react';
import { Bed, Wifi, Coffee, Star, ArrowRight, Bath, Tv, BoxIcon, Users, MapPin, Info } from 'lucide-react';
export const AccommodationSection = () => {
  const [selectedRoom, setSelectedRoom] = useState<number | null>(null);
  const [showFeatures, setShowFeatures] = useState<number | null>(null);
  const rooms = [{
    name: 'Lake View Suite',
    price: '4500',
    image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070&auto=format&fit=crop',
    description: 'Luxurious suite with panoramic views of Kaptai Lake. Perfect for a romantic getaway.',
    amenities: [{
      icon: Bed,
      label: 'King-size bed'
    }, {
      icon: Bath,
      label: 'Luxury bathroom'
    }, {
      icon: Tv,
      label: 'Smart TV'
    }, {
      icon: Coffee,
      label: 'Mini bar'
    }],
    features: ['Lake view balcony', '55m² room', 'Rainfall shower', 'Evening turndown service'],
    capacity: '2 adults',
    location: 'Lake wing',
    rating: 4.9,
    reviews: 128
  }, {
    name: 'Garden Room',
    price: '3500',
    image: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=2070&auto=format&fit=crop',
    description: 'Comfortable room overlooking our lush gardens. Ideal for nature lovers.',
    amenities: [{
      icon: Bed,
      label: 'Queen-size bed'
    }, {
      icon: Bath,
      label: 'Private bathroom'
    }, {
      icon: Tv,
      label: 'Flat-screen TV'
    }, {
      icon: Coffee,
      label: 'Tea maker'
    }],
    features: ['Garden view', '35m² room', 'Work desk', 'Daily housekeeping'],
    capacity: '2 adults',
    location: 'Garden wing',
    rating: 4.7,
    reviews: 96
  }, {
    name: 'Family Suite',
    price: '6500',
    image: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?q=80&w=2067&auto=format&fit=crop',
    description: 'Spacious suite with separate living area. Perfect for families or groups.',
    amenities: [{
      icon: Bed,
      label: 'Two bedrooms'
    }, {
      icon: Bath,
      label: 'Two bathrooms'
    }, {
      icon: Tv,
      label: 'Multiple TVs'
    }, {
      icon: Coffee,
      label: 'Kitchenette'
    }],
    features: ['Multiple views', '75m² suite', 'Living room', 'Dining area'],
    capacity: '4 adults',
    location: 'Premium wing',
    rating: 4.8,
    reviews: 156
  }];
  const features = [{
    icon: Wifi,
    title: 'Free Wi-Fi',
    description: 'High-speed internet access throughout the property',
    color: 'bg-[#f9f1de]'
  }, {
    icon: Coffee,
    title: '24/7 Room Service',
    description: 'In-room dining with local and international cuisine',
    color: 'bg-[#f9f1de]'
  }, {
    icon: BoxIcon,
    title: 'Free Parking',
    description: 'Complimentary secure parking for all guests',
    color: 'bg-[#f9f1de]'
  }, {
    icon: Bed,
    title: 'Luxury Bedding',
    description: 'Premium mattresses and high-quality linens',
    color: 'bg-[#f9f1de]'
  }];
  return <section id="accommodation" className="py-12 sm:py-20 bg-[#f9f1de] relative">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#0e3e2e]/10 to-transparent"></div>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#0e3e2e] mb-3 sm:mb-4">
            Stay With Us
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#0e3e2e]/80 max-w-2xl mx-auto px-4">
            Experience comfort and luxury with breathtaking views of Kaptai Lake
          </p>
        </div>
        {/* Updated grid columns for mobile */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-8 mb-12 sm:mb-16">
          {rooms.map((room, index) => <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1" onMouseEnter={() => setSelectedRoom(index)} onMouseLeave={() => setSelectedRoom(null)}>
              <div className="relative h-40 sm:h-72 overflow-hidden">
                <img src={room.image} alt={room.name} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e3e2e] via-[#0e3e2e]/60 to-transparent opacity-100 sm:opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                {/* Rating Badge - Always visible */}
                <div className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-white/90 backdrop-blur-sm px-2 sm:px-3 py-1 sm:py-1.5 rounded-full">
                  <div className="flex items-center space-x-1">
                    <Star className="fill-[#e79c56] text-[#e79c56]" size={14} />
                    <span className="font-medium text-[#0e3e2e] text-xs sm:text-base">
                      {room.rating}
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-3 sm:p-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2 sm:mb-4">
                  <h3 className="text-sm sm:text-xl font-semibold text-[#0e3e2e] mb-1 sm:mb-0">
                    {room.name}
                  </h3>
                  <div className="flex items-baseline">
                    <span className="text-base sm:text-2xl font-bold text-[#e79c56]">
                      {room.price} BDT
                    </span>
                    <span className="text-xs sm:text-sm text-[#0e3e2e]/60 ml-1">
                      /night
                    </span>
                  </div>
                </div>
                <p className="text-xs sm:text-base text-[#0e3e2e]/80 mb-2 sm:mb-4 line-clamp-2">
                  {room.description}
                </p>
                <div className="hidden sm:grid grid-cols-2 gap-3 mb-4">
                  {room.amenities.map((amenity, i) => <div key={i} className="flex items-center space-x-2">
                      <amenity.icon size={16} className="text-[#e79c56]" />
                      <span className="text-sm text-[#0e3e2e]/70">
                        {amenity.label}
                      </span>
                    </div>)}
                </div>
                {/* Mobile Features Button */}
                <button onClick={() => setShowFeatures(showFeatures === index ? null : index)} className="sm:hidden w-full text-center px-3 py-2 bg-[#f9f1de]/50 rounded-lg mb-2">
                  <span className="text-xs font-medium text-[#0e3e2e]">
                    View Features
                  </span>
                </button>
                {/* Desktop Features */}
                <div className="hidden sm:block bg-[#f9f1de]/30 rounded-lg p-4 mb-6">
                  <h4 className="text-sm font-medium text-[#0e3e2e] mb-2">
                    Room Features:
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {room.features.map((feature, i) => <div key={i} className="flex items-center text-[#0e3e2e]/70">
                        <div className="w-1.5 h-1.5 bg-[#e79c56] rounded-full mr-2"></div>
                        <span className="text-sm">{feature}</span>
                      </div>)}
                  </div>
                </div>
                <button className="w-full bg-[#0e3e2e] text-[#f9f1de] py-2 sm:py-3 rounded-lg text-sm sm:text-base font-medium transition-all duration-300 hover:bg-[#e79c56] active:scale-95 sm:active:scale-100 group">
                  <span className="relative z-10 flex items-center justify-center gap-1 sm:gap-2">
                    Book Now
                    <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </div>
            </div>)}
        </div>
        {/* Features grid updated for mobile */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {features.map((feature, index) => <div key={index} className="bg-white/80 backdrop-blur-sm p-3 sm:p-6 rounded-xl hover:shadow-lg transition-all duration-300 border border-[#0e3e2e]/5 hover:border-[#e79c56]/20">
              <div className="w-8 h-8 sm:w-12 sm:h-12 bg-[#e79c56]/20 rounded-full flex items-center justify-center mb-2 sm:mb-4">
                <feature.icon size={16} className="text-[#e79c56]" />
              </div>
              <h3 className="text-sm sm:text-xl font-semibold text-[#0e3e2e] mb-1 sm:mb-2">
                {feature.title}
              </h3>
              <p className="text-xs sm:text-base text-[#0e3e2e]/70">
                {feature.description}
              </p>
            </div>)}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0e3e2e]/10 to-transparent"></div>
    </section>;
};