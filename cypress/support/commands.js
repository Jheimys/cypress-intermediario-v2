// cypress/support/commands.js
// Cypress.Commands.add('login', (username, password) => {
//     cy.get('#user_login').type(username)
//     cy.get('#user_password').type(password)
//     cy.get('#new_user > .submit-container > .btn').click()
//   }
// )


Cypress.Commands.add('login', (
  user = Cypress.env('user_name'),
  pw = Cypress.env('user_password')
) => {
  const login = () => {
    cy.visit('http://localhost/users/sign_in')
    cy.get('#user_login').type(user)
    cy.get('#user_password').type(pw)
    cy.get('#new_user > .submit-container > .btn').click()
  }

  login()
})