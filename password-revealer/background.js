chrome.browserAction.onClicked.addListener(function(tab) {
  // Clicked extension icon
  chrome.tabs.executeScript(null, { file: 'password-revealer.js' });
});
