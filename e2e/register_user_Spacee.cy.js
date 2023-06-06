describe('Creating new User account in Spacee', () => {
    context('Verify the UI and the functionality of the page ', () => {
        beforeEach(()=>{
            cy.visit('https://staging.spacee.jp', {
                auth: {
                 username: 'spacee',
                 password: 'spacee604',
                }
             })
        })

      it('Check if the UI are match', function() {

    cy.get('.header-navigation-button > .btn-positive').click()
    cy.get('.current > span')
      .should('contain', '利用者情報の入力')
      .should('have.css', 'background-color', 'rgb(26, 150, 213)' )
    cy.get('.flow-regist > :nth-child(2) > span')
      .should('contain', 'メール受信の確認')
      .should('have.css', 'background-color', 'rgb(221, 221, 221)' )
    cy.get('.flow-regist > :nth-child(3) > span')
       .should('contain', '登録完了')
       .should('have.css', 'background-color', 'rgb(221, 221, 221)' )
    cy.get('legend').should('contain', '利用者登録 (無料)')

    cy.get('.alert')
      .should('have.css', 'background-color', 'rgb(217, 237, 247)' )
      .should('contain', '既にスペイシー アカウントをお持ちの方へ')
      cy.get('.tx0-9')
       .should('contain', 'Facebookログインを使う場合は、必ずメールアドレス/パスワードでログインして、アカウント情報からFacebookとの関連付けを行ってください。')
    cy.get(':nth-child(3) > .control-label')
      .should('contain', '名前')
    cy.get(':nth-child(4) > .control-label')
       .should('contain', 'メールアドレス')
    cy.get(':nth-child(4) > .controls > :nth-child(2) > small') 
       .should('contain', '携帯メールアドレスの場合は @spacee.jp を受信許可してください')
    cy.get(':nth-child(3) > small')
      .should('contain', '後ほど、登録確認のメールを送信致します。お間違えのないようにお願い致します。')
    cy.get(':nth-child(6) > .control-label')    
      .should('contain', 'パスワード')
    cy.get(':nth-child(7) > .control-label')
     .should('contain', 'パスワード(確認)')
     cy.get(':nth-child(8) > .control-label')
     .should('contain', '利用規約')

      })

      it('Check if functions are working', function() {
        cy.get('.header-navigation-button > .btn-positive').click()
        cy.get('#lname').type('Mylastname')
        cy.get('#fname').type('Myfirstname')
        cy.get('#user_email').type('mytestmail6@email93.com')
        cy.get('#user_password').type('P@ssword123')
        cy.get('#user_password_confirmation').type('P@ssword123')
        cy.get('#user_agreement').check()
        cy.get('#submit_').click()


      })



      
    })


  })

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  