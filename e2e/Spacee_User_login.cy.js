describe('Verify if it can login to Spacee', () => {
    context('Login page validation', () => {
        beforeEach(()=>{
            cy.visit('https://staging.spacee.jp', {
                auth: {
                 username: 'spacee',
                 password: 'spacee604',
                }
             })
    
             cy.get('.header-navigation > :nth-child(1) > :nth-child(3)').click()
        })

         
        it('Check UI  ', () => {
          
            cy.get('.user-sign-up > span').should('contain', '初めてご利用の方は')
            cy.get('.user-sign-up > .btn').should('contain', '新規アカウント登録する')
              .should('have.css', 'color','rgb(220, 53, 69)')
            cy.get('.user-sign-in-title > .text-center').should('contain', 'ログイン')
            cy.get('.icon-info-sign').should('contain', '既にスペイシー アカウントをお持ちの方へ')
            cy.get('.tx0-9').should('contain', 'Facebookログインを使う場合は、必ずメールアドレス/パスワードでログインして、アカウント情報からFacebookとの関連付けを行ってください。')
            cy.get('.alert').should('have.css', 'background-color', 'rgb(217, 237, 247)')
              .should('have.css', 'color', 'rgb(58, 135, 173)')
        
        })

    it('Check Valid user  ', () => {
    
        cy.get('#user_email')
        .type(Cypress.env('spacee_user'));
        cy.get('#user_password').type(Cypress.env('spacee_password'));
        cy.get(':nth-child(6) > .btn').click()

        cy.get('.flash-container > .alert').should('contain', 'ログインしました。')
          .should('have.css', 'background-color', 'rgb(223, 240, 216)')
          .should('have.css', 'color', 'rgb(70, 136, 71)')
    })

    it('Check Invalid user (incorrect email) ', () => {
    
        cy.get('#user_email').type(Cypress.env('Invalid_user'));
        cy.get('#user_password').type(Cypress.env('spacee_password'));
        cy.get(':nth-child(6) > .btn').click()

        
        cy.get('.toast-message').should('contain', 'メールアドレス、またはパスワードが違います。')
    })

    it('Check Invalid user (incorrect password) ', () => {
    
        cy.get('#user_email').type(Cypress.env('spacee_user'));
        cy.get('#user_password').type(Cypress.env('Invalid_pass'));
        cy.get(':nth-child(6) > .btn').click()

        
        cy.get('.toast-message').should('contain', 'メールアドレス、またはパスワードが違います。')
    })
  })


})
