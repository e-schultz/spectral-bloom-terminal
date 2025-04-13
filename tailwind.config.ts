
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
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Terminal BBS colors
				terminal: {
					bg: '#0a0a0a',
					header: '#121212',
					text: '#f0f0f0',
					primary: '#cc2c9d',
					secondary: '#4675c0',
					tertiary: '#a655d0',
					glitch: '#ff0044',
					'thread-bg': '#111111',
					'thread-hover': '#1a1a1a',
					border: '#333333',
					success: '#00aa44',
					warning: '#cc8800',
					error: '#cc0000'
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
				'scanlines': {
					'0%': { backgroundPosition: '0 0' },
					'100%': { backgroundPosition: '0 100%' }
				},
				'flicker': {
					'0%': { opacity: '0.05' },
					'5%': { opacity: '0.1' },
					'10%': { opacity: '0.05' },
					'15%': { opacity: '0.15' },
					'20%': { opacity: '0.05' },
					'25%': { opacity: '0.1' },
					'100%': { opacity: '0.05' }
				},
				'blink': {
					'50%': { opacity: '0' }
				},
				'pulse': {
					'0%': { opacity: '0.5' },
					'50%': { opacity: '1' },
					'100%': { opacity: '0.5' }
				},
				'glitch-skew': {
					'0%': { transform: 'skew(-0.5deg)' },
					'10%': { transform: 'skew(0.5deg)' },
					'100%': { transform: 'skew(-0.1deg)' }
				},
				'glitch-anim': {
					'0%': { 
						clip: 'rect(31px, 9999px, 94px, 0)',
						transform: 'skew(0.58deg)'
					},
					'100%': { 
						clip: 'rect(33px, 9999px, 46px, 0)',
						transform: 'skew(0.46deg)'
					}
				},
				'glitch-anim2': {
					'0%': { 
						clip: 'rect(43px, 9999px, 37px, 0)',
						transform: 'skew(0.38deg)'
					},
					'100%': { 
						clip: 'rect(67px, 9999px, 99px, 0)',
						transform: 'skew(0.27deg)'
					}
				},
				'fade-in': {
					from: { opacity: '0' },
					to: { opacity: '1' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'scanlines': 'scanlines 8s linear infinite',
				'flicker': 'flicker 0.3s infinite',
				'blink': 'blink 1s step-end infinite',
				'pulse': 'pulse 2s infinite',
				'glitch-skew': 'glitch-skew 1s infinite linear alternate-reverse',
				'glitch-anim': 'glitch-anim 5s infinite linear alternate-reverse',
				'glitch-anim2': 'glitch-anim2 2s infinite linear alternate-reverse',
				'fade-in': 'fade-in 0.3s ease-in'
			},
			fontFamily: {
				'vt323': ['"VT323"', 'monospace'],
				'terminal': ['"Courier New"', 'monospace']
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
