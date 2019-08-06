chrome.browserAction.onClicked.addListener(function(tab) {
  // Clicked extension icon
  chrome.runtime.openOptionsPage();
});
