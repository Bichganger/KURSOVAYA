'Use strict';
// Эффект при скролле
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Плавная прокрутка для якорей
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});


document.addEventListener('DOMContentLoaded', function() {
  // Открытие модального окна при клике на кнопку "Контакты"
  const contactBtn = document.querySelector('.bmw-contact-btn');
  contactBtn.addEventListener('click', function(e) {
    e.preventDefault();
    const modal = new bootstrap.Modal(document.getElementById('contactModal'));
    modal.show();
  });
  
  // Обработка отправки формы
  const contactForm = document.getElementById('contactForm');
  const successAlert = document.getElementById('successAlert');
  
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Проверка обязательных полей
    const requiredFields = ['name', 'phone', 'email'];
    let isValid = true;
    
    requiredFields.forEach(fieldId => {
      const field = document.getElementById(fieldId);
      if (!field.value.trim()) {
        field.classList.add('is-invalid');
        isValid = false;
      } else {
        field.classList.remove('is-invalid');
      }
    });
    
    if (isValid) {
      // Показываем уведомление
      successAlert.classList.remove('d-none');
      
      // Скрываем уведомление через 5 секунд
      setTimeout(() => {
        successAlert.classList.add('d-none');
      }, 5000);
      
      // Очищаем форму (опционально)
      contactForm.reset();
    }
  });
  
  // Убираем ошибки при вводе
  const inputs = contactForm.querySelectorAll('input, textarea');
  inputs.forEach(input => {
    input.addEventListener('input', function() {
      this.classList.remove('is-invalid');
    });
  });
});



// Функция валидации
function validateForm() {
  const phone = document.getElementById('phone').value;
  if (!/^(\+7|8)[\d\s()-]{10,}$/.test(phone)) {
    document.getElementById('phone').focus();
    return false;
  }
  
  const email = document.getElementById('email').value;
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    document.getElementById('email').focus();
    return false;
  }
  
  return true;
}




//наработки на главный экран
document.addEventListener('DOMContentLoaded', function() {
  const partsArea = document.getElementById('partsArea');
  const dropZone = document.getElementById('dropZone');
  const gameArea = document.getElementById('gameArea');
  const finalImageContainer = document.getElementById('finalImageContainer');
  const successMessage = document.querySelector('.success-message');
  const applyMessage = document.getElementById('applyMessage');
  let dropHint = document.querySelector('.drop-hint');
  
  let draggedItem = null;
  let partsCount = document.querySelectorAll('#partsArea .part-item').length;

  // Обработчики для перетаскивания
  document.querySelectorAll('.part-item').forEach(item => {
    item.addEventListener('dragstart', function() {
      draggedItem = this;
      setTimeout(() => this.style.opacity = '0.4', 0);
    });
    
    item.addEventListener('dragend', function() {
      this.style.opacity = '1';
    });
  });

  // Обработчики для зоны сброса
  dropZone.addEventListener('dragover', function(e) {
    e.preventDefault();
    this.classList.add('highlight');
  });
  
  dropZone.addEventListener('dragleave', function() {
    this.classList.remove('highlight');
  });
  
  dropZone.addEventListener('drop', function(e) {
    e.preventDefault();
    this.classList.remove('highlight');
    
    if (draggedItem) {
      // Показываем сообщение о применении
      applyMessage.style.display = 'block';
      successMessage.style.opacity = '0';
      dropHint.style.display='none';
      
      // Имитируем процесс применения детали
      setTimeout(() => {
        applyMessage.style.display = 'none';
        successMessage.style.opacity = '1';
        
        // Удаляем перетащенную деталь
        draggedItem.remove();
        partsCount--;
        
        // Проверяем, все ли детали перемещены
        if (partsCount === 0) {
          setTimeout(() => {
            gameArea.style.display = 'none';
            finalImageContainer.style.display = 'flex';
          }, 1000);
        }
      }, 800);
    }
  });
});

//Карточки
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        card.style.setProperty('--rotate-x', `${rotateX}deg`);
        card.style.setProperty('--rotate-y', `${rotateY}deg`);
    });

    card.addEventListener('mouseleave', () => {
        card.style.setProperty('--rotate-x', '0deg');
        card.style.setProperty('--rotate-y', '0deg');
    });
});

