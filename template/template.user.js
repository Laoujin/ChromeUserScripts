// ==UserScript==
// @name
// @namespace    https://itenium.be/
// @author       Wouter Van Schandevijl
// @match        https://
// @grant        none
// ==/UserScript==

// eslint-disable-next-line
var load,execute,loadAndExecute;load=function(a,b,c){var d;d=document.createElement("script"),d.setAttribute("src",a),b!=null&&d.addEventListener("load",b),c!=null&&d.addEventListener("error",c),document.body.appendChild(d);return d},execute=function(a){var b,c;typeof a=="function"?b="("+a+")();":b=a,c=document.createElement("script"),c.textContent=b,document.body.appendChild(c);return c},loadAndExecute=function(a,b){return load(a,function(){return execute(b)})};
loadAndExecute('http://code.jquery.com/jquery-latest.js', function() {
  console.log($);
});


(function() {
  var element = document.getElementById('');
})();
