import React from 'react';
import { Waves, Mountain, Fish, Leaf } from 'lucide-react';
export const AboutSection = () => {
  const features = [{
    icon: Mountain,
    title: 'Natural Marvel',
    description: 'Surrounded by lush green hills and spanning 688 square kilometers, Kaptai Lake offers breathtaking views and serene experiences.'
  }, {
    icon: Waves,
    title: 'Historic Legacy',
    description: "Created in the 1960s, the lake hosts Bangladesh's first hydroelectric power station while preserving rich cultural heritage."
  }, {
    icon: Fish,
    title: 'Local Livelihood',
    description: "Supporting thousands through sustainable fisheries and tourism, the lake is vital to the region's economy."
  }, {
    icon: Leaf,
    title: 'Eco Tourism',
    description: "From serene boat rides to the iconic Hanging Bridge and Shuvolong Waterfall, experience nature's true beauty."
  }];
  return <section id="about" className="py-20 bg-[#0e3e2e] relative">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#f9f1de]/10 to-transparent"></div>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-[#f9f1de] mb-4">
            Our Story
          </h2>
          <p className="text-lg md:text-xl text-[#f9f1de]/80 max-w-2xl mx-auto">
            Discover the jewel of the Chittagong Hill Tracts
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center mb-16">
          <div className="md:w-1/2">
            <div className="relative">
              <img src="https://i.postimg.cc/mDpqq0w1/unnamed-18.webp" alt="Scenic view of Kaptai Lake" className="rounded-lg shadow-xl" />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 md:w-32 md:h-32 bg-[#e79c56] rounded-lg shadow-lg flex items-center justify-center p-4 transform rotate-3">
                <span className="text-[#0e3e2e] font-bold text-lg md:text-xl text-center">
                  Since 1960s
                </span>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl md:text-3xl font-semibold text-[#e79c56] mb-4">
              A Natural Wonder
            </h3>
            <p className="text-[#f9f1de]/90 mb-4">
              Nestled in the scenic Rangamati district of Bangladesh, Kaptai
              Lake stands as the country's largest man-made lake and a true
              marvel of nature and engineering. Created in the 1960s by damming
              the Karnaphuli River, this vast body of water spans over 688
              square kilometers.
            </p>
            <p className="text-[#f9f1de]/90 mb-4">
              While its formation reshaped the landscape, it paved the way for
              Bangladesh's first hydroelectric power station. Today, Kaptai Lake
              is much more than a source of electricity - it's a hub of tourism
              and local livelihood.
            </p>
            <p className="text-[#f9f1de]/90">
              Visitors flock here to experience serene boat rides, explore the
              iconic Hanging Bridge, marvel at the Shuvolong Waterfall, or
              simply absorb the tranquility of the lake's surroundings. The lake
              remains a symbol of natural splendor, cultural heritage, and
              economic value.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => <div key={index} className="bg-[#f9f1de]/10 backdrop-blur-sm p-6 rounded-lg border-b-4 border-[#e79c56] hover:transform hover:translate-y-[-5px] transition-all duration-300">
              <div className="w-12 h-12 bg-[#e79c56]/20 rounded-full flex items-center justify-center mb-4">
                <feature.icon size={24} className="text-[#e79c56]" />
              </div>
              <h3 className="text-xl font-semibold text-[#f9f1de] mb-2">
                {feature.title}
              </h3>
              <p className="text-[#f9f1de]/80">{feature.description}</p>
            </div>)}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#f9f1de]/10 to-transparent"></div>
    </section>;
};