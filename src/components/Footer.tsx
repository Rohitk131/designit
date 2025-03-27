
import React from 'react';
import { Github, Twitter, Instagram, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-amber-50 border-t border-amber-800/30 py-12 text-amber-900">
      <div className="container mx-auto px-4">
        <div className="mb-8 border-b border-amber-800/20 pb-6">
          <div className="font-serif text-amber-900">
            <p className="text-lg mb-2 font-bold italic">Rohit Bhadwe</p>
            <p className="mb-1 text-sm">Est. {new Date().getFullYear()}</p>
            <p className="mb-1 text-sm">Vol. XXVII • No. 1.0.0</p>
            <p className="mb-1 text-sm">Days in Print: {Math.floor(Math.random() * 999)}</p>
            <p className="italic text-xs mt-3">"All the code that's fit to render"</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-serif text-amber-800 text-xl mb-4 font-bold">BUREAU</h3>
            <p className="font-serif text-amber-900/80 mb-2">128 Mushroom Kingdom Ave.</p>
            <p className="font-serif text-amber-900/80 mb-2">Ghibli Hills District</p>
            <p className="font-serif text-amber-900/80">Papercraft Town, CA</p>
          </div>
          
          <div>
            <h3 className="font-serif text-amber-800 text-xl mb-4 font-bold">CORRESPONDENTS</h3>
            <div className="flex flex-wrap gap-4">
              <a href="#" className="flex items-center space-x-2 text-amber-900/80 hover:text-amber-600 transition-colors">
                <Github className="h-5 w-5" />
                <span className="font-serif">Github</span>
              </a>
              <a href="#" className="flex items-center space-x-2 text-amber-900/80 hover:text-amber-600 transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="font-serif">Twitter</span>
              </a>
              <a href="#" className="flex items-center space-x-2 text-amber-900/80 hover:text-amber-600 transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="font-serif">Instagram</span>
              </a>
              <a href="#" className="flex items-center space-x-2 text-amber-900/80 hover:text-amber-600 transition-colors">
                <Mail className="h-5 w-5" />
                <span className="font-serif">Telegraph</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-serif text-amber-800 text-xl mb-4 font-bold">SUBSCRIPTIONS</h3>
            <div className="mb-4">
              <div className="bg-amber-100 p-3 border border-amber-300 rounded-none">
                <p className="font-serif text-amber-900/80 mb-1">For Inquiries:</p>
                <p className="font-serif text-amber-800 italic">letters@chronicle.news</p>
              </div>
            </div>
            <p className="font-serif text-amber-900/60 text-sm">Replies within fortnight</p>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-amber-800/20">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="font-serif text-amber-900/60 mb-4 sm:mb-0">
              © {new Date().getFullYear()} The Chronicle • All Rights Reserved
            </p>
            <div className="flex space-x-6">
              <a href="#" className="font-serif text-amber-900/60 hover:text-amber-600 transition-colors">Privacy</a>
              <a href="#" className="font-serif text-amber-900/60 hover:text-amber-600 transition-colors">Terms</a>
              <a href="#" className="font-serif text-amber-900/60 hover:text-amber-600 transition-colors">Archive</a>
            </div>
          </div>
          <div className="text-center mt-6">
            <p className="text-amber-900/40 text-xs font-serif italic">
              Crafted with ink, parchment, and nostalgia
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
