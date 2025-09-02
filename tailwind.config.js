/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    // 動的に生成される色クラス
    'bg-blue-50', 'bg-green-50', 'bg-purple-50', 'bg-pink-50', 'bg-orange-50', 'bg-indigo-50', 'bg-red-50',
    'text-blue-700', 'text-green-700', 'text-purple-700', 'text-pink-700', 'text-orange-700', 'text-indigo-700', 'text-red-700',
    'ring-blue-500', 'ring-green-500', 'ring-purple-500', 'ring-pink-500', 'ring-orange-500', 'ring-indigo-500', 'ring-red-500',
    'bg-blue-500', 'bg-green-500', 'bg-purple-500',
    'text-blue-600', 'text-green-600', 'text-purple-600',
    'bg-blue-100', 'bg-green-100', 'bg-purple-100',
  ],
  theme: {
    extend: {
      colors: {
        github: {
          primary: '#24292e',
          secondary: '#586069',
          success: '#28a745',
          warning: '#ffd33d',
          danger: '#d73a49',
          info: '#0366d6',
          light: '#f6f8fa',
          dark: '#24292e',
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}