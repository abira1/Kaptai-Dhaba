export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-[#0e3e2e] text-[#f9f1de] py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 flex flex-col items-center md:items-start">
            <img src="/Kaptai_dhaba_Logo.png" alt="Kaptai Dhaba Logo" className="h-16 mb-4" />
            <p className="text-[#f9f1de]/70 text-sm max-w-md text-center md:text-left">
              The largest & the only lakeview restaurant of Kaptai.. Our goal is to serve our beloved customers the best food.. Bengali, Indian, Chinese available.. Special facilities - Tents, Boat tour
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-[#e79c56] font-medium mb-3">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="text-[#f9f1de]/80 hover:text-[#e79c56] transition-colors duration-300">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#menu" className="text-[#f9f1de]/80 hover:text-[#e79c56] transition-colors duration-300">
                    Menu
                  </a>
                </li>
                <li>
                  <a href="#gallery" className="text-[#f9f1de]/80 hover:text-[#e79c56] transition-colors duration-300">
                    Gallery
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-[#f9f1de]/80 hover:text-[#e79c56] transition-colors duration-300">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-[#f9f1de]/80 hover:text-[#e79c56] transition-colors duration-300">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-[#e79c56] font-medium mb-3">Hours</h3>
              <ul className="space-y-2">
                <li className="text-[#f9f1de]/80">Mon-Fri: 9AM - 10PM</li>
                <li className="text-[#f9f1de]/80">Sat-Sun: 8AM - 11PM</li>
                <li className="text-[#e79c56] mt-3">
                  <a href="https://wa.me/8801851567656" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    Reserve on WhatsApp
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-[#f9f1de]/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#f9f1de]/60 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Kaptai Dhaba. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-[#f9f1de]/60 hover:text-[#e79c56] transition-colors duration-300 text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-[#f9f1de]/60 hover:text-[#e79c56] transition-colors duration-300 text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-[#f9f1de]/60 hover:text-[#e79c56] transition-colors duration-300 text-sm">
              Sitemap
            </a>
          </div>
        </div>
        <div className="mt-4 text-center text-[#f9f1de]/40 text-sm">
          Design and developed By{' '}
          <a href="https://toiral-development.firebaseapp.com/" target="_blank" rel="noopener noreferrer" className="text-[#e79c56] hover:text-[#f9f1de] transition-colors duration-300">
            Toiral Web development Company
          </a>
        </div>
      </div>
    </footer>;
};