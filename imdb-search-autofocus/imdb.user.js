// ==UserScript==
// @name         IMDB: Focus searchbox
// @namespace    https://itenium.be/
// @author       Wouter Van Schandevijl
// @match        https://www.imdb.com/
// @grant        none
// ==/UserScript==

/* eslint no-console: 0 */

(function() {
  var searchBox = document.getElementById('suggestion-search');

  if (!searchBox) {
    console.log('UserScript: Searchbox focus no longer working');
  } else {
    searchBox.focus();
  }
})();
