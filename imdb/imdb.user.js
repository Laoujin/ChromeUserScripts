// ==UserScript==
// @name         IMDB: Focus searchbox
// @namespace    https://itenium.be/
// @author       Wouter Van Schandeijl
// @match        https://www.imdb.com/
// @grant        none
// ==/UserScript==

(function() {
  var searchBox = document.getElementById('navbar-query');

  if (!searchBox) {
    console.log('UserScript: Searchbox focus no longer working');
  } else {
    searchBox.focus();
  }
})();