//галерея
document.addEventListener('DOMContentLoaded', function() {
    const galleryTrack = document.querySelector('.gallery-track');
    const galleryItems = document.querySelectorAll('.gallery-item');

    // Функция для дублирования элементов, чтобы создать непрерывную ленту
    function duplicateElements() {
        let trackWidth = 0;
        galleryItems.forEach(item => {
            trackWidth += item.offsetWidth + parseInt(window.getComputedStyle(item).getPropertyValue('margin-left')) + parseInt(window.getComputedStyle(item).getPropertyValue('margin-right'));
        });

        const containerWidth = document.querySelector('.gallery-container').offsetWidth;

        // Дублируем элементы до тех пор, пока ширина ленты не станет больше ширины контейнера
        while (trackWidth < containerWidth * 2) { // Увеличиваем множитель, чтобы лента была достаточно длинной
            galleryItems.forEach(item => {
                const clone = item.cloneNode(true);
                galleryTrack.appendChild(clone);
                trackWidth += item.offsetWidth + parseInt(window.getComputedStyle(item).getPropertyValue('margin-left')) + parseInt(window.getComputedStyle(item).getPropertyValue('margin-right'));
            });
        }
    }

    duplicateElements();
});


/*слайдер*/
const descriptions = [
  {
    title: "Роскошный интерьер BMW M5",
    text: "Инновационный дизайн салона сочетает в себе высококачественные материалы и передовые технологии, создавая непревзойденный комфорт для водителя и пассажиров.",
    features: [
      "Кожа Merino премиум-класса",
      "Индивидуальная подсветка салона",
      "Система климат-контроля 4-х зон",
      "Панорамная стеклянная крыша"
    ]
  },
  {
    title: "Спортивный интерьер M-серии",
    text: "Спортивные сиденья с электрорегулировкой и памятью настроек обеспечивают идеальную поддержку во время динамичной езды.",
    features: [
      "Спортивные сиденья M с подогревом",
      "Отделка карбоновым волокном",
      "Руль M Sport с подрулевыми лепестками",
      "Цифровая приборная панель"
    ]
  },
  {
    title: "Агрессивный экстерьер",
    text: "Узнаваемый дизайн BMW M5 сочетает в себе элегантность и спортивную агрессивность, подчеркивая характер автомобиля.",
    features: [
      "Решетка радиатора M с двойными ламелями",
      "19-дюймовые легкосплавные диски M",
      "Система активного рулевого управления",
      "Аэродинамический комплект M Sport"
    ]
  },
  {
    title: "Динамичные пропорции",
    text: "Спортивный силуэт с удлиненным капотом и покатой крышей подчеркивает динамичный характер BMW M5.",
    features: [
      "Широкие колесные арки",
      "Четырехтрубная система выпуска",
      "LED фары с лазерной технологией",
      "Активные жалюзи радиатора"
    ]
  }
];

// Инициализация карусели с паузой при наведении
const carousel = new bootstrap.Carousel('#bmwCarousel', {
  interval: 5000,
  pause: 'hover',
  wrap: true
});

// Обновление описания при смене слайда
document.getElementById('bmwCarousel').addEventListener('slid.bs.carousel', function (e) {
  const activeIndex = e.to;
  const desc = descriptions[activeIndex];
  
  document.getElementById('description-title').textContent = desc.title;
  document.getElementById('description-text').textContent = desc.text;
  
  const list = document.getElementById('description-list');
  list.innerHTML = '';
  desc.features.forEach(feature => {
    const li = document.createElement('li');
    li.className = 'text-white mb-2';
    li.innerHTML = `<i class="bi bi-check-circle-fill text-primary me-2"></i>${feature}`;
    list.appendChild(li);
  });
});

// Таймер обратного отсчета
function updateTimer() {
  const now = new Date();
  const endOfDay = new Date();
  endOfDay.setHours(23, 59, 59, 999);
  
  const diff = endOfDay - now;
  
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  
  document.getElementById('offer-hours').textContent = hours.toString().padStart(2, '0');
  document.getElementById('offer-minutes').textContent = minutes.toString().padStart(2, '0');
  document.getElementById('offer-seconds').textContent = seconds.toString().padStart(2, '0');
}

setInterval(updateTimer, 1000);
updateTimer();
updateTimer();

