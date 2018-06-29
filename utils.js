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
    /*Search Repository function
    Gets the repository name as a parameter from the test,and searching for this repository.
    After repository is found clicks on it and verifies that "Cypress-Node" text is visible.
    */
   searchRepository: function(input){
    cy.get('.pagination > :nth-child(3)')
        .click()
    cy.contains(input)
        .click()
    cy.contains('Cypress-Node').should('be.visible')
               
   },
    
  logoutFromGithub : function(){
    cy.get(':nth-child(3) > .details-overlay > .HeaderNavlink > .dropdown-caret')
        .click()
    cy.get('.logout-form > .dropdown-item')
        .click()
    cy.get('.home-hero-signup > .btn')
        .should('be.visible')
  }
    
};