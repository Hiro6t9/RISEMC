
import type { Config } from "tailwindcss";

export default {
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
				coin: {
					DEFAULT: '#FFC000',
					50: '#FFF9E6',
					100: '#FFF3CC',
					200: '#FFE799',
					300: '#FFDB66',
					400: '#FFCE33',
					500: '#FFC000',
					600: '#CC9A00',
					700: '#997300',
					800: '#664D00',
					900: '#332600',
					950: '#1A1300',
				},
				creamy: {
					50: '#FFFBF5',
					100: '#FFF6E9',
					200: '#FFF0DC',
					300: '#FFE4C4',
					400: '#FFD8AC',
					500: '#FFC993',
					600: '#FFB973',
					700: '#FFA94D',
					800: '#FF9826',
					900: '#FF8700',
				},
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
				'fade-in-up': {
					'0%': { 
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				'pulse-soft': {
					'0%, 100%': { 
						opacity: '1',
						transform: 'scale(1)'
					},
					'50%': { 
						opacity: '0.95',
						transform: 'scale(1.02)'
					}
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-8px)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in-up': 'fade-in-up 0.7s ease-out forwards',
				'fade-in': 'fade-in 0.5s ease-out forwards',
				'pulse-soft': 'pulse-soft 4s ease-in-out infinite',
				'float': 'float 3s ease-in-out infinite'
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gold-gradient': 'linear-gradient(90deg, #FFC000 0%, #FFF9E6 100%)',
				'gold-gradient-subtle': 'linear-gradient(90deg, #FFF3CC 0%, #FFF9E6 100%)',
				'gold-gradient-dark': 'linear-gradient(90deg, #997300 0%, #FFC000 100%)',
				'creamy-gradient': 'linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%)',
				'gold-creamy-gradient': 'linear-gradient(180deg, rgb(255,192,0) 0%, rgb(251,221,186) 100%)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
