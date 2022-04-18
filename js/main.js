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
        $('body').addClass('lock');
    });
    $('.header__search-close').click(function () {
        $('.header').removeClass('search-open');
        $('.header__search').removeClass('open');
        $('body').removeClass('lock');
    });

    // Popup callback
    $('.popup-callback').click(() => {
        $('.modal-callback')
            .css('display', 'flex')
            .hide()
            .fadeIn();
    });
    $('.modal-callback__form').submit(function () {
        $('.modal-callback').addClass('second');
    });
    $('.modal-callback__close').click(() => {
        $('.modal-callback')
            .hide()
            .removeClass('second')
            .find('.modal-callback__input').val('');
    });
    $('.modal-callback__bg').click(() => {
        $('.modal-callback')
            .hide()
            .removeClass('second')
            .find('.modal-callback__input').val('');
    });

    // Catalog category open
    $('.catalog__category-title').click(function () {
        $(this).toggleClass('open');
        $('.catalog__category-list').slideToggle();
    });

    // Custom checkbox
    $('.cart__label-checkbox').click(function () {
        if ($(this).find('input').prop('checked')) {
            $(this).addClass('check');
        } else {
            $(this).removeClass('check');
        }
    });

    // Portfolio адрес
    $('.portfolio__item').hover(function () {
        $(this).find('.portfolio__address').slideDown(250);
    }, function () {
        $(this).find('.portfolio__address').slideUp(250);
    });

    // Reviews read-all
    $('.reviews__read-all').click(function () {
        $(this).hide();
        $('.reviews__item-review').css('display', 'block');
    });

});