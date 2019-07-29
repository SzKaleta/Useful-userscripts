// ==UserScript==
// @name         copy-link
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  copy hyperlink's text to clipboard
// @author       Szymon Kaleta
// @match        *://*/*
// @grant        GM_setClipboard
// @run-at       context-menu
// ==/UserScript==

(function() {
    'use strict';
    var e = document.activeElement;
        if(e.nodeName==="A")
        {
            var text= e.innerText ;
            GM_setClipboard(text, "text");
        }
})();
