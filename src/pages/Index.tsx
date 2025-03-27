
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Footer from '@/components/Footer';
import ScanLines from '@/components/ScanLines';
import RetroButton from '@/components/RetroButton';

const Index = () => {
  // Konami code easter egg
  useEffect(() => {
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiIndex = 0;
    
    const onKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      const requiredKey = konamiCode[konamiIndex].toLowerCase();
      
      if (key === requiredKey) {
        konamiIndex++;
        
        if (konamiIndex === konamiCode.length) {
          activateEasterEgg();
          konamiIndex = 0;
        }
      } else {
        konamiIndex = 0;
      }
    };
    
    const activateEasterEgg = () => {
      // Play 8-bit sound
      const audio = new Audio('data:audio/wav;base64,UklGRl9HAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YTtHAACA/wAAf/8AAH//AAB//wAAf/8AAH//AAB//wAAf/8AAH7/AAB+/wAAfv8AAH7/AQB9/wIAff8DAHz/AwB8/wQAe/8FAHr/BQB6/wYAef8GAHn/BwB4/wgAeP8IAHf/CQB2/wkAdv8KAHb/CgB1/wsAdP8MAHb/CgB2/woAdv8LAHb/CwB2/wsAdv8LAHb/CwB2/wsAdv8LAHb/CwB2/wsAdv8LAHb/CwB2/wsAdv8LAHb/CwB2/wsAdv8LAHb/CwB2/woAdv8KAHb/CgB2/woAdv8KAHb/CgB2/woAdv8KAHb/CgB2/wkAdv8JAHf/CAB3/wgAd/8IAHj/BwB4/wcAeP8HAHj/BwB4/wcAef8GAHn/BgB6/wUAev8FAHr/BQB6/wUAe/8EAHv/BAB8/wMAff8CAIA/');
      audio.play();
      
      // Add some visual effect (e.g., flash the screen)
      const flashElement = document.createElement('div');
      flashElement.style.position = 'fixed';
      flashElement.style.top = '0';
      flashElement.style.left = '0';
      flashElement.style.width = '100%';
      flashElement.style.height = '100%';
      flashElement.style.backgroundColor = '#00f3ff';
      flashElement.style.opacity = '0.3';
      flashElement.style.zIndex = '9999';
      flashElement.style.pointerEvents = 'none';
      
      document.body.appendChild(flashElement);
      
      // Fade out and remove
      setTimeout(() => {
        flashElement.style.transition = 'opacity 0.5s';
        flashElement.style.opacity = '0';
        
        setTimeout(() => {
          document.body.removeChild(flashElement);
        }, 500);
      }, 100);
    };
    
    window.addEventListener('keydown', onKeyDown);
    
    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, []);
  
  return (
    <div className="relative bg-cyber-black min-h-screen">
      <ScanLines />
      <Navbar />
      <Hero />
      <Features />
      
      {/* CTA Section */}
      <section className="relative py-24 bg-cyber-purple/10 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="retro-grid h-full"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block bg-neon-pink/80 text-cyber-black px-3 py-1 vt-text text-sm mb-4">
              SYSTEM NOTIFICATION
            </div>
            <h2 className="pixel-text text-3xl sm:text-4xl text-white mb-6">JOIN OUR ELITE CYBER CREW</h2>
            <p className="vt-text text-xl text-white/80 mb-8 max-w-xl mx-auto">
              Ready to hack the mainframe? Our team is looking for digital rebels, 
              pixel pushers, and code breakers to join the next mission.
            </p>
            
            <div className="flex justify-center">
              <RetroButton size="lg" variant="green" glitch={true} className="text-xl">
                JOIN US
              </RetroButton>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
