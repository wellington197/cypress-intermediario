import { faker } from '@faker-js/faker'

//Faker é uma biblioteca para criar dados aleatórios.
describe('Create Project', () => {

    /*------- PRÉ-CONDIÇÃO ------ */
    beforeEach(() => {
      cy.login() //Efetua Login
    })
  
    it('successfully', () => {
      const project = {
        name: `project-${faker.datatype.uuid()}`, //temp´late literals
        description: faker.random.words(5) // insere 5 palavras
      }
      
    /*-----AÇÃO----*/
      //Chama o comando customizado. 
      cy.gui_createProject(project)
      
      
    /*------- RESULTADOS ------ */
      cy.url().should('be.equal', `${Cypress.config('baseUrl')}/${Cypress.env('user_name')}/${project.name}`)


      cy.contains(project.name).should('be.visible')
      cy.contains(project.description).should('be.visible')
    })
  })