import React, { useState, memo } from 'react';
import { Calendar, Clock, Users, CheckIcon } from 'lucide-react';
export const ReservationSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the data to a server
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: '2',
        message: ''
      });
    }, 3000);
  };
  return <section id="reservation" className="py-20 bg-[#f9f1de] relative">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#0e3e2e]/10 to-transparent"></div>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-[#0e3e2e] mb-4">
            Reserve a Table
          </h2>
          <p className="text-lg md:text-xl text-[#0e3e2e]/80 max-w-2xl mx-auto">
            Secure your spot by the lake and enjoy a memorable dining experience
          </p>
        </div>
        <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/5 bg-cover bg-center" style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?q=80&w=2070&auto=format&fit=crop")'
          }}>
              <div className="h-48 md:h-full bg-[#0e3e2e]/60 p-6 flex flex-col justify-end">
                <h3 className="text-[#f9f1de] text-xl font-semibold mb-2">
                  Opening Hours
                </h3>
                <ul className="text-[#f9f1de]/90 space-y-1">
                  <li className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 10:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday - Sunday</span>
                    <span>8:00 AM - 11:00 PM</span>
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t border-[#f9f1de]/30">
                  <p className="text-[#f9f1de]/90 text-sm">
                    For large groups or special events, please contact us
                    directly
                  </p>
                </div>
              </div>
            </div>
            <div className="md:w-3/5 p-6 md:p-8">
              {isSubmitted ? <div className="h-full flex flex-col items-center justify-center text-center">
                  <div className="w-16 h-16 bg-[#0e3e2e] rounded-full flex items-center justify-center mb-4">
                    <CheckIcon size={32} className="text-[#f9f1de]" />
                  </div>
                  <h3 className="text-2xl font-semibold text-[#0e3e2e] mb-2">
                    Reservation Received!
                  </h3>
                  <p className="text-[#0e3e2e]/80">
                    Thank you for your reservation request. We will contact you
                    shortly to confirm your booking.
                  </p>
                </div> : <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-[#0e3e2e] mb-1">
                        Your Name
                      </label>
                      <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-3 py-2 border border-[#0e3e2e]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e79c56]" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-[#0e3e2e] mb-1">
                        Email Address
                      </label>
                      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-3 py-2 border border-[#0e3e2e]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e79c56]" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-[#0e3e2e] mb-1">
                        Phone Number
                      </label>
                      <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required className="w-full px-3 py-2 border border-[#0e3e2e]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e79c56]" />
                    </div>
                    <div>
                      <label htmlFor="guests" className="block text-sm font-medium text-[#0e3e2e] mb-1">
                        Number of Guests
                      </label>
                      <div className="relative">
                        <select id="guests" name="guests" value={formData.guests} onChange={handleChange} className="w-full px-3 py-2 border border-[#0e3e2e]/20 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-[#e79c56]">
                          {[1, 2, 3, 4, 5, 6, 7, 8].map(num => <option key={num} value={num}>
                              {num} {num === 1 ? 'Person' : 'People'}
                            </option>)}
                          <option value="9+">9+ People</option>
                        </select>
                        <Users size={18} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#0e3e2e]/60" />
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="date" className="block text-sm font-medium text-[#0e3e2e] mb-1">
                        Preferred Date
                      </label>
                      <div className="relative">
                        <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} required min={new Date().toISOString().split('T')[0]} className="w-full px-3 py-2 border border-[#0e3e2e]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e79c56]" />
                        <Calendar size={18} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#0e3e2e]/60" />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="time" className="block text-sm font-medium text-[#0e3e2e] mb-1">
                        Preferred Time
                      </label>
                      <div className="relative">
                        <input type="time" id="time" name="time" value={formData.time} onChange={handleChange} required className="w-full px-3 py-2 border border-[#0e3e2e]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e79c56]" />
                        <Clock size={18} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#0e3e2e]/60" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[#0e3e2e] mb-1">
                      Special Requests (Optional)
                    </label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={3} className="w-full px-3 py-2 border border-[#0e3e2e]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e79c56]"></textarea>
                  </div>
                  <button type="submit" className="w-full bg-[#e79c56] text-[#0e3e2e] py-3 rounded-md font-medium transition-all duration-300 hover:bg-[#0e3e2e] hover:text-[#f9f1de] focus:outline-none focus:ring-2 focus:ring-[#0e3e2e]">
                    Reserve Now
                  </button>
                </form>}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0e3e2e]/10 to-transparent"></div>
    </section>;
};