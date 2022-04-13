/*
const reviews_slider = new Swiper('.reviews__slider', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 50,
    breakpoints: {
        0: {},
    },
    pagination: {
        el: '',
        type: '',
    },
    navigation: {
        nextEl: '',
        prevEl: '',
    },
    autoplay: {
    },
});
*/

// Пересчет rem в px для swiper
const rem = function (rem) {
    if ($(window).width() > 768) {
        return 0.005208335 * $(window).width() * rem;
    } else {
        // где 375 это ширина моб версии макета
        return (100/414) * (0.1 * $(window).width()) * rem;
    }
}

const main_intro_slider = new Swiper('.main-intro', {
    direction: 'horizontal',
    slidesPerView: 1,

    pagination: {
        el: '.main-intro__pagination',
        type: 'fraction',
        formatFractionCurrent: function (number) {
            if (number < 10) {
                return '0' + number;
            } else {
                return number;
            }
        },
        formatFractionTotal: function (number) {
            if (number < 10) {
                return '0' + number;
            } else {
                return number;
            }
        },
        renderFraction: function (currentClass, totalClass) {
            return '<div class="' + currentClass + '"></div>' +
                '<div class="main-intro__scrollbar"></div>' +
                '<div class="' + totalClass + '"></div>';
        },
    },

    navigation: {
        nextEl: '.main-intro__arrow--right',
        prevEl: '.main-intro__arrow--left',
    },

    scrollbar: {
        el: ".main-intro__scrollbar",
    },

    autoplay: {
        delay: 7000,
    },
});

const competed_main_slider = new Swiper('.completed__slider--main', {
    direction: 'horizontal',

    breakpoints: {
        769: {
            slidesPerView: 3.5,
            spaceBetween: rem(4),

            grid: {
                rows: 2,
                fill: 'row',
            },
        },

        0: {
            slidesPerView: 1.1,
            spaceBetween: rem(2),
        },
    },

    pagination: {
        el: '.completed__pagination',
        type: 'fraction',
        formatFractionCurrent: function (number) {
            if (number < 10) {
                return '0' + number;
            } else {
                return number;
            }
        },
        formatFractionTotal: function (number) {
            if (number < 10) {
                return '0' + number;
            } else {
                return number;
            }
        },
        renderFraction: function (currentClass, totalClass) {
            return '<div class="' + currentClass + '"></div>' +
                '<div class="completed__scrollbar"></div>' +
                '<div class="' + totalClass + '"></div>';
        },
    },

    navigation: {
        nextEl: '.completed__arrow--right',
        prevEl: '.completed__arrow--left',
    },

    scrollbar: {
        el: ".completed__scrollbar",
    },

    autoplay: {
        delay: 7000,
    },
});