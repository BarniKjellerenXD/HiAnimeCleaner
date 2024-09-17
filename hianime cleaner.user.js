// ==UserScript==
// @name         hianime cleaner
// @namespace    http://tampermonkey.net/
// @version      2024-08-27
// @description  a user script for the hianime website that cleans it up for you.
// @author       BarniKjelleren
// @match        https://hianime.to/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=hianime.to
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    document.getElementById("logo").setAttribute("href", "/home")
    document.getElementById("discussion").remove()
    document.querySelector(".share-buttons.share-buttons-home").remove()
    document.getElementById("anime-trending").remove()
    document.getElementById("anime-featured").remove()
    document.querySelector(".block_area-genres").remove()
    document.querySelector(".share-buttons.share-buttons-min").remove()
})();
