var page = require('webpage').create();
page.open('https://www.nike.com/launch/t/air-jordan-12-retro-gym-red-black/', function(status) {
  console.log("Status: " + status);
  if(status === "success") {
    page.render('example.png');
  }
  phantom.exit();
});