// Выбираем все элементы меню с подменю
const menuItems = document.querySelectorAll('.menu > li');

// Добавляем событие клика для каждого элемента
$('.menu > li').on('click', function() {
    $(this).children('.submenu').toggle(); // Переключение видимости подменю
    $('.submenu').not($(this).children('.submenu')).hide(); // Закрытие остальных подменю
});

$(document).on('click', function(event) {
    if (!$(event.target).closest('.menu').length) {
        $('.submenu').hide(); // Закрытие подменю при клике вне меню
    }
});



function countdown(targetDate) {
    const timer = setInterval(function() {
        const now = new Date();
        const difference = targetDate - now;

        if (difference <= 0) {
            clearInterval(timer);
            document.getElementById('countdown').textContent = "Матч уже начался!";
            return;
        }

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        document.getElementById('countdown').textContent = `До следующего матча осталось: ${days} дней, ${hours} часов, ${minutes} минут, ${seconds} секунд`;
    }, 1000);
}

const nextMatch = new Date('2024-12-30T20:00:00'); // Дата следующего матча
countdown(nextMatch);


function animateNews() {
    const newsArray = document.querySelectorAll('.news-item');
    newsArray.forEach((newsItem, index) => {
        setTimeout(() => {
            newsItem.style.opacity = 1;
            newsItem.style.transform = 'translateY(0)';
        }, index * 300); // Добавляем задержку для каждого элемента
    });
}

document.addEventListener('DOMContentLoaded', animateNews);
const newsArray = [
    'Казахстан-Данию',
    'Франция-Англия',
    'Финляндия-Словения'
];

function filterNews() {
    const keyword = document.getElementById('keyword').value.toLowerCase();
    const newsContainer = document.getElementById('news');
    newsContainer.innerHTML = ''; // Очищаем новости

    const filteredNews = newsArray.filter(news => news.toLowerCase().includes(keyword));

    filteredNews.forEach(function(newsItem) {
        const p = document.createElement('p');
        p.textContent = newsItem;
        newsContainer.appendChild(p);
    });

    if (filteredNews.length === 0) {
        newsContainer.textContent = 'Новости не найдены';
    }
}

document.getElementById('searchBtn').onclick = filterNews;
window.onload = function() {
    const currentHour = new Date().getHours();
    const header = document.querySelector('h1');
    if (currentHour < 12) {
        header.style.color = 'orange';
    } else if (currentHour < 18) {
        header.style.color = 'blue';
    } else {
        header.style.color = 'purple';
    }
};
