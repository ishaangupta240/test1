// nuxt.config.js
export default defineNuxtConfig({
  // Runtime config settings
  runtimeConfig: {
    public: {
      // Publicly accessible config
    },
    private: {
      // Private config
    }
  },

  // Add the @nuxt/image-edge module
  modules: [
    '@nuxt/image-edge',
  ],

  // Image module configuration
  image: {
    // Define the provider for your images
    providers: {
      static: {
        provider: 'static',
        options: {
          // Configure if necessary
        },
      },
    },
    // Set the dir if your images are in a specific folder
    dir: 'static',
  },

  // Build settings
  build: {
    // Customize the build process if needed
  },
});
