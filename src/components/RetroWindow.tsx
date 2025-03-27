
import React, { useState } from 'react';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface RetroWindowProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  variant?: 'blue' | 'pink' | 'purple';
  style?: React.CSSProperties;
}

const RetroWindow: React.FC<RetroWindowProps> = ({
  title,
  children,
  className,
  variant = 'blue',
  style = {}
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [isMinimized, setIsMinimized] = useState(false);
  
  const variantClasses = {
    blue: 'border-neon-blue from-cyber-purple/80 to-cyber-black',
    pink: 'border-neon-pink from-cyber-purple/80 to-cyber-black',
    purple: 'border-neon-purple from-cyber-purple/80 to-cyber-black'
  };
  
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    });
  };
  
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    
    setPosition({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y
    });
  };
  
  const handleMouseUp = () => {
    setIsDragging(false);
  };
  
  return (
    <div
      className={cn(
        'absolute border-2 bg-gradient-to-b pixel-corners overflow-hidden transition-all duration-300',
        variantClasses[variant],
        isMinimized ? 'h-10' : 'h-auto',
        className
      )}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        cursor: isDragging ? 'grabbing' : 'default',
        width: isMinimized ? '200px' : '100%',
        ...style
      }}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <div
        className={cn(
          'flex items-center justify-between px-2 py-1 cursor-grab',
          variant === 'blue' && 'bg-neon-blue text-cyber-black',
          variant === 'pink' && 'bg-neon-pink text-cyber-black',
          variant === 'purple' && 'bg-neon-purple text-cyber-black'
        )}
        onMouseDown={handleMouseDown}
      >
        <div className="flex items-center gap-1">
          <div className="h-3 w-3 rounded-full bg-cyber-red"></div>
          <div className="h-3 w-3 rounded-full bg-cyber-yellow"></div>
          <div className="h-3 w-3 rounded-full bg-cyber-green"></div>
        </div>
        <span className="vt-text text-sm font-bold">{title}</span>
        <button 
          className="text-cyber-black hover:text-white transition-colors"
          onClick={() => setIsMinimized(!isMinimized)}
        >
          <X size={16} />
        </button>
      </div>
      <div className={cn('p-4', isMinimized && 'hidden')}>
        {children}
      </div>
    </div>
  );
};

export default RetroWindow;
