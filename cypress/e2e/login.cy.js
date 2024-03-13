describe('template spec', () => {
  beforeEach(() => {
    cy.viewport(1536, 960)
  });

  it('Login', () => {
    cy.visit('https://www.thewarehouse.co.nz/')

    cy.get('[data-test-id=login-show]').trigger('mouseover')
    cy.get('[data-test-id=popover-signin-btn').click()
    cy.get('#login-form-email').type('test-email@gmail.com')
    cy.get('#login-form-password').type('test-password')
    cy.get('.login-submit.mb-xl').click()

    cy.get('#challenge-running').should('include.text', 'Verifying you are human')

  })
})