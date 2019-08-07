// ==UserScript==
// @name         StackOverflow / StackExchange: hide distracting elements
// @namespace    https://itenium.be/
// @author       Wouter Van Schandevijl
// @match        https://stackoverflow.com/
// @match        https://*.stackexchange.com/
// @match        https://superuser.com/
// @match        https://serverfault.com/
// @match        https://askubuntu.com/
// @grant        none
// ==/UserScript==

(function() {
  document.getElementById('hot-network-questions').style.visibility = 'hidden';
  document.getElementsByClassName('module community-bulletin')[0].style.display = 'none';
})();
