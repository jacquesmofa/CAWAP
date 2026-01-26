import ScrollReveal from '../effects/ScrollReveal';
import { useEffect, useRef, useState, FormEvent } from 'react';
import { useSupabaseSubmit } from '../../hooks/useSupabaseSubmit'; // For newsletter subscriptions

const Footer = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // ========================================
  // NEWSLETTER SUBSCRIPTION STATE
  // ========================================
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const { submitToSupabase, submitting, success, error } = useSupabaseSubmit();

  /**
   * NEWSLETTER SUBSCRIPTION HANDLER
   * Saves email to Supabase when user subscribes
   */
  const handleNewsletterSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Prepare subscription data
    const subscriptionData = {
      email: newsletterEmail,
      subscribed_at: new Date().toISOString(),
      status: 'active'
    };

    // Save to Supabase
    const result = await submitToSupabase('newsletter_subscriptions', subscriptionData);

    // Clear form if successful
    if (result) {
      setNewsletterEmail('');
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = 400;

    class Star {
      x: number;
      y: number;
      size: number;
      speedY: number;
      opacity: number;
      pulseSpeed: number;
      pulsePhase: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = canvas.height + Math.random() * 100;
        this.size = Math.random() * 3 + 1;
        this.speedY = Math.random() * 0.5 + 0.3;
        this.opacity = Math.random() * 0.5 + 0.5;
        this.pulseSpeed = Math.random() * 0.02 + 0.01;
        this.pulsePhase = Math.random() * Math.PI * 2;
      }

      update() {
        this.y -= this.speedY;
        this.pulsePhase += this.pulseSpeed;
        
        if (this.y < -10) {
          this.y = canvas.height + 10;
          this.x = Math.random() * canvas.width;
        }
      }

      draw() {
        const pulse = Math.sin(this.pulsePhase) * 0.3 + 0.7;
        const currentOpacity = this.opacity * pulse;
        
        // Outer glow
        const gradient = ctx!.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size * 4);
        gradient.addColorStop(0, `rgba(201, 176, 55, ${currentOpacity})`);
        gradient.addColorStop(0.5, `rgba(201, 176, 55, ${currentOpacity * 0.3})`);
        gradient.addColorStop(1, 'rgba(201, 176, 55, 0)');
        
        ctx!.fillStyle = gradient;
        ctx!.beginPath();
        ctx!.arc(this.x, this.y, this.size * 4, 0, Math.PI * 2);
        ctx!.fill();
        
        // Core star
        ctx!.fillStyle = `rgba(255, 223, 0, ${currentOpacity})`;
        ctx!.beginPath();
        ctx!.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx!.fill();
        
        // Star points
        ctx!.strokeStyle = `rgba(255, 223, 0, ${currentOpacity * 0.8})`;
        ctx!.lineWidth = 1;
        ctx!.beginPath();
        ctx!.moveTo(this.x - this.size * 2, this.y);
        ctx!.lineTo(this.x + this.size * 2, this.y);
        ctx!.moveTo(this.x, this.y - this.size * 2);
        ctx!.lineTo(this.x, this.y + this.size * 2);
        ctx!.stroke();
      }
    }

    const stars: Star[] = [];
    for (let i = 0; i < 100; i++) {
      stars.push(new Star());
    }

    function animate() {
      ctx!.clearRect(0, 0, canvas.width, canvas.height);
      
      stars.forEach(star => {
        star.update();
        star.draw();
      });
      
      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = 400;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <footer className="relative">
      {/* Main Footer */}
      <div className="bg-[#2a0a3d] text-white py-12 relative overflow-hidden">
        {/* Animated Stars Canvas */}
        <canvas
          ref={canvasRef}
          className="absolute bottom-0 left-0 w-full pointer-events-none"
          style={{ height: '400px' }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* About */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-[#c9b037]">About CAWAP</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Empowering Afro-Caribbean and Canadian women through economic development, advocacy, and community programs.
              </p>
              
              {/* Social Media Icons */}
              <div className="mt-6">
                <h4 className="text-sm font-semibold text-[#c9b037] mb-3">Follow Us</h4>
                <div className="flex gap-3">
                  <a
                    href="https://www.facebook.com/cawap"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 hover:bg-[#c9b037] rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer group"
                    aria-label="Facebook"
                  >
                    <i className="ri-facebook-fill text-white text-lg group-hover:scale-110 transition-transform"></i>
                  </a>
                  <a
                    href="https://twitter.com/cawap"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 hover:bg-[#c9b037] rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer group"
                    aria-label="Twitter"
                  >
                    <i className="ri-twitter-x-fill text-white text-lg group-hover:scale-110 transition-transform"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/cawap"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 hover:bg-[#c9b037] rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer group"
                    aria-label="Instagram"
                  >
                    <i className="ri-instagram-fill text-white text-lg group-hover:scale-110 transition-transform"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/cawap"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 hover:bg-[#c9b037] rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer group"
                    aria-label="LinkedIn"
                  >
                    <i className="ri-linkedin-fill text-white text-lg group-hover:scale-110 transition-transform"></i>
                  </a>
                  <a
                    href="https://www.youtube.com/@cawap"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 hover:bg-[#c9b037] rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer group"
                    aria-label="YouTube"
                  >
                    <i className="ri-youtube-fill text-white text-lg group-hover:scale-110 transition-transform"></i>
                  </a>
                  <a
                    href="https://www.tiktok.com/@cawap"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 hover:bg-[#c9b037] rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer group"
                    aria-label="TikTok"
                  >
                    <i className="ri-tiktok-fill text-white text-lg group-hover:scale-110 transition-transform"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-[#c9b037]">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/" className="text-gray-300 hover:text-[#c9b037] transition-colors duration-300 cursor-pointer">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/about" className="text-gray-300 hover:text-[#c9b037] transition-colors duration-300 cursor-pointer">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/programs" className="text-gray-300 hover:text-[#c9b037] transition-colors duration-300 cursor-pointer">
                    Programs
                  </a>
                </li>
                <li>
                  <a href="/events" className="text-gray-300 hover:text-[#c9b037] transition-colors duration-300 cursor-pointer">
                    Events
                  </a>
                </li>
                <li>
                  <a href="/gallery" className="text-gray-300 hover:text-[#c9b037] transition-colors duration-300 cursor-pointer">
                    Gallery
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-gray-300 hover:text-[#c9b037] transition-colors duration-300 cursor-pointer">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Programs */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-[#c9b037]">Our Programs</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/youth-leadership" className="text-gray-300 hover:text-[#c9b037] transition-colors duration-300 cursor-pointer">
                    Youth Leadership
                  </a>
                </li>
                <li>
                  <a href="/capital-g-girls" className="text-gray-300 hover:text-[#c9b037] transition-colors duration-300 cursor-pointer">
                    Capital G-Girls
                  </a>
                </li>
                <li>
                  <a href="/heart-wise-seniors" className="text-gray-300 hover:text-[#c9b037] transition-colors duration-300 cursor-pointer">
                    Heart-Wise Seniors
                  </a>
                </li>
                <li>
                  <a href="/women-empowerment" className="text-gray-300 hover:text-[#c9b037] transition-colors duration-300 cursor-pointer">
                    Women Empowerment
                  </a>
                </li>
                <li>
                  <a href="/javascript-program" className="text-gray-300 hover:text-[#c9b037] transition-colors duration-300 cursor-pointer">
                    JavaScript Program
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-[#c9b037]">Contact Us</h3>
              <ul className="space-y-3 text-gray-300 text-sm">
                <li className="flex items-start">
                  <i className="ri-map-pin-line text-[#c9b037] text-lg mr-2 mt-1"></i>
                  <span>101 West Drive, Unit 7<br />Brampton, ON L6T 5E9<br />Canada</span>
                </li>
                <li className="flex items-center">
                  <i className="ri-phone-line text-[#c9b037] text-lg mr-2"></i>
                  <a href="tel:+16475815901" className="hover:text-[#c9b037] transition-colors duration-300 cursor-pointer">
                    +1 (647) 581-5901
                  </a>
                </li>
                <li className="flex items-center">
                  <i className="ri-mail-line text-[#c9b037] text-lg mr-2"></i>
                  <a href="mailto:cawap2025@gmail.com" className="hover:text-[#c9b037] transition-colors duration-300 cursor-pointer">
                    cawap2025@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-black text-gray-400 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-sm">
            <p>&copy; {new Date().getFullYear()} Canadian and African Women Aid Program (CAWAP). All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
