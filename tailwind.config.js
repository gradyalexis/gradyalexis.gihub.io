// tailwind.config.js
module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './components/**/*.{vue,js,ts}',
      './layouts/**/*.{vue,js,ts}',
      './pages/**/*.{vue,js,ts}',
      './plugins/**/*.{js,ts}',
      './mixins/**/*.{vue,js,ts}',
      './dircetives/**/*.{vue,js,ts}',
      './nuxt.config.{js,ts}',
      './constants/**/*.{js,ts}'
    ]
  },
  darkMode: 'media',
  variants: {
    extend: {
      backgroundColor: ['checked', 'disabled'],
      borderColor: ['checked', 'disabled'],
      opacity: ['disabled']
    }
  }
}