//анимация галлереи
document.addEventListener('DOMContentLoaded', function() {
  // Массив фотографий
  const photos = [
    {src: 'img/экс1.png', alt: 'BMW M5 вид спереди'},
    {src: 'img/экс2.png', alt: 'BMW M5 интерьер'},
    {src: 'img/экс3.png', alt: 'BMW M5 боковой вид'},
    {src: 'img/экс4.png', alt: 'BMW M5 двигатель'},
    {src: 'img/экс5.png', alt: 'BMW M5 задний вид'},
    {src: 'img/экс6.png', alt: 'BMW M5 приборная панель'},
    {src: 'img/экс7.png', alt: 'BMW M5 кожаные сиденья'},
    {src: 'img/DeWatermark.ai_1739258977275.png', alt: 'BMW M5 ночной вид'},
    {src: 'img/DeWatermark.ai_1739258980187.png', alt: 'BMW M5 спортивный режим'},
    {src: 'img/DeWatermark.ai_1739258916641.png', alt: 'BMW M5 колесные диски'},
    {src: 'img/part1.jpeg', alt: 'BMW M5 новый ракурс 1'},
    {src: 'img/part2.jpeg', alt: 'BMW M5 новый ракурс 2'},
    {src: 'img/part3.jpeg', alt: 'BMW M5 новый ракурс 3'},
    {src: 'img/part4.jpeg', alt: 'BMW M5 новый ракурс 3'},
    {src: 'img/part5.jpeg', alt: 'BMW M5 новый ракурс 3'},
    {src: 'img/part6.jpeg', alt: 'BMW M5 новый ракурс 3'},
    {src: 'img/part7.jpeg', alt: 'BMW M5 новый ракурс 3'},
    {src: 'img/part8.jpeg', alt: 'BMW M5 новый ракурс 3'}


];
  // Получаем треки
  const leftTrack = document.querySelector('.moving-left');
  const rightTrack = document.querySelector('.moving-right');

  // Функция для создания элемента галереи
  function createGalleryItem(photo, index, inverted) {
    const item = document.createElement('div');
    item.className = `trapezoid-item ${inverted ? 'inverted' : ''}`;
    item.innerHTML = `<img src="${photo.src}" alt="${photo.alt}" class="blur-image">`;
    return item;
  }

  // Заполняем треки
  photos.forEach((photo, index) => {
    // Первый ряд (каждая вторая трапеция перевернута)
    leftTrack.appendChild(createGalleryItem(photo, index, index % 2 !== 0));
    
    // Второй ряд (инвертированный порядок)
    const invertedIndex = photos.length - 1 - index;
    rightTrack.appendChild(createGalleryItem(photos[invertedIndex], invertedIndex, index % 2 === 0));
  });

  // Дублируем элементы для бесшовной анимации
  function duplicateItems() {
    const tracks = document.querySelectorAll('.gallery-track');
    tracks.forEach(track => {
      const items = track.children;
      const itemsCount = items.length;
      
      // Клонируем элементы
      for (let i = 0; i < itemsCount; i++) {
        const clone = items[i].cloneNode(true);
        track.appendChild(clone);
      }
    });
  }

  duplicateItems();
});

// Видеообзор
document.addEventListener('DOMContentLoaded', function() {
  const videoPoster = document.getElementById('videoPoster');
  const videoPlayer = document.getElementById('bmwVideo');
  const playBtn = document.getElementById('playVideoBtn');
  
  // Запуск видео
  function playVideo() {
    videoPoster.style.display = 'none';
    videoPlayer.style.display = 'block';
    videoPlayer.play();
    
    // Добавляем эффект "запуска"
    playBtn.innerHTML = '<span class="d-flex align-items-center justify-content-center"><div class="spinner-border spinner-border-sm me-2"></div> Запуск...</span>';
    setTimeout(() => {
      playBtn.innerHTML = '<span class="d-flex align-items-center justify-content-center"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-pause-fill me-2" viewBox="0 0 16 16"><path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"/></svg> Пауза</span>';
    }, 1500);
  }
  
  videoPoster.addEventListener('click', playVideo);
  playBtn.addEventListener('click', playVideo);
  
  // Обработка окончания видео
  videoPlayer.addEventListener('ended', function() {
    videoPoster.style.display = 'block';
    videoPlayer.style.display = 'none';
    playBtn.innerHTML = '<span class="d-flex align-items-center justify-content-center"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-play-fill me-2" viewBox="0 0 16 16"><path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/></svg> Смотреть снова</span>';
  });
});

//Футер
document.addEventListener('DOMContentLoaded', function() {
  const year = new Date().getFullYear();
  const yearDigits = document.querySelectorAll('.year-counter');
  
  if (yearDigits.length === 2) {
    yearDigits[0].textContent = String(year).charAt(0);
    yearDigits[1].textContent = String(year).charAt(1);
  }
  
  // Эффект при скролле
  window.addEventListener('scroll', function() {
    const footer = document.querySelector('.bmw-footer');
    const scrollPosition = window.scrollY + window.innerHeight;
    const footerPosition = footer.offsetTop + footer.offsetHeight;
    
    if (scrollPosition > footerPosition - 100) {
      footer.style.opacity = '1';
    }
  });
});