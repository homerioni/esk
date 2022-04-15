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
        delay: 5000,
    },
});

const catalog_title_slider = new Swiper('.catalog-title__content', {
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: rem(5),

    pagination: {
        el: '.catalog-title__pagination',
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
                '<div class="catalog-title__scrollbar"></div>' +
                '<div class="' + totalClass + '"></div>';
        },
    },

    navigation: {
        nextEl: '.catalog-title__arrow--right',
        prevEl: '.catalog-title__arrow--left',
    },

    scrollbar: {
        el: ".catalog-title__scrollbar",
    },

    autoplay: {
        delay: 5000,
    },
});

const list_category_slider = new Swiper('.list-category__cards', {
    direction: 'horizontal',

    breakpoints: {
        769: {
            slidesPerView: 4,
            spaceBetween: rem(3),
        },
        0: {
            slidesPerView: 1.1,
            spaceBetween: rem(2),
        },
    },

    pagination: {
        el: '.list-category__pagination',
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
                '<div class="list-category__scrollbar"></div>' +
                '<div class="' + totalClass + '"></div>';
        },
    },

    navigation: {
        nextEl: '.list-category__arrow--right',
        prevEl: '.list-category__arrow--left',
    },

    scrollbar: {
        el: ".list-category__scrollbar",
    },

    autoplay: {
        delay: 5000,
    },

    on: {
        init: () => {
            if ($('.list-category__item').length <= 4 && $(window).width() > 768) {
                $('.list-category__nav-block').css('display', 'none');
            }
        },
    }
});