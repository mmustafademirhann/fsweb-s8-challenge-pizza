import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:5173", // Eğer farklı bir portta çalışıyorsa değiştir
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
