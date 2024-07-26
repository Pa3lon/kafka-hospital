// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxtjs/tailwindcss", "@vueuse/nuxt"],
  compatibilityDate: "2024-07-25",
  nitro: {
    experimental: {
      websocket: true,
    },
  },
});
