const accessToken = `Bearer ${Cypress.env('gitlab_access_token')}`

Cypress.Commands.add('api_createProject', project => {
  cy.request({
    method: 'POST',
    url: `/api/v4/projects/`,
    body: {
      name: project.name,
      description: project.description,
      initialize_with_readme: true
    },
    headers: { Authorization: accessToken },
  })
})



Cypress.Commands.add('api_getAllProjects', () => {
    cy.request({
      method: 'GET',
      url: '/api/v4/projects/',
      headers: { Authorization: accessToken },
    })
  })
  
  Cypress.Commands.add('api_deleteProjects', () => {
    cy.api_getAllProjects().then(res =>
      res.body.forEach(project => cy.request({
        method: 'DELETE',
        url: `/api/v4/projects/${project.id}`,
        headers: { Authorization: accessToken },
      }))
    )
  })