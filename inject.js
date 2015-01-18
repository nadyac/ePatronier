//inject.js
$(".yt-uix-button-subscription-container").after("<button id='my-button'>Venmo Me</button>");
$(".venmo-pay-button").unbind("click");
$("#my-button").click(payArtist);


//  opens venmo paying in a new tab
function payArtist(evt){

	var message = {
		greeting: "venmo-pay-button",
		url : 'https://venmo.com/kortina?txn=pay&amount=3&audience=private',
	}
	chrome.runtime.sendMessage(message, function(response) {
		  console.log(response.farewell);
		});
}
