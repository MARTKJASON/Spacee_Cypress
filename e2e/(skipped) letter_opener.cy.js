describe('Creating new User account in Spacee', () => {
    context('Verify the UI and the functionality of the page ', () => {

             it('Verify the account confirmation in letter_opener', function() {

                cy.visit('https://staging.spacee.jp/letter_opener', {
                    auth: {
                     username: 'spacee',
                     password: 'spacee604',
                    }
                 })
                 cy.get('contain', 'クリックして登録完了').click()
              
             })

            })

        })



    
