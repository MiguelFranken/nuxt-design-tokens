// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/tokens/_variables.scss" as *;'
        }
      }
    }
  },
  modules: [
    '@nuxtjs/tailwindcss'
  ]
})
