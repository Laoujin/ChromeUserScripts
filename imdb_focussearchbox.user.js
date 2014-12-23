// ==UserScript==
// @name         IMDB Userscript
// @namespace    http://sangu.be/
// @version      0.1
// @description  Focus searchbox
// @author       Laoujin
// @match        http://www.imdb.com/
// @grant        none
// ==/UserScript==

var searchBox = $("#navbar-query");

if (searchBox.length !== 1) {
    console.log("UserScript: Searchbox focus no longer working");
}

searchBox.focus();