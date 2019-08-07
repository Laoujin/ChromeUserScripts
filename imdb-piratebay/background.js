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
    if (request.piratebayUrl) {
      piratebayUrl = request.piratebayUrl;
      console.log('BG: piratebayUrl from sets update', piratebayUrl);

    } else if (request.type === 'requestUrl') {
      sendResponse(piratebayUrl);
    }
  });
