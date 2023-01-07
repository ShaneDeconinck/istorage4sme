// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-16",
      viewport: "width=500, initial-scale=1",
      title: "iStorage4SME",
      meta: [{ name: "description", content: "VLAIO TETRA iStorage4SME." }],
    },
  },
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
