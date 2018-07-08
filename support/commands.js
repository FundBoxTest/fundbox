
 	Cypress.Commands.add("login", (url, user, password) => { 
    cy.visit(url)
    cy.get("input[name='login']")
        .type(user)
    cy.get("input[name='password']")
        .type(password)
    cy.get("input[name='commit']")
        .click()
    cy.get('.ml-3').contains('Start a project')
        .should('be.visible')	 
 }),
		
	Cypress.Commands.add('search',(input) => {
    cy.get('.header-search-wrapper > .form-control')
      .type(input)
    cy.get(".js-site-search-form").submit()

  }),
		
	Cypress.Commands.add('checkForInput',(input, callback)=> {
	    let found = false
		cy.get('.repo-list').then(function (elem){				
			if (elem.text().includes(input)) {				
				cy.log('found')
				found = true				
			} else {    					
				cy.log('not found')
				found = false
			}

			callback(found)
		})
	}),
		
	Cypress.Commands.add('searchRepository',(input) =>{
      
        var _this = this
	  
		  cy.checkForInput(input, (isFound) => {
			  if (isFound) {
				  // Found the repository ans Asserts the string 'Cypress-Node' exists in the Dome
				  cy.log('Found - ', input)
				  cy.contains(input).click()
				  cy.contains('Cypress-Node').should('be.visible')
				  return
			  } else {
				  // Stop etaration if NextPage button is disabled, means no pages left.
				  cy.get('.next_page').then((elem) => {
						if (elem.hasClass('disabled')) {
							return
						} else {
							// If not repository is not found on current page it iterates recursevly to the next page by clicking next page and calling itself.  	
							cy.get('.next_page').click()
							this.searchRepository(input)	
						}
					})
			  }
		  }) 

   }),
		
 Cypress.Commands.add('logoutFromGithub',() =>{
    cy.get(':nth-child(3) > .details-overlay > .HeaderNavlink > .dropdown-caret')
        .click()
    cy.get('.logout-form > .dropdown-item')
        .click()
    cy.get('.home-hero-signup > .btn')
        .should('be.visible')
  });
    
