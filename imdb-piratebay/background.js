chrome.browserAction.onClicked.addListener(function(tab) {
  // Clicked extension icon
  chrome.runtime.openOptionsPage();
});

var piratebayUrl = 'https://pirateproxy.bet';

// chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
//   console.log('uhoh', tabId);
//   console.log('2', changeInfo);
//   console.log('3', tab);
//   if (changeInfo.status == 'complete') {

//     // do your things

//   }
// });

// console.log('owhyeah', chrome);
// console.log('zerfzef', window);

// window.addEventListener("PassToBackground", function (evt) {
//   alert(evt);
//   chrome.runtime.sendMessage(evt.detail);
// }, false);

// chrome.tabs.executeScript(tab.id, { code: '$("body").append("Test : "' + text + ');' });

// console.log('BG: getting settings');
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
    if (request.greeting == "hello") {
      console.log('BG: Sending', piratebayUrl);
      sendResponse(piratebayUrl);
    }
  });


// chrome.storage.sync.get({ piratebayUrl: defaultPiratebayUrl }, function (items) {
//   // alert('what?')
//   const event = new CustomEvent('piratebayUrl', {piratebayUrl: items.piratebayUrl});
//   window.dispatchEvent(event);
// });


// chrome.runtime.onMessage.addListener(
//   function (request, sender, sendResponse) {
//     console.log("background.js got a message")
//     console.log(request);
//     console.log(sender);
//     sendResponse("bar");
//   }
// );


// chrome.tabs.sendMessage(tab.id, { content: "message" }, function (response) {
//   if (response) {
//     console.log('res', response);
//   }
// });
