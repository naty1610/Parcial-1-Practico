describe('Todoist login', function() {
    it('Visits Todoist and fails at login', function() {
        cy.visit('https://todoist.com/Users/showLogin?mini=1&success_page=/app&lang=en')
        cy.wait(2000)
        cy.get('form').find('input[name="email"]').click().type("wrongemail@example.com")
        cy.get('form').find('input[name="password"]').click().type("1234")
        cy.get('form').contains('Log in').click()
        cy.contains('Wrong email or password.')
    })

    it('Visits Todoist and fails at login, inavalid email', function() {
        cy.visit('https://todoist.com/Users/showLogin?mini=1&success_page=/app&lang=en')
        cy.wait(2000)
        cy.get('form').find('input[name="email"]').click().type("q")
        cy.get('form').find('input[name="password"]').click().type("1234")
        cy.get('form').contains('Log in').click()
        cy.contains('Invalid email address.')
    })

    it('Visits Todoist and success at login', function() {
        cy.visit('https://todoist.com/Users/showLogin?mini=1&success_page=/app&lang=en')
        cy.wait(2000)
        cy.get('form').find('input[name="email"]').click().type("dn.lecca@uniandes.edu.co")
        cy.get('form').find('input[name="password"]').click().type("uniandes2020")
        cy.get('form').contains('Log in').click()
        cy.get('h2').should('contain', 'Today')
    })
    
})

