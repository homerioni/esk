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

const parts_slider = new Swiper('.parts__cards', {
    direction: 'horizontal',

    breakpoints: {
        769: {
            slidesPerView: 4,
        },
        0: {
            slidesPerView: 1.85,
            spaceBetween: rem(1.5),
        },
    },

    pagination: {
        el: '.parts__pagination',
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
                '<div class="parts__scrollbar"></div>' +
                '<div class="' + totalClass + '"></div>';
        },
    },

    navigation: {
        nextEl: '.parts__arrow--right',
        prevEl: '.parts__arrow--left',
    },

    scrollbar: {
        el: ".parts__scrollbar",
    },

    autoplay: {
        delay: 5000,
    },
});

let slide_number, not_image_product_intro = false;
const product_intro_slider = new Swiper('.product-intro__image-block', {
    slidesPerView: 1,

    breakpoints: {
        769: {
            direction: 'vertical',
        },
        0: {
            direction: 'horizontal',
        },
    },

    pagination: {
        el: '.product-intro__pagination',
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
                '<div class="product-intro__scrollbar"></div>' +
                '<div class="' + totalClass + '"></div>';
        },
    },

    scrollbar: {
        el: ".product-intro__scrollbar",
    },

    autoplay: {
        delay: 5000,
    },

    on: {
        beforeInit: function () {
            if (!$('.product-intro__footer-img-box').find('img').length) {
                slide_number = $('.product-intro__img-box').length;
                $('.product-intro__footer-img-box').parent()
                    .html(
                        '<div class="product-intro-next-slide swiper">' +
                        '<div class="swiper-wrapper">' +
                        $('.product-intro__image-block .swiper-wrapper').html() +
                        '</div>' +
                        '</div>'
                    );
                not_image_product_intro = true;
            }
        },

        slideChange: function () {
            if (not_image_product_intro) {
                let next_slide = function () {
                    let slide = product_intro_slider.activeIndex + 1;
                    if (slide === slide_number) {
                        return 0;
                    } else {
                        return slide;
                    }
                }
                product_container_next_slide.slideTo(next_slide());
            }
        },
    },
});

if (not_image_product_intro) {
    const product_container_next_slide = new Swiper('.product-intro-next-slide', {
        direction: 'horizontal',
    });
    product_container_next_slide.slideNext(0);
}

const reviews_slider = new Swiper('.reviews__slider', {
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: rem(3),

    pagination: {
        el: '.reviews__pagination',
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
                '<div class="reviews__scrollbar"></div>' +
                '<div class="' + totalClass + '"></div>';
        },
    },

    navigation: {
        nextEl: '.reviews__arrow--right',
        prevEl: '.reviews__arrow--left',
    },

    scrollbar: {
        el: ".reviews__scrollbar",
    },

    autoplay: {
        delay: 5000,
    },
});