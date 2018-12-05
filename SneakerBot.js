var page = require('webpage').create();
page.open('https://www.nike.com/us/en_us/', function(status) {
  console.log("Status: " + status);
  if(status === "success") {
    let listWithLogInButton = page.querySelector("li[js-hook='exp-join-login']");
    
    
    console.log("here");
    let button= listWithLogInButton.getElementsByTagName('button')[0];
    button.click()
    page.render('example.png');
  }
  phantom.exit();
});