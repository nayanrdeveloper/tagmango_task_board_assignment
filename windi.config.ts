import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  extract: {
    include: ['**/*.{jsx,tsx,css}'],
    exclude: ['node_modules', '.git', '.next'],
  },
  theme: {
    extend:{
      // container: {
      //   padding: '4rem',
      // },
      colors: {
        "sidebar": "#FCFBFF",
        "icon": "#27104E",
        "pink-main": "#9854CB",
        "main-section": "#f0f7fa",
        "light-blue": "#7581E8",
        "light-yellow": "#FCA465",
        "yellow-2": "#FDD3B4",
        "light-pink": "#DDACF5",
        "light-white": "#F5F2FF",
        "light-white-2": "#FCFBFF",
        "dark-blue": "#27104E",
        "card-pink-button": "rgba(221, 172, 245, 0.4)",
        "card-blue-button": "#DCDFF9",
        "card-light-blue": "#7580E8",
        "card-yellow-button": "#E26001",
        "card-date": "#D9D9D9",
        "card-border": "rgba(217, 217, 217, 0.5)",
        "light-blue-2": "rgba(39, 16, 78, 0.5)"
      },
      boxShadow: {
        'light': "0px 4px 4px rgba(152, 84, 203, 0.1)"
      }
    }
  }
})
