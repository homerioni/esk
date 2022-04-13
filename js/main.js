'use strict'

$(document).ready(function () {

    // Маски для input
    $('.mask-phone').mask('+7 (999) 999-99-99');

    // Бургер меню
    $('.header__burger').click(function () {
        $(this).toggleClass('open');
        $('.header__menu').toggleClass('open');
        $('body').toggleClass('lock');
    });

    // Поиск
    $('.header__search').click(function () {
        $('.header').addClass('search-open');
        $('.header__search').addClass('open');
    });
    $('.header__search-close').click(function () {
        $('.header').removeClass('search-open');
        $('.header__search').removeClass('open');
    });

    // Popup callback
    $('.popup-callback').click(() => {
        $('.modal-callback')
            .css('display', 'flex')
            .hide()
            .fadeIn();
    });
    $('.modal-callback__form').submit(() => {
        $('.modal-callback').addClass('second');
    });
    $('.modal-callback__close').click(() => {
        $('.modal-callback')
            .hide()
            .removeClass('second');
    });
    $('.modal-callback__bg').click(() => {
        $('.modal-callback')
            .hide()
            .removeClass('second');
    });

});