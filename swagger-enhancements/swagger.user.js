// ==UserScript==
// @name         Enhance Swagger
// @namespace    https://itenium.be/
// @author       Wouter Van Schandevijl
// @match        http://localhost:19081/*
// @grant        none
// ==/UserScript==

/* eslint no-console: 0 */
// eslint-disable-next-line
var load,execute,loadAndExecute;load=function(a,b,c){var d;d=document.createElement("script"),d.setAttribute("src",a),b!=null&&d.addEventListener("load",b),c!=null&&d.addEventListener("error",c),document.body.appendChild(d);return d},execute=function(a){var b,c;typeof a=="function"?b="("+a+")();":b=a,c=document.createElement("script"),c.textContent=b,document.body.appendChild(c);return c},loadAndExecute=function(a,b){return load(a,function(){return execute(b)})};
var $;
loadAndExecute('https://code.jquery.com/jquery-latest.js', function() {
  // console.log($);

  const addSearch = () => {
    var serversDiv = $('.scheme-container .schemes > div:first');
    if (serversDiv.length === 0) {
      setTimeout(addSearch, 200);
      return;
    }

    serversDiv.after(`
      <div>
        <span class="servers-title">Free Text Search</span>
        <div class="servers"><input type="text" id="freeTextSearch" placeholder="Search" style="padding: 5px 10px; margin: 0;"></div>
      </div>`);

    $('#freeTextSearch').keyup(function() {
      const needle = $(this).val().toLowerCase();
      const actions = $('.opblock-tag-section > div > span');
      actions.each(function(index, value) {
        const opBlock = $(value);
        const blockText = value.innerText;
        if (blockText.toLowerCase().indexOf(needle) !== -1) {
          opBlock.show();
        } else {
          opBlock.hide();
        }
      });

      $('.opblock-tag-section').each(function(index, value) {
        $(this).show();
        const visibleOps = $('> div > span:visible', value);
        if (visibleOps.length === 0) {
          $(this).hide()
        } else {
          $(this).show();
        }
      });
    });
  };

  setTimeout(addSearch, 200);
});
