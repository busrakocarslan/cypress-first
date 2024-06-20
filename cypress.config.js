// const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//     },
//   },
// }); default burası geldi 
//? bu kısım hocadan aldığım
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  watchForFileChanges: false,// kodu yazdığımız anda değişikliği sağlayan drum default true olduğundan false a çavrilebilir.
  defaultCommandTimeout: 10000,// default hali 4000 ancak kısa geliyorsa değiştirilebiliyor
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});