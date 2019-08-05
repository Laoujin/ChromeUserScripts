Chrome UserScripts
==================

[Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en)
stores the scripts in a Sqlite database. Not very source-controlly. Hence this repository.


## The Scripts

- [IMDB Piratebay link](https://github.com/Laoujin/ChromeUserScripts/tree/master/imdb-piratebay): Add a download button on IMDB.
- [Password Revealer](https://github.com/Laoujin/ChromeUserScripts/tree/master/password-revealer): Add show/hide button next to each password input.

## Install them

Turn on "Developer mode" and use `Load unpacked`:  
```txt
chrome://extensions
```

## Configure them

At `chrome://extensions`, click `Details` and then `Extension options`.

Configure extension shortcuts:  
```txt
chrome://extensions/shortcuts
```

## Suppress Startup Warning

**Option 1**: Switch to Chrome Canary


**Option 2**: [Download policy templates](https://support.google.com/chrome/a/answer/187202?hl=en)  

- Put `policy_templates\windows\admx\chrome.admx` in `c:\windows\policydefinitions`
- Put `policy_templates\windows\admx\[yourlanguage]\chrome.adml` in `c:\windows\policydefinitions\[yourlanguage]\chrome.adml`
- Start `gpedit.msc`
- Go to User Configuration > Administrative Templates > Google Chrome > Extensions
- Open "Configure extension installation whitelist"
- Enable the policy
- Click the "Show..." button

Browse to `chrome://extensions` and add the ids of your UserScripts to the whitelist.
The ID is in the url when opening the extension details.


[Blog post with more information](https://www.ghacks.net/2017/07/04/hide-chromes-disable-developer-mode-extensions-warning/)


## Development

Need to click the refresh button in `chrome://extensions` for any change to have effect!

All scripts are vanilla JS and jQuery scripts but could switch to
[Chrome Content Scripts](https://developer.chrome.com/extensions/content_scripts)

## UserScript info

Chrome stores the extensions here:  
(Changes made here are ignored/overwritten)  
```txt
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
