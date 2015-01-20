

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse){

    if (request.greeting == 'venmo-pay-button'){
		  chrome.tabs.create({'url': request.url}, function(tab) {
		    //bkg.console.log("tab", tab);
		  });

    }

    sendResponse({farewell: "goodbye"});
  }

);