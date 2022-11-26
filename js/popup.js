'use strict'
let Popup = document.querySelector('.popup');
let PopupButton = document.querySelector('.popup__button');
let PopupMenu = document.querySelector('.popup__menu');

PopupButton.addEventListener('click', Popup_visible);

document.addEventListener('click', Popup_close);

function Popup_visible(evt) {
    PopupMenu.classList.toggle('visible');
}

function Popup_close(evt) {
    let InsideMenu = Popup.contains(evt.target);
    if (!InsideMenu) {
        PopupMenu.classList.remove('visible');
    }
}
