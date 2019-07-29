// ==UserScript==
// @name         fragrantica-clipboard
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  fragrantica clipboard enabler
// @author       Szymon Kaleta
// @include      https://*fragrantica.*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    document.body.oncopy=()=>{return true;};
})();


