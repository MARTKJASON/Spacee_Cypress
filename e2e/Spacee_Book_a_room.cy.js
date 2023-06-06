describe('Verify to Book a Spacee ', () => {
    context('Space / Room Reservation', () => {
        beforeEach(()=>{
            cy.visit('https://staging.spacee.jp', {
                auth: {
                 username: 'spacee',
                 password: 'spacee604',
                }
             })
    
             cy.get('.header-navigation > :nth-child(1) > :nth-child(3)').click()
             cy.get('#user_email')
             .type(Cypress.env('spacee_user'));
             cy.get('#user_password').type(Cypress.env('spacee_password'));
             cy.get(':nth-child(6) > .btn').click()


        })


        it('Check Room Reservation ', () => {
    
            cy.get('.btn-positive').click()
            cy.selectRandomId().click();
            cy.get('#date').click()
            cy.get('.mbsc-calendar-year').click()
            cy.contains('2023年').click()
            .wait(2000)
            cy.get(':nth-child(2) > .mbsc-calendar-picker > .mbsc-calendar-scroll-wrapper > :nth-child(1) > .mbsc-scrollview-scroll > [style="transform: translateX(0%); width: 100%;"] > .mbsc-calendar-table > :nth-child(3) > :nth-child(2) > .mbsc-calendar-cell-inner > .mbsc-calendar-cell-text').click()
            cy.get('.mbsc-calendar-slide-active > .mbsc-calendar-table > :nth-child(5) > :nth-child(6) > .mbsc-calendar-cell-inner').click()
            cy.contains('終わり').click()
            cy.once('uncaught:exception', () => false)
            cy.get('[tabindex="-1"] > .mbsc-calendar-cell-inner > .mbsc-calendar-cell-text').click()
            cy.get('button').contains('閉じる').click()
            cy.contains('予約手続きに進む').click()

            
        })

        



    })

})
