require('../support/commands')
//Test description
describe("GitHub test", function(){
  it("Login, search, logout functions",function(){
      //calls login function from utils file
	  cy.login("https://github.com/login","test-1234567890", "L8s57Dnj4J>@?B-;9")
      //calls search function from utils file
//    cy.pause()
      cy.search("cypress.io")
      //calls search repository function from utils file
    cy.searchRepository("cypress-io/cypress-adapter-node")
      //calls Logout function from utils file
    cy.logoutFromGithub()
  })
})