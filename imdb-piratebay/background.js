chrome.browserAction.onClicked.addListener(function(tab) {
  // Clicked extension icon
  chrome.runtime.openOptionsPage();
});

var piratebayUrl = 'https://pirateproxy.bet';
chrome.storage.sync.get({ piratebayUrl }, function (items) {
  piratebayUrl = items.piratebayUrl;
  console.log('BG: piratebayUrl from sets', piratebayUrl);
});


chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    // TODO: Also listen to option changes to update piratebayUrl

    console.log(sender.tab ?
      "from a content script:" + sender.tab.url :
      "from the extension");

    if (request.piratebayUrl) {
      piratebayUrl = request.piratebayUrl;
      console.log('BG: piratebayUrl from sets update', piratebayUrl);
    }

    if (request.greeting == "hello") {
      console.log('BG: Sending', piratebayUrl);
      sendResponse(piratebayUrl);
    }
  });
