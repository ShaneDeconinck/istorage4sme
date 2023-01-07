// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/css/main.css"],
  modules: ["@nuxt/image-edge", "@nuxtjs/sanity"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  sanity: {
    projectId: "mmm3m76e",
    dataset: "production",
  },
});
