describe('Verify Provider Login', () => {
    context('passes', () => {
        beforeEach(()=>{
            cy.visit('https://staging.spacee.jp', {
                auth: {
                 username: 'spacee',
                 password: 'spacee604'
                }
             })

             cy.get('.header-navigation > :nth-child(1) > :nth-child(4) > a').click()
  
        })

        it('Check UI  ', () => {
          
            cy.get('.user-sign-up > span').should('contain', '初めてご利用の方は')
            cy.get('.user-sign-up > .btn').should('contain', '新規アカウント登録する')
              .should('have.css', 'color','rgb(220, 53, 69)')
            cy.get('.user-sign-in-title > .text-center').should('contain', 'ログイン')
   
        })

        it('Check Invalid Login  ', () => {
           
            cy.get('#provider_user_email').type(Cypress.env('Invalid_user'))
            cy.get('#provider_user_password').type(Cypress.env('Invalid_pass'))
            cy.get('#provider_user_remember_me').click()
            cy.get('input[type="submit"]').click()
            cy.get('.alert').should('have.css', 'background-color', 'rgb(242, 222, 222)')
            cy.get('.alert > p').should('contain' , 'メールアドレス、またはパスワードが違います。')

        })

        it('Check Valid Login  ', () => {
           
            cy.get('#provider_user_email').type(Cypress.env('spacee_provider'))
            cy.get('#provider_user_password').type(Cypress.env('spacee_password'))
            cy.get('#provider_user_remember_me').click()
            cy.get('input[type="submit"]').click()
            // cy.get('.alert').should('have.css', 'background-color', 'rgb(242, 222, 222)')
            // cy.get('.alert > p').should('contain' , 'メールアドレス、またはパスワードが違います。')

        })


    })
  })