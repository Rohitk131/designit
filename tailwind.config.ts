
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        // Retro theme colors
        cyber: {
          black: '#0D0221',
          purple: '#290B5A',
          pink: '#ff00ff',
          blue: '#00ffff',
          green: '#39FF14',
          yellow: '#FFFF00',
          red: '#FF003F'
        },
        neon: {
          blue: '#00f3ff',
          pink: '#ff00c1',
          purple: '#9600ff',
          green: '#39FF14'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        },
        'scanline': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(100%)' }
        },
        'blink': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' }
        },
        'glitch': {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' }
        },
        'glow': {
          '0%, 100%': { filter: 'brightness(1) drop-shadow(0 0 5px rgba(0, 243, 255, 0.7))' },
          '50%': { filter: 'brightness(1.2) drop-shadow(0 0 15px rgba(0, 243, 255, 0.8))' }
        },
        'neon-pulse': {
          '0%, 100%': { 
            textShadow: '0 0 5px #00f3ff, 0 0 10px #00f3ff, 0 0 15px #00f3ff, 0 0 20px #00f3ff' 
          },
          '50%': { 
            textShadow: '0 0 5px #00f3ff, 0 0 15px #00f3ff, 0 0 25px #00f3ff, 0 0 35px #00f3ff' 
          }
        },
        'flicker': {
          '0%, 100%': { opacity: '1' },
          '10%': { opacity: '0.9' },
          '20%': { opacity: '0.95' },
          '30%': { opacity: '0.9' },
          '40%': { opacity: '1' },
          '50%': { opacity: '0.8' },
          '60%': { opacity: '1' },
          '70%': { opacity: '0.9' },
          '80%': { opacity: '1' },
          '90%': { opacity: '0.92' }
        },
        'typewriter': {
          '0%': { width: '0%' },
          '100%': { width: '100%' }
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'scanline': 'scanline 8s linear infinite',
        'blink': 'blink 1s infinite',
        'glitch': 'glitch 0.5s ease-in-out infinite alternate',
        'glow': 'glow 2s ease-in-out infinite',
        'neon-pulse': 'neon-pulse 2s infinite',
        'flicker': 'flicker 3s linear infinite',
        'typewriter': 'typewriter 3s steps(40, end)',
        'float': 'float 4s ease-in-out infinite',
        'spin-slow': 'spin-slow 10s linear infinite'
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(rgba(0, 243, 255, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 243, 255, 0.2) 1px, transparent 1px)',
        'cyber-gradient': 'linear-gradient(135deg, rgba(150, 0, 255, 0.8) 0%, rgba(255, 0, 193, 0.8) 50%, rgba(0, 243, 255, 0.8) 100%)',
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
