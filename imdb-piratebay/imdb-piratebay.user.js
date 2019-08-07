// ==UserScript==
// @name         IMDB: Piratebay link
// @author       Wouter Van Schandevijl
// @match        https://www.imdb.com/
// @grant        none
// ==/UserScript==

/* eslint no-console: 0 */

var piratebayUrl = 'https://pirateproxy.bet';

chrome.runtime.sendMessage({ type: 'requestUrl' }, function (response) {
  console.log('CS: received', response);
  piratebayUrl = response;
});



function getMovieTitle() {
  const title = $('h1');
  if (title.length !== 1) {
    console.log('Title box changed?');
  }
  if (!title.length) {
    return;
  }

  const fullTitle = title.text().trim();
  const movieTitle = fullTitle.indexOf('(') !== -1 ? fullTitle.substring(0, fullTitle.length - 7) : fullTitle;
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
  const pirateUrl = piratebayUrl.replace(/\/*$/, '') + '/search/{searchTerm}/0/99/0';
  const movieTitle = getMovieTitle().replace(/[^0-9a-zA-Z ]+/, '');
  const searchTerm = encodeURI(movieTitle);
  const url = pirateUrl.replace('{searchTerm}', searchTerm);

  console.log('getting', url);
  window.open(url);
});
