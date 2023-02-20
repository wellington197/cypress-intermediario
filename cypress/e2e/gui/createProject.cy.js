import { faker } from '@faker-js/faker'

const options = { env: { snapshotOnly: true } } //nos testes de _GUI_, também tenhamos _feedback_ visual quando chamadas de API estiverem rodando.


//Faker é uma biblioteca para criar dados aleatórios.
describe('Create Project',options, () => {

    /*------- PRÉ-CONDIÇÃO ------ */
    beforeEach(() => {
    cy.api_deleteProjects() // deleta os projetos antes de criar um novo

    cy.login() //Efetua Login
    })
  
    it('Creando um projeto automático com faker para inserir nome aleatório no projeto', () => {
      const project = {
        name: `project-${faker.datatype.uuid()}`, //temp´late literals
        description: faker.random.words(10) // insere 5 palavras
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