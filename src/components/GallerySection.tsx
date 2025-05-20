import React, { useState } from 'react';
import { XIcon } from 'lucide-react';
export const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const galleryImages = [{
    url: 'https://i.postimg.cc/mgWn03Qj/unnamed.webp',
    alt: 'Traditional Bengali thali with various dishes'
  }, {
    url: 'https://i.postimg.cc/qBb4VFRL/unnamed-1.webp',
    alt: 'Freshly prepared Bengali fish curry'
  }, {
    url: 'https://i.postimg.cc/VvTxS30P/unnamed-10.webp',
    alt: 'Authentic Bengali sweets and desserts'
  }, {
    url: 'https://i.postimg.cc/8cj8z15b/unnamed-11.webp',
    alt: 'Traditional rice and curry presentation'
  }, {
    url: 'https://i.postimg.cc/7YJ8vYjH/unnamed-12.webp',
    alt: 'Assorted Bengali snacks and appetizers'
  }, {
    url: 'https://i.postimg.cc/BnWWJfGx/unnamed-13.webp',
    alt: 'Colorful Bengali street food platter'
  }];
  return <section id="gallery" className="py-20 bg-[#0e3e2e] relative">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#f9f1de]/10 to-transparent"></div>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-[#f9f1de] mb-4">
            Gallery
          </h2>
          <p className="text-lg md:text-xl text-[#f9f1de]/80 max-w-2xl mx-auto">
            Glimpses of our cafe, cuisine, and the breathtaking surroundings
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
          {galleryImages.map((image, index) => <div key={index} className="relative overflow-hidden rounded-lg shadow-md aspect-[4/3] cursor-pointer transform transition-transform duration-500 hover:scale-[1.02] group" onClick={() => setSelectedImage(image.url)}>
              <img src={image.url} alt={image.alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e3e2e]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-[#f9f1de] text-xs md:text-base font-medium">
                  {image.alt}
                </p>
              </div>
            </div>)}
        </div>
      </div>
      {selectedImage && <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <button className="absolute top-2 right-2 text-white p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70 transition-colors duration-300" onClick={() => setSelectedImage(null)}>
              <XIcon size={24} />
            </button>
            <img src={selectedImage} alt="Enlarged gallery image" className="w-full h-auto rounded-lg shadow-2xl" />
          </div>
        </div>}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#f9f1de]/10 to-transparent"></div>
    </section>;
};