describe('Verify to login admin', () => {
    context('Check admin login validation', () => {
        beforeEach(()=>{
            cy.visit('https://staging-admin.spacee.jp/admin_users/sign_in', {
                auth: {
                 username: 'spacee',
                 password: 'spacee604'
                }
             })
  
        })

        it('Checks UI', () => {
            cy.get('label[for="admin_user_email"]').should('contain', 'Email')
            cy.get(':nth-child(4) > label').should('contain', 'Password')
            cy.get('[type="checkbox"]').should('exist')
            cy.get(':nth-child(5) > label').should('contain', 'Remember me')
            cy.get('[type="submit"]').should('have.css', 'background-color', 'rgb(0, 169, 245)')

          })
          it('Invalid login', () => {
            cy.get('[type="email"]').type(Cypress.env('Invalid_user'))
            cy.get('[type="password"]').type(Cypress.env('Invalid_pass'))
            cy.get('[type="submit"]').click()
            cy.get('h2').should('contain', 'Sign in')

          })

          it('Valid login', () => {
            cy.once('uncaught:exception', () => false)
            cy.get('#admin_user_email').type(Cypress.env('spacee_admin'))
            cy.get('#admin_user_password').type(Cypress.env('spacee_password'))
            cy.get('[type="submit"]').click()
            cy.get('.alert').should('have.css', 'background-color', 'rgb(223, 240, 216)')
            .should('contain', 'ログインしました。')
       

          })



    })
  })

