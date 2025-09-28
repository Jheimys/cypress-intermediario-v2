describe('logout', () => {
    beforeEach(() => {
        cy.login()
        cy.visit('/')
    })

    it('successfully', () => {
        cy.logout()

        cy.get('h1.mb-3.font-weight-normal')
        .should('be.visible')
        .and('contain.text', 'GitLab Community Edition')
    })
})