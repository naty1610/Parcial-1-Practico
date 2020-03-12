describe('Todoist login', function () {
  it('Visits Todoist and fails at login', function () {
    cy.visit('https://todoist.com/Users/showLogin?mini=1&success_page=/app&lang=en')
    cy.wait(2000)
    cy.get('form').find('input[name="email"]').click().type("wrongemail@example.com")
    cy.get('form').find('input[name="password"]').click().type("1234")
    cy.screenshot();
    cy.get('form').contains('Log in').click()
    cy.contains('Wrong email or password.')
    cy.screenshot();
  })

  it('Visits Todoist and fails at login, inavalid email', function () {
    cy.visit('https://todoist.com/Users/showLogin?mini=1&success_page=/app&lang=en')
    cy.wait(2000)
    cy.get('form').find('input[name="email"]').click().type("q")
    cy.get('form').find('input[name="password"]').click().type("1234")
    cy.screenshot();
    cy.get('form').contains('Log in').click()
    cy.contains('Invalid email address.')
    cy.screenshot();
  })

  it('Visits Todoist and success at login', function () {
    cy.visit('https://todoist.com/Users/showLogin?mini=1&success_page=/app&lang=en')
    cy.wait(2000)
    cy.get('form').find('input[name="email"]').click().type("dn.lecca@uniandes.edu.co")
    cy.get('form').find('input[name="password"]').click().type("uniandes2020")
    cy.screenshot();
    cy.get('form').contains('Log in').click()
    cy.get('h2').should('contain', 'Today')
    cy.screenshot();
  })

})

describe('Todoist', function () {
  beforeEach(function () {
    cy.visit('https://todoist.com/Users/showLogin?mini=1&success_page=/app&lang=en')
    cy.wait(2000)
    cy.get('form').find('input[name="email"]').click().type("dn.lecca@uniandes.edu.co")
    cy.get('form').find('input[name="password"]').click().type("uniandes2020")
    cy.get('form').contains('Log').click()
    cy.wait(3000)
  })
  it('Create task in Today', function () {
    cy.get('.agenda_add_task').find('a').click()
    cy.get('.DraftEditor-root').find('br').type(" ", { force: true })
    cy.wait(2000)
    cy.get('span[data-text="true"]').type('First', { force: true }).wait(2000)
    cy.get('.item_editor_assign_due').click()
    cy.get('button[data-track="scheduler|date_shortcut_today"]').click()
    cy.screenshot();
    cy.get('button[type="submit"]').click()
    cy.screenshot();
  })
  it('Search Task', function () {
    cy.get('input[class="quick_find fixed_pos"]').click().type("Fist")
    cy.wait(1000)
    cy.screenshot();
    cy.get('span[class="ist_complete_content"]').should('contain', 'Fist')
    cy.screenshot();
  })
  it('Edit task in Today ', function () {
    cy.get('.task_content_item').first().click()
    cy.get('span[data-text="true"]').type('Edit', { force: true })
    cy.screenshot();
    cy.get('button[type="submit"]').click()
    cy.screenshot();
  })
  it('task done in Today', function () {
    cy.get('.ist_checkbox').first().click()
    cy.screenshot();
  })
  it('Go to Inbox', function () {
    cy.get('li[id="filter_inbox"]').click()
    cy.wait(1000)
    cy.screenshot();
    cy.get('h1').should('contain', 'Inbox')
    cy.screenshot();
  })
  it('Go to Next 7 days', function () {
    cy.get('li[id="filter_7days"]').click()
    cy.wait(1000)
    cy.screenshot();
    cy.get('h1').should('contain', 'Next 7 days')
    cy.screenshot();
  })
  it('Create Project', function () {
    cy.get('.left_list_man').find('a').click()
    cy.wait(1000)
    cy.get('input[id="edit_project_modal_field_name"]').type('Proyecto Prueba')
    cy.get('.color_dropdown_toggle').click()
    cy.get('li[data-value="43"]').click()
    cy.screenshot();
    cy.get('button[type="submit"]').click()
    cy.get('ul[id="projects_list"]').should('contain', 'Proyecto Prueba')
    cy.screenshot();
  })
  it('Sort Task Welcome Project', function () {
    cy.get('ul[id="projects_list"]').first().click()
    cy.get('button[class="gear_icon icon"]').click()
    cy.get('.ist_menu').contains('Sort by name').click()
    cy.wait(1000)
    cy.screenshot();
  })
})

describe('Todoist Log out', function () {
  beforeEach(function () {
    cy.visit('https://todoist.com/Users/showLogin?mini=1&success_page=/app&lang=en')
    cy.wait(2000)
    cy.get('form').find('input[name="email"]').click().type("dn.lecca@uniandes.edu.co")
    cy.get('form').find('input[name="password"]').click().type("uniandes2020")
    cy.get('form').contains('Log').click()
    cy.wait(3000)
  })
  it('Log out', function () {
    cy.get('span[id="gear_holder"]').click()
    cy.wait(1000)
    cy.screenshot();
    cy.get('div[class="usermenu__row"]').contains('Log out').click()
    cy.wait(40000)
    cy.screenshot();
  })
}) 