var page = require('webpage').create(); 
page.onConsoleMessage = function(str) { 
   console.log(str); 
} 
page.open('https://www.nike.com/launch/?s=upcoming', function(status) { 
   page.render('beforeclick.png'); 
   console.log(page.url); 
   
   var element = page.evaluate(function() {   
      return document.querySelector('img[src = "https://secure-images.nike.com/is/image/DotCom/378037_100_A_PREM?$SNKRS_COVER_WD$&align=0,1"]'); 
   }); 
   page.sendEvent('click', element.offsetLeft, element.offsetTop, 'left'); 
   
   window.setTimeout(function () { 
      console.log(page.url); 
      page.render('afterclick.png'); 
      phantom.exit(); 
   }, 5000); 
   console.log('element is ' + element); 
}); 

function click(el){
    var ev = document.createEvent("MouseEvent");
    ev.initMouseEvent(
        "click",
        true /* bubble */, true /* cancelable */,
        window, null,
        0, 0, 0, 0, /* coordinates */
        false, false, false, false, /* modifier keys */
        0 /*left*/, null
    );
    el.dispatchEvent(ev);
}