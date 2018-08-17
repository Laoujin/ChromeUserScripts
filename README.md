Chrome UserScripts
==================

[Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en)
stores the scripts in a Sqlite database. Not very source-controlly. Hence this repository.


Turn on "Developer mode" and use `Load unpacked`:  
```
chrome://extensions/
```

Need to click the refresh button there for any change to have effect!

Now it's vanilla JS and jQuery scripts but could switch to
[Chrome Content Scripts](https://developer.chrome.com/extensions/content_scripts)



Chrome stores the extensions here:  
(Changes made here are ignored/overwritten)  
```
Windows Vista/7/8:
  Chrome  : %LocalAppData%\Google\Chrome\User Data\Default\Extensions\
  Chromium: %LocalAppData%\Chromium\User Data\Default\Extensions\

Linux:
  Chrome  : ~/.config/google-chrome/Default/Extensions/
  Chromium: ~/.config/chromium/Default/Extensions/

Mac OS X:
  Chrome  : ~/Library/Application Support/Google/Chrome/Default/Extensions/
  Chromium: ~/Library/Application Support/Chromium/Default/Extensions/
```

See [Stackoverflow: Manually adding a Userscript to Google Chrome](https://stackoverflow.com/questions/5258989/manually-adding-a-userscript-to-google-chrome/5259212)
for more information.
