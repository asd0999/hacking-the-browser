console.log("hi from bg");

chrome.browserAction.onClicked.addListener(function() {
  console.log("I was clicked");
})