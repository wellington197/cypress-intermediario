const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost',
    env: {
      hideCredentials: true, //serve para não vazar access token
      requestMode: true, //Tenha feedback visual ao executar request
    },
    experimentalRunAllSpecs: true, // Permite executar todos os testes de uma única vez.
  },
  fixturesFolder: false, //não executa pasta 
  video: false,//não executa pasta 
})
