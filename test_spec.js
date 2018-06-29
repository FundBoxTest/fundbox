var utils = require('../integration/utils/utils') 
//Test description
describe("GitHub test", function(){
  it("Login, search, logout functions",function(){
      //calls login function from utils file
    utils.loginToGithub("https://github.com/login","test-1234567890", "L8s57Dnj4J>@?B-;9")
      //calls search function from utils file
    utils.search("cypress.io")
      //calls search repository function from utils file
    utils.searchRepository("cypress-io/cypress-adapter-node")
      //calls Logout function from utils file
    utils.logoutFromGithub()
  })
})