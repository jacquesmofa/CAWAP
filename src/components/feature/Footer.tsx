import ScrollReveal from '../effects/ScrollReveal';
import { useEffect, useRef } from 'react';

const Footer = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

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
                  <span>101 West Dr Unit 7<br />Brampton, ON L6T 2J6<br />Canada</span>
                </li>
                <li className="flex items-center">
                  <i className="ri-phone-line text-[#c9b037] text-lg mr-2"></i>
                  <a href="tel:+16475815901" className="hover:text-[#c9b037] transition-colors duration-300 cursor-pointer">
                    647-581-5901
                  </a>
                </li>
                <li className="flex items-center">
                  <i className="ri-mail-line text-[#c9b037] text-lg mr-2"></i>
                  <a href="mailto:cawap2005@gmail.com" className="hover:text-[#c9b037] transition-colors duration-300 cursor-pointer">
                    cawap2005@gmail.com
                  </a>
                </li>
              </ul>
              <div className="flex gap-4 mt-6">
                <a
                  href="https://www.facebook.com/cawap.ca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#3c1053] rounded-full flex items-center justify-center hover:bg-[#c9b037] transition-all duration-300 cursor-pointer"
                >
                  <i className="ri-facebook-fill text-xl"></i>
                </a>
                <a
                  href="https://twitter.com/cawap_ca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#3c1053] rounded-full flex items-center justify-center hover:bg-[#c9b037] transition-all duration-300 cursor-pointer"
                >
                  <i className="ri-twitter-fill text-xl"></i>
                </a>
                <a
                  href="https://www.instagram.com/cawap.ca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#3c1053] rounded-full flex items-center justify-center hover:bg-[#c9b037] transition-all duration-300 cursor-pointer"
                >
                  <i className="ri-instagram-fill text-xl"></i>
                </a>
              </div>
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
