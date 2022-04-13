let width_map, height_map;

ymaps.ready(function () {
    if ($(window).width() > 768) {
        width_map = rem(6.8);
        height_map = rem(6.8);
    } else {
        width_map = rem(4.7);
        height_map = rem(4.7);
    }

    var myMap = new ymaps.Map('map', {
            center: [55.776608, 37.462182],
            zoom: 12,
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Собственный значок метки',
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/map-icon.svg',
            // Размеры метки.
            iconImageSize: [width_map, height_map],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [width_map / 2 * -1, height_map / 2 * -1]
        });

    myMap.geoObjects
        .add(myPlacemark);
});