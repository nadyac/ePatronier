//inject.js

// Create, style, and insert Venmo Me! button after the Subscribe button of a YT video
$(".yt-uix-button-subscription-container").after("<button id='my-button' style='color:blue;margin-left:20px; \
													background:-webkit-gradient(linear, left top, left bottom, color-stop(0.05, #79bbff), color-stop(1, #378de5)); \
													background:-moz-linear-gradient(top, #79bbff 5%, #378de5 100%); \
													background:-webkit-linear-gradient(top, #79bbff 5%, #378de5 100%); \
													background:-o-linear-gradient(top, #79bbff 5%, #378de5 100%); \
													background:-ms-linear-gradient(top, #79bbff 5%, #378de5 100%); \
													background:linear-gradient(to bottom, #79bbff 5%, #378de5 100%); \
													background-color:#79bbff; \
													border-radius:6px; \
													border:1px solid #84bbf3; \
													display:inline-block; \
													cursor:pointer; \
													color:#ffffff; \
													font-family:arial; \
													font-size:15px; \
													font-weight:bold; \
													padding:6px 24px; \
													text-decoration:none;'>Venmo Me!</button>");

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
