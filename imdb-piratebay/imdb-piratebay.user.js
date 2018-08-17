// ==UserScript==
// @name         IMDB: Piratebay link
// @namespace    https://itenium.be/
// @author       Wouter Van Schandevijl
// @match        https://www.imdb.com/
// @grant        none
// ==/UserScript==

// eslint-disable-next-line
var load,execute,loadAndExecute;load=function(a,b,c){var d;d=document.createElement("script"),d.setAttribute("src",a),b!=null&&d.addEventListener("load",b),c!=null&&d.addEventListener("error",c),document.body.appendChild(d);return d},execute=function(a){var b,c;typeof a=="function"?b="("+a+")();":b=a,c=document.createElement("script"),c.textContent=b,document.body.appendChild(c);return c},loadAndExecute=function(a,b){return load(a,function(){return execute(b)})};
var $;


loadAndExecute('https://code.jquery.com/jquery-latest.js', function() {
  const pirateUrl = 'https://pirateproxy.gdn/search/{searchTerm}/0/99/0';

  function getMovieTitle() {
    const title = $('h1');
    if (title.length !== 1) {
      console.log('Title box changed?');
    }
    if (!title.length) {
      return;
    }

    const fullTitle = title.text().trim();
    const movieTitle = fullTitle.substring(0, fullTitle.length - 7);
    console.log('MovieTitle', movieTitle);
    return movieTitle;
  }


  function addDownloadButton() {
    var widget = $('#star-rating-widget');
    // console.log('hehe', widget);

    const boxStyle = 'height: 42px; position: absolute; right: 190px; top: 9px; width: 100px';
    widget.after(`
      <div style="${boxStyle}">
        <span class="btn2_wrapper" id="piratebay-download">
          <a class="rec_next btn2 medium btn2_text_on" title="Looks nice, take me to the bay!">
            <span class="btn2_text">Download »</span>
          </a>
        </span>
      </div>
    `);
    return widget;
  }


  const widget = addDownloadButton();
  $('#piratebay-download', widget.parent()).on('click', function() {
    const movieTitle = getMovieTitle().replace(/[^0-9a-zA-Z]+/, '');
    const searchTerm = encodeURI(movieTitle);
    const url = pirateUrl.replace('{searchTerm}', searchTerm);

    console.log('getting', url);
    window.open(url);
  });
});
