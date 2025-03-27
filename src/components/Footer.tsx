import React from 'react';
import { Github, Twitter, Instagram, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900/10 text-white py-12" style={{
    
    }}>
      <div className="container mx-auto px-4">
        <div className="mb-8 pb-6 border-b border-white/20">
          <div className="font-mono text-white">
            <p className="text-lg mb-2 font-bold italic neon-text">Rohit Bhadwe</p>
            <p className="mb-1 text-sm">Est. {new Date().getFullYear()}</p>
            <p className="mb-1 text-sm">Vol. XXVII • No. 1.0.0</p>
            <p className="mb-1 text-sm">Days in Print: {Math.floor(Math.random() * 999)}</p>
            <p className="italic text-xs mt-3 neon-text">"All the code that's fit to render"</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-mono text-yellow-400 text-xl mb-4 font-bold neon-text">BUREAU</h3>
            <p className="font-mono text-white/80 mb-2">128 Mushroom Kingdom Ave.</p>
            <p className="font-mono text-white/80 mb-2">Ghibli Hills District</p>
            <p className="font-mono text-white/80">Papercraft Town, CA</p>
          </div>
          
          <div>
            <h3 className="font-mono text-yellow-400 text-xl mb-4 font-bold neon-text">CORRESPONDENTS</h3>
            <div className="flex flex-wrap gap-4">
              <a href="#" className="flex items-center space-x-2 text-white/80 hover:text-yellow-400 transition-colors">
                <Github className="h-5 w-5 neon-icon" />
                <span className="font-mono">Github</span>
              </a>
              <a href="#" className="flex items-center space-x-2 text-white/80 hover:text-yellow-400 transition-colors">
                <Twitter className="h-5 w-5 neon-icon" />
                <span className="font-mono">Twitter</span>
              </a>
              <a href="#" className="flex items-center space-x-2 text-white/80 hover:text-yellow-400 transition-colors">
                <Instagram className="h-5 w-5 neon-icon" />
                <span className="font-mono">Instagram</span>
              </a>
              <a href="#" className="flex items-center space-x-2 text-white/80 hover:text-yellow-400 transition-colors">
                <Mail className="h-5 w-5 neon-icon" />
                <span className="font-mono">Telegraph</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-mono text-yellow-400 text-xl mb-4 font-bold neon-text">SUBSCRIPTIONS</h3>
            <div className="mb-4">
              <div className="bg-black/20 p-3 border border-yellow-500 rounded-none">
                <p className="font-mono text-white/80 mb-1">For Inquiries:</p>
                <p className="font-mono text-yellow-400 italic neon-text">letters@chronicle.news</p>
              </div>
            </div>
            <p className="font-mono text-white/60 text-sm">Replies within fortnight</p>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-white/20">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="font-mono text-white/60 mb-4 sm:mb-0">
              © {new Date().getFullYear()} The Chronicle • All Rights Reserved
            </p>
            <div className="flex space-x-6">
              <a href="#" className="font-mono text-white/60 hover:text-yellow-400 transition-colors">Privacy</a>
              <a href="#" className="font-mono text-white/60 hover:text-yellow-400 transition-colors">Terms</a>
              <a href="#" className="font-mono text-white/60 hover:text-yellow-400 transition-colors">Archive</a>
            </div>
          </div>
          <div className="text-center mt-6">
            <p className="text-white/40 text-xs font-mono italic">
              Crafted with ink, parchment, and nostalgia
            </p>
          </div>
        </div>
      </div>
      <style>{`
        .neon-text {
          text-shadow:
            0 0 5px rgba(255,255,0,0.75),
            0 0 10px rgba(255,255,0,0.75),
            0 0 20px rgba(255,0,255,0.75),
            0 0 30px rgba(255,0,255,0.75);
        }
        .neon-icon {
          filter: drop-shadow(0 0 5px rgba(255,0,255,0.75));
        }
      `}</style>
    </footer>
  );
};

export default Footer;
