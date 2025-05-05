'Use strict';
// $(document).ready(function() {
//     // Описания для каждого слайда
//     const descriptions = [
//         {
//             title: "Динамика и мощь M5 F90",
//             text: "BMW M5 F90 - это воплощение динамики и мощи. Разгон до 100 км/ч за считанные секунды, бескомпромиссная управляемость и невероятный звук выхлопа - все это делает M5 F90 настоящим королем дорог."
//         },
//         {
//             title: "Инновации и технологии M5 F90",
//             text: "M5 F90 оснащен самыми передовыми технологиями, включая интеллектуальную систему полного привода M xDrive, адаптивную подвеску и множество других инновационных решений, которые обеспечивают непревзойденный уровень комфорта и безопасности."
//         },
//         {
//             title: "Дизайн и эксклюзивность M5 F90",
//             text: "M5 F90 - это не только мощный и технологичный автомобиль, но и настоящий произведение искусства. Агрессивный и элегантный дизайн, роскошный интерьер и внимание к деталям делают M5 F90 уникальным и эксклюзивным автомобилем."
//         }
//     ];

//     // Функция для обновления описания
//     function updateDescription(index) {
//         $("#m5Description h3").text(descriptions[index].title);
//         $("#m5Description p").text(descriptions[index].text);
//     }

//     // Обработчик события slide.bs.carousel
//     $('#m5Slider').on('slide.bs.carousel', function (e) {
//         let index = $(e.relatedTarget).index();
//         updateDescription(index);
//     });

//     // Инициализация описания для первого слайда
//     updateDescription(0);
// });
/*слайдер*/





/*document.addEventListener('DOMContentLoaded', function() {
    const colorSelect = document.getElementById('colorSelect');
    const wheelSelect = document.getElementById('wheelSelect');
    const carImage = document.getElementById('carImage');
    const selectedColor = document.getElementById('selectedColor');
    const selectedWheels = document.getElementById('selectedWheels');

    colorSelect.addEventListener('change', function() {
        const color = this.value;
        const imagePath = `img/m5_${color}.png`;
        carImage.src = imagePath;
        selectedColor.textContent = this.options[this.selectedIndex].text;
    });

    wheelSelect.addEventListener('change', function() {
        selectedWheels.textContent = this.options[this.selectedIndex].text;
    });
});*/

//наработки на главный экран

/*document.querySelectorAll(".draggable").forEach((elem) => {
    elem.addEventListener("dragstart", (e) => {
        elem.style.opacity = "0.5";
        e.dataTransfer.setData("text", getComputedStyle(elem).backgroundColor);
    });
    elem.addEventListener("dragend", () => {
        elem.style.opacity = "1";
    });
});

kvadrat.addEventListener("dragover", (e) => {
    e.preventDefault();
});

kvadrat.addEventListener("drop", (e) => {
    e.preventDefault();
    const color = e.dataTransfer.getData("text");

    if (!nowcolor) {
        nowcolor = color;
    } else {
        nowcolor = mixColors(nowcolor, color);
    }

    kvadrat.style.backgroundColor = nowcolor;
    info.textContent = `Текущий цвет: ${nowcolor}`;
});

document.querySelectorAll(".draggable").forEach((elem) => {
    elem.addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("text", getComputedStyle(elem).backgroundColor);
    });
});

function hexToRgb(hexColor) {
    // Удаляем символ #, если он есть
    hexColor = hexColor.replace("#", "");

    // Разбираем шестнадцатеричный цвет на составляющие
    const r = parseInt(hexColor.substring(0, 2), 16);
    const g = parseInt(hexColor.substring(2, 4), 16);
    const b = parseInt(hexColor.substring(4, 6), 16);

    return { r: r, g: g, b: b };
}

function mixColors(color1, color2) {
    // Разбираем цвета на компоненты RGB
    let rgb1 = null;
    let rgb2 = null;

    if (color1.startsWith("rgb")) {
        rgb1 = parseRgb(color1);
    } else {
        rgb1 = hexToRgb(color1);
    }

    if (color2.startsWith("rgb")) {
        rgb2 = parseRgb(color2);
    } else {
        rgb2 = hexToRgb(color2);
    }

    const mixed = `rgb(${(rgb1.r + rgb2.r) / 2}, ${(rgb1.g + rgb2.g) / 2}, ${(rgb1.b + rgb2.b) / 2})`;
    return mixed;
}

function parseRgb(rgbColor) {
    const result = rgbColor.match(/\d+/g);
    return {
        r: parseInt(result[0]),
        g: parseInt(result[1]),
        b: parseInt(result[2]),
    };
}*/
