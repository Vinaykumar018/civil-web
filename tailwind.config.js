/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1e40af', // Blue-800
        secondary: '#dc2626', // Red-600
      },
      
      // 👇 Custom Keyframes for the "Building Blocks" Loader 👇
      keyframes: {
        'block-bounce': {
          // Starts and ends at full scale (height)
          '0%, 100%': { transform: 'scaleY(1)' },
          // At 50%, scales down to half height, creating the pulsing effect
          '50%': { transform: 'scaleY(0.5)' },
        },
      },
      
      // 👇 Custom Animation Definition 👇
      animation: {
        // Link the keyframes to the class name 'animate-block-bounce'
        // Uses 'ease-in-out' for smooth acceleration/deceleration
        'block-bounce': 'block-bounce 1s infinite ease-in-out',
      },
      // 👆 End Custom Animation 👆
    },
  },
  plugins: [],
}