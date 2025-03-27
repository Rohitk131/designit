
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface RetroButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'blue' | 'pink' | 'purple' | 'green';
  size?: 'sm' | 'md' | 'lg';
  glitch?: boolean;
}

const RetroButton: React.FC<RetroButtonProps> = ({
  className,
  variant = 'blue',
  size = 'md',
  glitch = false,
  children,
  ...props
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const playBeep = () => {
    const audio = new Audio();
    audio.src = 'data:audio/wav;base64,UklGRrwEAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YZgEAACAgICAgICAgICAgICAgICAgICAgICAgIA5OUlJYWFoaHV1gICAgICAgICAgICAgICAgDk5SUlhYWhocnJ5eX9/gICAgICAgICAgICAgDk5SUlhYWhocnJ5eX9/gICAgICAgICAgICAgDk5SUlhYWhocnJ5eX9/gICAgICAgICAgICAYXdNlIyqIGdDQnBpe3t7e4CAgIB3d4CAgICAT11UWWN2doiImJiRkYaGgICAgICAgICAgG5uW1xqanV1fn53d3p6gICAgICAgICAgICAW1x8fIqKkJCLi4eHgoKAgICAgICAgICAgG5ufX2NjZSUkZGNjYiIgICAgICAgICAgICAcnKDg4+PlpaRkY6OioqAgICAgICAgICAgHd3g4OPj5WVkZGOjoqKgICAgICAgICAgIB3d4ODj4+VlZGRjo6KioCA';
    audio.play();
  };
  
  const variantClasses = {
    blue: 'bg-neon-blue text-cyber-black border-neon-blue neon-border',
    pink: 'bg-neon-pink text-cyber-black border-neon-pink neon-border-pink',
    purple: 'bg-neon-purple text-cyber-black border-neon-purple neon-border-purple',
    green: 'bg-neon-green text-cyber-black border-neon-green'
  };
  
  const sizeClasses = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-5 py-2 text-base',
    lg: 'px-8 py-3 text-xl'
  };
  
  return (
    <button
      className={cn(
        'relative font-["Press_Start_2P"] border-2 transition-all duration-200 pixel-corners',
        variantClasses[variant],
        sizeClasses[size],
        isHovered && 'animate-pulse brightness-110',
        glitch && isHovered && 'animate-glitch',
        className
      )}
      onMouseEnter={() => {
        setIsHovered(true);
        playBeep();
      }}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      <span className={cn('relative z-10', isHovered && 'animate-none')}>
        {children}
      </span>
      {isHovered && (
        <div className="scanline-effect absolute inset-0 pointer-events-none"></div>
      )}
    </button>
  );
};

export default RetroButton;
