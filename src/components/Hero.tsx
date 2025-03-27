
import React, { useState, useEffect } from 'react';
import RetroButton from './RetroButton';
import Terminal from './Terminal';

const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [blinkCursor, setBlinkCursor] = useState(true);
  
  const fullText = "WELCOME TO DaVinci Resolve";
  
  useEffect(() => {
    if (index < fullText.length) {
      const timer = setTimeout(() => {
        setText(text + fullText[index]);
        setIndex(index + 1);
      }, 100);
      
      return () => clearTimeout(timer);
    }
  }, [index, text]);
  
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 retro-grid transform-gpu" style={{ transformStyle: 'preserve-3d', transform: 'rotateX(60deg) translateZ(-100px) translateY(100px) scale(3)' }}></div>
      
      {/* City Skyline Silhouette */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-cyber-purple/50 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="lg:pr-12">
            <div className="mb-4">
              <div className="inline-block bg-neon-pink/80 text-cyber-black px-3 py-1 vt-text text-sm mb-2">
                SYSTEM STATUS: ONLINE
              </div>
            </div>
            
            <h1 className="pixel-text text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
              <span className="relative inline-block">
                {text}
                <span className={`${blinkCursor ? 'animate-blink' : ''} absolute bottom-0`}>_</span>
              </span>
            </h1>
            
            <p className="vt-text text-xl text-white/80 mb-8 max-w-xl">
              Step into our neon-drenched digital realm where pixels meet 
              possibility. We build the future with retro aesthetics.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <RetroButton size="lg">ENTER CYBERSPACE</RetroButton>
              <RetroButton size="lg" variant="pink">LEARN MORE</RetroButton>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-cyber-gradient opacity-50 blur-xl"></div>
            <div className="relative bg-cyber-purple/20 backdrop-blur-sm border-2 border-neon-blue rounded-md p-6 scanline-effect">
              <h3 className="vt-text text-neon-blue text-xl mb-4">// MAINFRAME ACCESS</h3>
              <Terminal className="mb-4" />
              <div className="flex justify-end">
                <div className="vt-text text-neon-green text-sm animate-pulse">
                  CONNECTION SECURE • {new Date().toLocaleTimeString()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
