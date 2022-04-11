'use strict'

$(document).ready(function () {

    $('.header__burger').click(function () {
        $(this).toggleClass('open');
        $('.header__menu').toggleClass('open');
        $('body').toggleClass('lock');
    });

    $('.header__search').click(function () {
        $('.header').addClass('search-open');
        $('.header__search').addClass('open');
    });

    $('.header__search-close').click(function () {
        $('.header').removeClass('search-open');
        $('.header__search').removeClass('open');
    });

});