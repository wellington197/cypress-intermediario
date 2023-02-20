import { faker } from '@faker-js/faker'


const options = { env: { snapshotOnly: true } } //nos testes de _GUI_, também tenhamos _feedback_ visual quando chamadas de API estiverem rodando.


describe('Create Issue',options, () => {
  const issue = {
    title: `issue-${faker.datatype.uuid()}`,
    description: faker.random.words(3),
    project: {
      name: `project-${faker.datatype.uuid()}`,
      description: faker.random.words(5)
    }
  }

  beforeEach(() => {
    cy.api_deleteProjects() // deleta os projetos antes de criar um novo
    cy.login()
    cy.api_createProject(issue.project)
  })

  it('Creando a Issue', () => {
    cy.gui_createIssue(issue)

    cy.get('.issue-details')
      .should('contain', issue.title)
      .and('contain', issue.description)
  })
})