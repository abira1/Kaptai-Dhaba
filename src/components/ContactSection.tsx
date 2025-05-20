import React, { useState, lazy } from 'react';
import { MapPin, Phone, Mail, Send, CheckIcon, Star, StarIcon } from 'lucide-react';
export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    rating: 5,
    review: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  // Example reviews data
  const existingReviews = [{
    name: 'Sarah M.',
    rating: 5,
    review: 'Absolutely amazing experience! The lake view was breathtaking and the food was exceptional.',
    date: '2 days ago'
  }, {
    name: 'Rahul C.',
    rating: 4,
    review: 'Great authentic flavors and wonderful atmosphere. Will definitely come back.',
    date: '1 week ago'
  }, {
    name: 'Priya K.',
    rating: 5,
    review: "The best Bengali cuisine I've had in a long time. The service was impeccable!",
    date: '2 weeks ago'
  }];
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleRatingChange = (rating: number) => {
    setFormData(prev => ({
      ...prev,
      rating
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Review submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        rating: 5,
        review: ''
      });
    }, 3000);
  };
  return <section id="contact" className="py-20 bg-[#f9f1de] relative">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#0e3e2e]/10 to-transparent"></div>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-[#0e3e2e] mb-4">
            Contact & Reviews
          </h2>
          <p className="text-lg md:text-xl text-[#0e3e2e]/80 max-w-2xl mx-auto">
            Get in touch with us or share your dining experience
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto mb-12">
          <div className="lg:w-2/5">
            <div className="bg-[#0e3e2e] text-[#f9f1de] p-6 md:p-8 rounded-lg shadow-lg h-full">
              <h3 className="text-2xl font-semibold mb-6">Find Us</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#e79c56]/20 p-3 rounded-full">
                    <MapPin size={24} className="text-[#e79c56]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-[#e79c56]">Address</h4>
                    <p className="text-[#f9f1de]/80 mt-1">
                      Jetty Ghat
                      <br />
                      Kaptai 4533
                      <br />
                      Bangladesh
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-[#e79c56]/20 p-3 rounded-full">
                    <Phone size={24} className="text-[#e79c56]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-[#e79c56]">Phone</h4>
                    <p className="text-[#f9f1de]/80 mt-1">01851-567656</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-[#e79c56]/20 p-3 rounded-full">
                    <Mail size={24} className="text-[#e79c56]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-[#e79c56]">Email</h4>
                    <p className="text-[#f9f1de]/80 mt-1">
                      info@kaptaidhaba.com
                    </p>
                    <p className="text-[#f9f1de]/80">
                      reservations@kaptaidhaba.com
                    </p>
                  </div>
                </div>
              </div>
              {/* Google Maps Embed */}
              <div className="mt-8 pt-6 border-t border-[#f9f1de]/20">
                <h4 className="font-medium text-lg mb-3">Our Location</h4>
                <div className="w-full h-[200px] rounded-lg overflow-hidden border-2 border-[#e79c56]/30 mt-3">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d892.954451746388!2d92.21917649453529!3d22.498722914360833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30ad49339a372a45%3A0x94acca866962586d!2sKaptai%20Dhaba!5e0!3m2!1sen!2sbd!4v1747718427308!5m2!1sen!2sbd"
                    className="w-full h-full border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Kaptai Dhaba Location"
                  ></iframe>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="mt-8 pt-6 border-t border-[#f9f1de]/20">
                <h4 className="font-medium text-lg mb-3">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="https://www.facebook.com/kaptaidhaba" target="_blank" rel="noopener noreferrer" className="bg-[#f9f1de]/10 hover:bg-[#f9f1de]/20 p-3 rounded-full transition-colors duration-300">
                    <svg className="w-5 h-5 text-[#f9f1de]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="bg-[#f9f1de]/10 hover:bg-[#f9f1de]/20 p-3 rounded-full transition-colors duration-300">
                    <svg className="w-5 h-5 text-[#f9f1de]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.045-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 4.041v.08c0 2.597.01 2.917.058 3.96.045.976.207 1.505.344 1.858.182.466.398.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="bg-[#f9f1de]/10 hover:bg-[#f9f1de]/20 p-3 rounded-full transition-colors duration-300">
                    <svg className="w-5 h-5 text-[#f9f1de]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-3/5">
            <div className="bg-white/70 backdrop-blur-sm p-6 md:p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-[#0e3e2e] mb-6">
                Share Your Experience
              </h3>
              {isSubmitted ? <div className="flex flex-col items-center justify-center text-center py-8">
                  <div className="w-16 h-16 bg-[#0e3e2e] rounded-full flex items-center justify-center mb-4">
                    <CheckIcon size={32} className="text-[#f9f1de]" />
                  </div>
                  <h4 className="text-xl font-semibold text-[#0e3e2e] mb-2">
                    Thank You for Your Review!
                  </h4>
                  <p className="text-[#0e3e2e]/80">
                    Your feedback helps us improve and serve you better.
                  </p>
                </div> : <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#0e3e2e] mb-1">
                      Your Name
                    </label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-3 py-2 border border-[#0e3e2e]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e79c56]" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#0e3e2e] mb-1">
                      Rating
                    </label>
                    <div className="flex space-x-2">
                      {[1, 2, 3, 4, 5].map(star => <button key={star} type="button" onClick={() => handleRatingChange(star)} className="focus:outline-none">
                          <StarIcon size={24} className={`${star <= formData.rating ? 'text-[#e79c56] fill-[#e79c56]' : 'text-[#0e3e2e]/20'}`} />
                        </button>)}
                    </div>
                  </div>
                  <div>
                    <label htmlFor="review" className="block text-sm font-medium text-[#0e3e2e] mb-1">
                      Your Review
                    </label>
                    <textarea id="review" name="review" value={formData.review} onChange={handleChange} required rows={4} className="w-full px-3 py-2 border border-[#0e3e2e]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e79c56]" placeholder="Share your dining experience with us..."></textarea>
                  </div>
                  <button type="submit" className="w-full bg-[#0e3e2e] text-[#f9f1de] py-3 rounded-md font-medium transition-all duration-300 hover:bg-[#e79c56] focus:outline-none focus:ring-2 focus:ring-[#e79c56]">
                    Submit Review
                  </button>
                </form>}
            </div>
            {/* Reviews Section */}
            <div className="mt-8 space-y-6">
              <h4 className="text-xl font-semibold text-[#0e3e2e]">
                Recent Reviews
              </h4>
              {existingReviews.map((review, index) => <div key={index} className="bg-white/70 backdrop-blur-sm p-4 rounded-lg shadow-sm">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h5 className="font-medium text-[#0e3e2e]">
                        {review.name}
                      </h5>
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => <StarIcon key={i} size={16} className={`${i < review.rating ? 'text-[#e79c56] fill-[#e79c56]' : 'text-[#0e3e2e]/20'}`} />)}
                      </div>
                    </div>
                    <span className="text-sm text-[#0e3e2e]/60">
                      {review.date}
                    </span>
                  </div>
                  <p className="text-[#0e3e2e]/80 text-sm">{review.review}</p>
                </div>)}
            </div>
          </div>
        </div>

      </div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0e3e2e]/10 to-transparent"></div>
    </section>;
};