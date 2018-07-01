module.exports = {
    /*logIn function
    Gets Url, username and password as a parameter from the test
    Verifies that after login was successfull the button "Start a project" exists.
    */
  loginToGithub :function(url, user, password){
    cy.visit(url)
    cy.get("input[name='login']")
        .type(user)
    cy.get("input[name='password']")
        .type(password)
    cy.get("input[name='commit']")
        .click()
    cy.get('.ml-3').contains('Start a project')
        .should('be.visible')
  },
    /*Search function
    Gets the search criteria as a parameter from the test,and searching for this parameter by typing in search form.
    */
  search: function(input){
    cy.get('.header-search-wrapper > .form-control')
      .type(input)
    cy.get(".js-site-search-form").submit()

  },
   
	  /*Check if Input string exists on current page function
    Gets the repository name as a parameter from the search repository function
    After repository is found returns a callback to searchRepository() function.
    */
   checkForInput: function(input, callback) {
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
	},
     /*Search Repository function
    Gets the repository name as a parameter from the test,and searching for this repository on every page.
    After repository is found clicks on it and verifies that "Cypress-Node" text is visible.
    */
   searchRepository: function(input){
      
      var found = false
      var _this = this
	  
		  this.checkForInput(input, (isFound) => {
			  if (isFound) {
				  cy.log('Found - ', input)
				  cy.contains(input).click()
				  cy.contains('Cypress-Node').visibility
				  return
			  } else {
				  cy.get('.next_page').then((elem) => {
						if (elem.hasClass('disabled')) {
							return
						} else {
							cy.get('.next_page').click()
							this.searchRepository(input)	//		
						}
					})
			  }
		  }) 

   },
    /*Logout function
    Logs the user out from GitHub account.
    */
  logoutFromGithub : function(){
    cy.get(':nth-child(3) > .details-overlay > .HeaderNavlink > .dropdown-caret')
        .click()
    cy.get('.logout-form > .dropdown-item')
        .click()
    cy.get('.home-hero-signup > .btn')
        .should('be.visible')
  }
    
};