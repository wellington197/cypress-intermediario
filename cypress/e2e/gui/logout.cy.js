describe('Testes de acesso ao login e efetuando Logout', () => {
    beforeEach(() => {
      cy.login() //efetua login, conforme o arquivo gui_commands
      cy.visit('/') //Acessa a URL base
    })
  
    it('successfully ao efetuar logout', () => {
      cy.logout()//efetua logout, conforme o arquivo gui_commands
  
      cy.url().should('be.equal', `${Cypress.config('baseUrl')}/users/sign_in`) //Verifica se a tela retornou a página de login
    })
  })