
import React from 'react';
import RetroWindow from './RetroWindow';
import { Trophy, Code, HardDriveDownload, Cpu } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section id="features" className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block bg-neon-purple/80 text-cyber-black px-3 py-1 vt-text text-sm mb-4">
            SYSTEM CAPABILITIES
          </div>
          <h2 className="pixel-text text-3xl sm:text-4xl text-white mb-6">CORE FUNCTIONS</h2>
          <div className="w-24 h-1 bg-neon-blue mx-auto"></div>
        </div>
        
        <div className="relative h-[600px] md:h-[500px]">
          <RetroWindow 
            title="ACHIEVEMENTS.exe"
            variant="blue"
            className="w-[90%] sm:w-[350px] max-w-full"
            // Custom starting position for each window
            style={{ top: '0px', left: '0px' }}
          >
            <div className="flex flex-col items-center">
              <Trophy className="h-12 w-12 text-neon-blue mb-4" />
              <h3 className="vt-text text-xl text-neon-blue mb-2">Hackathon Winners</h3>
              <p className="vt-text text-white/70 text-center">
                Multiple award-winning projects across global competitions.
                Ranked #1 in innovation.
              </p>
              <div className="mt-4 bg-cyber-black/60 p-2 w-full">
                <div className="vt-text text-neon-green text-sm">
                  {'>'}LAST WIN: CYBER SUMMIT 2023
                </div>
              </div>
            </div>
          </RetroWindow>
          
          <RetroWindow 
            title="PROJECTS.exe" 
            variant="pink"
            className="w-[90%] sm:w-[350px] max-w-full"
            style={{ top: '50px', left: '30%' }}
          >
            <div className="flex flex-col items-center">
              <Code className="h-12 w-12 text-neon-pink mb-4" />
              <h3 className="vt-text text-xl text-neon-pink mb-2">Projects</h3>
              <p className="vt-text text-white/70 text-center">
                Cutting-edge applications with nostalgic interfaces.
                Combining retro aesthetics with modern tech.
              </p>
              <div className="mt-4 grid grid-cols-2 gap-2 w-full">
                <div className="bg-cyber-black/60 p-2">
                  <div className="vt-text text-neon-green text-xs">PROJECT_ALPHA</div>
                </div>
                <div className="bg-cyber-black/60 p-2">
                  <div className="vt-text text-neon-green text-xs">PROJECT_BETA</div>
                </div>
              </div>
            </div>
          </RetroWindow>
          
          <RetroWindow 
            title="TECH_STACK.exe" 
            variant="purple"
            className="w-[90%] sm:w-[350px] max-w-full"
            style={{ top: '120px', left: '10%' }}
          >
            <div className="flex flex-col items-center">
              <div className="relative mb-4">
                <HardDriveDownload className="h-12 w-12 text-neon-purple" />
                <div className="absolute -top-1 -right-1 h-4 w-4 bg-neon-green rounded-full animate-pulse"></div>
              </div>
              <h3 className="vt-text text-xl text-neon-purple mb-2">Tech Stack</h3>
              <p className="vt-text text-white/70 text-center">
                Expertise in React, TypeScript, Node.js, and beyond.
                Full-stack capabilities with retro UI mastery.
              </p>
              <div className="mt-4 w-full">
                <div className="bg-cyber-black/60 p-2">
                  <div className="flex justify-between items-center">
                    <div className="vt-text text-white text-sm">REACT</div>
                    <div className="h-2 w-24 bg-cyber-purple/30 rounded-sm">
                      <div className="h-2 w-[90%] bg-neon-purple rounded-sm"></div>
                    </div>
                  </div>
                </div>
                <div className="bg-cyber-black/60 p-2 mt-1">
                  <div className="flex justify-between items-center">
                    <div className="vt-text text-white text-sm">NODE</div>
                    <div className="h-2 w-24 bg-cyber-purple/30 rounded-sm">
                      <div className="h-2 w-[85%] bg-neon-purple rounded-sm"></div>
                    </div>
                  </div>
                </div>
                <div className="bg-cyber-black/60 p-2 mt-1">
                  <div className="flex justify-between items-center">
                    <div className="vt-text text-white text-sm">UI/UX</div>
                    <div className="h-2 w-24 bg-cyber-purple/30 rounded-sm">
                      <div className="h-2 w-[95%] bg-neon-purple rounded-sm"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </RetroWindow>
          
          <RetroWindow 
            title="TEAM.exe" 
            variant="blue"
            className="w-[90%] sm:w-[350px] max-w-full"
            style={{ top: '200px', left: '45%' }}
          >
            <div className="flex flex-col items-center">
              <Cpu className="h-12 w-12 text-neon-blue mb-4 animate-spin-slow" />
              <h3 className="vt-text text-xl text-neon-blue mb-2">Elite Team</h3>
              <p className="vt-text text-white/70 text-center">
                A collective of digital artisans, code poets, and pixel perfectionists.
                Combined 15+ years of experience.
              </p>
              <div className="mt-4 flex justify-center w-full">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-8 w-8 rounded-full bg-neon-blue/80 border border-neon-blue flex items-center justify-center">
                      <span className="vt-text text-xs text-cyber-black">0{i}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </RetroWindow>
        </div>
      </div>
    </section>
  );
};

export default Features;
