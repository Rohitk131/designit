
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface TerminalProps {
  className?: string;
}

const Terminal: React.FC<TerminalProps> = ({ className }) => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState<string[]>([
    'C:\\> SYSTEM INITIALIZING...',
    'C:\\> CONNECTING TO DaVinci Resolve...',
    'C:\\> ACCESS GRANTED',
    'C:\\> TEAM MEMBERS: ROHIT - ARYAN - MURTAZA',
    'C:\\> TYPE HELP FOR AVAILABLE COMMANDS'
  ]);
  const [isInputFocused, setIsInputFocused] = useState(false);
  
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      processCommand(input);
      setInput('');
    }
  };
  
  const processCommand = (cmd: string) => {
    const command = cmd.trim().toLowerCase();
    setOutput([...output, `C:\\> ${cmd}`]);
    
    if (command === '') {
      setOutput([...output, `C:\\> ${cmd}`, 'C:\\>']);
    } else if (command === 'help') {
      setOutput([
        ...output, 
        `C:\\> ${cmd}`,
        'AVAILABLE COMMANDS:',
        'HELP - Display this help message',
        'CLEAR - Clear the terminal',
        'DATE - Display current date',
        'HELLO - Greet the system',
        'VERSION - Show system version',
        'C:\\>'
      ]);
    } else if (command === 'clear') {
      setOutput(['C:\\>']);
    } else if (command === 'date') {
      setOutput([
        ...output, 
        `C:\\> ${cmd}`, 
        new Date().toLocaleString(),
        'C:\\>'
      ]);
    } else if (command === 'hello') {
      setOutput([
        ...output, 
        `C:\\> ${cmd}`, 
        'HELLO USER! WELCOME TO THE CYBER-HQ TERMINAL.',
        'STATUS: ALL SYSTEMS OPERATIONAL',
        'C:\\>'
      ]);
    } else if (command === 'version') {
      setOutput([
        ...output, 
        `C:\\> ${cmd}`, 
        'RETRO CYBER-HQ SYSTEM v1.0.0',
        'CODENAME: NEON REVIVAL',
        'C:\\>'
      ]);
    } else {
      setOutput([
        ...output, 
        `C:\\> ${cmd}`, 
        `ERROR: COMMAND '${cmd}' NOT RECOGNIZED`,
        'TYPE HELP FOR AVAILABLE COMMANDS',
        'C:\\>'
      ]);
    }
  };
  
  return (
    <div 
      className={cn(
        'bg-cyber-black border-2 border-neon-blue rounded-md overflow-hidden p-2 scanline-effect',
        isInputFocused ? 'neon-border' : '',
        className
      )}
      onClick={() => document.getElementById('terminal-input')?.focus()}
    >
      <div className="font-mono code-text text-neon-green mb-2 text-sm md:text-base overflow-y-auto max-h-40 whitespace-pre-wrap">
        {output.map((line, i) => (
          <div key={i}>{line}</div>
        ))}
      </div>
      <div className="flex items-center">
        <span className="text-neon-green mr-2">C:&gt;</span>
        <input
          id="terminal-input"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => setIsInputFocused(true)}
          onBlur={() => setIsInputFocused(false)}
          className="bg-transparent border-none outline-none text-neon-green flex-1 font-mono code-text text-sm md:text-base"
          autoComplete="off"
          spellCheck="false"
        />
        <span className={`w-2 h-4 bg-neon-green ${isInputFocused ? 'animate-blink' : 'opacity-0'}`}></span>
      </div>
    </div>
  );
};

export default Terminal;
