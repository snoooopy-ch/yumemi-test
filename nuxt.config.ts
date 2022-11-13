import { resolve } from "path";
import { defineNuxtConfig } from 'nuxt'
import ConfigStrategy from "./env/strategy";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
console.log("Platform:"+ process.env.BUILD_ENV);
const configStrategy = new ConfigStrategy(process.env.BUILD_ENV || "");

const build = configStrategy.build;
const workbox = configStrategy.workbox;
const network = configStrategy.network;
const scss = configStrategy.scss;

console.log("ビルド設定",build);
console.log("workbox設定",workbox);
console.log("network設定",network);
console.log("scss設定",scss);

export default defineNuxtConfig({
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: build.ssr,
  static: build.static,
  css:scss.global,
  build: {
    transpile: build.transpile,
    parallel: true,
  },
  publicRuntimeConfig: {
    FRONT_API_URL: network.API_BASE_URL,
    REASA_KEY: network.REASA_KEY,
  },
  modules: [],
  vite: {
    build: {
      target: "es2017",
    },
    css:{
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@/assets/scss/variables.scss";`,
        },
      },
    },
    define:{
      "process.env.DEBUG": false,
    },
    optimizeDeps: {
      exclude: [
        'plugins'
      ]
    },
  },
  alias: {
    assets: resolve(__dirname, "./assets"),
  },
})
