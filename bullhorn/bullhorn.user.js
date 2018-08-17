// ==UserScript==
// @name         Bullhorn
// @namespace    https://itenium.be/
// @author       Wouter Van Schandevijl
// @match        https://app.bullhornstaffing.com
// @grant        none
// ==/UserScript==

/* eslint no-console: 0 */
// eslint-disable-next-line
var load,execute,loadAndExecute;load=function(a,b,c){var d;d=document.createElement("script"),d.setAttribute("src",a),b!=null&&d.addEventListener("load",b),c!=null&&d.addEventListener("error",c),document.body.appendChild(d);return d},execute=function(a){var b,c;typeof a=="function"?b="("+a+")();":b=a,c=document.createElement("script"),c.textContent=b,document.body.appendChild(c);return c},loadAndExecute=function(a,b){return load(a,function(){return execute(b)})};
var $;

if (window.top === window.self) {
  // Nothing happens here, actual content is loaded with iframes
  // Ideally should check when the iframe changes so that we can
  // disconnect() the old MutationObserver
  return;
}


loadAndExecute('https://code.jquery.com/jquery-latest.js', function() {
  setTimeout(observeNode, 2000);


  function observeNode() {
    var targetNode = document.getElementById('novo-body');
    console.log('Observing', targetNode);
    //console.log('wuuk', $(targetNode));

    var callback = function(mutationsList) {
      for (var mutation of mutationsList) {
        if (mutation.type === 'childList') {
          //console.log('mut', mutation.target, mutation.addedNodes);
          var target = $(mutation.target);
          if (target.hasClass('ng-pristine')) {
            $('input[autocomplete]', target).each(function() {
              //console.log('yaye', this);
              this.setAttribute('autocomplete', 'new-password');
            });
          }
        }
      }
    };

    var config = {attributes: false, childList: true, subtree: true};
    var observer = new MutationObserver(callback);
    observer.observe(targetNode, config);
  }
});
