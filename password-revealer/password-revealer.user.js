// ==UserScript==
// @name
// @namespace    https://itenium.be/
// @author       Wouter Van Schandevijl
// @match        *
// @grant        none
// ==/UserScript==

/* eslint no-console: 0 */
// eslint-disable-next-line
var load,execute,loadAndExecute;load=function(a,b,c){var d;d=document.createElement("script"),d.setAttribute("src",a),b!=null&&d.addEventListener("load",b),c!=null&&d.addEventListener("error",c),document.body.appendChild(d);return d},execute=function(a){var b,c;typeof a=="function"?b="("+a+")();":b=a,c=document.createElement("script"),c.textContent=b,document.body.appendChild(c);return c},loadAndExecute=function(a,b){return load(a,function(){return execute(b)})};
var $;
loadAndExecute('https://code.jquery.com/jquery-latest.js', function() {
  var count = 0;

  $('input[type=password]')
    .each(function() {
      count++;

      $(this)
        .attr('data-pwd-reveal-index', count)
        .after(`<button class="show-pwd-button" data-pwd-reveal-index="${count}">SHOW</button>`);
    });

  $('.show-pwd-button').on('click', function() {
    const revealIndex = $(this).attr('data-pwd-reveal-index');
    const pwdInput = $(`input[data-pwd-reveal-index=${revealIndex}]`);
    pwdInput.attr('type', 'text');
  });
});
