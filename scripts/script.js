var uniqueIds = [2, 3, 4, 6, 8, 10, 12, 20, 100];

// Створення випадаючого списку
function createSelect(suffix) {
    var select = document.createElement('select');
    select.id = "numberSelect_k" + suffix;  // Додаємо унікальний id з конкретним суфіксом
    select.name = "number";
    
    // Додаємо опції для вибору кількості кидків
    for (var i = 1; i <= 16; i++) {
        var option = document.createElement('option');
        option.value = i;
        option.text = i;
        select.appendChild(option);
    }
    return select;
}

// Функція для генерації випадкового числа для кидка кубика
function rollDice(sides) {
    return Math.floor(Math.random() * sides) + 1;  // Випадкове число від 1 до sides
}

var popupTimeout;  // Глобальна змінна для таймера
var popup = document.getElementById('popup');
var startTime;  // Змінна для зберігання часу показу спливаючого вікна
var elapsedTime = 0;  // Час, який пройшов від показу спливаючого вікна
var remainingTime = 7000;  // Залишковий час

// Функція для показу спливаючого вікна
function showPopup(rolls, total) {
	var rolledNumbersDiv = document.getElementById('rolled_numbers');
	var totalDiv = document.getElementById('total');

	rolledNumbersDiv.innerHTML = 'Rolled numbers: ' + rolls.map(roll => `[${roll}]`).join(' + ');
	totalDiv.innerHTML = 'Total points: ' + total;

	popup.style.display = 'block';  // Показуємо спливаюче вікно

	if (popupTimeout) clearTimeout(popupTimeout);  // Якщо є активний таймер, очищаємо його

	elapsedTime = 0;  // Очищуємо час, що пройшов
	remainingTime = 7000;  // Скидаємо залишковий час

	startTime = Date.now();  // Фіксуємо час початку показу

	// Функція для приховування вікна
	function hidePopup() {
			popup.style.display = 'none';
	}

	// Встановлюємо таймер на 7 секунд
	popupTimeout = setTimeout(hidePopup, remainingTime);

	// Зупиняємо таймер при наведенні мишки
	popup.onmouseenter = function() {
			clearTimeout(popupTimeout);
			elapsedTime = Date.now() - startTime;  // Фіксуємо час, що пройшов до наведеного мишки
	};

	// Відновлюємо таймер при відведенні мишки
	popup.onmouseleave = function() {
			remainingTime = 7000 - elapsedTime;  // Оновлюємо залишковий час
			startTime = Date.now();  // Оновлюємо час старту
			popupTimeout = setTimeout(hidePopup, remainingTime);  // Відновлюємо таймер
	};

	// Закриваємо вікно при кліку на нього
	popup.onclick = function() {
			clearTimeout(popupTimeout);  // Зупиняємо таймер
			hidePopup();  // Приховуємо вікно
	};
}

// Знайдемо всі елементи <li> у списку
var listItems = document.querySelectorAll('#list_of_dices li');

// Для кожного <li> додаємо <select> на початок з унікальним id з масиву uniqueIds
listItems.forEach(function(li, index) {
    if (index < uniqueIds.length) {  // Перевіряємо, чи є ще доступні унікальні суфікси
        var select = createSelect(uniqueIds[index]);  // Використовуємо унікальний суфікс з масиву
        li.prepend(select);  // Додаємо селектор на початок <li>
        
        // Додаємо обробник події для <li>
        li.addEventListener('click', function() {
            var selectedValue = select.value;  // Отримуємо кількість кидків із селектора
            var sides = uniqueIds[index];  // Отримуємо кількість сторін кубика з uniqueIds
            var total = 0;  // Змінна для підсумку очок
            var rolls = [];  // Масив для зберігання результатів кожного кидка
            
            // Кидаємо кубик 'selectedValue' раз і зберігаємо результати в масив rolls
            for (var i = 0; i < selectedValue; i++) {
                var roll = rollDice(sides);  // Генеруємо випадкове число
                rolls.push(roll);  // Зберігаємо результат кидка в масив
                total += roll;  // Додаємо випадкове число до загальної суми
            }
            
            // Показуємо спливаюче вікно з результатами
            showPopup(rolls, total);
        });
    }
});


document.getElementById('arrow').addEventListener('click', function() {
	// Додаємо або забираємо клас active для елементу <main> та для стрілки
	document.getElementById('main').classList.toggle('active');
	document.getElementById('arrow').classList.toggle('active');
	let contentId = `content-about_the_world`;
	let content = document.getElementById(contentId);
	content.style.display = "none";

	contentId = `content-books`;
	content = document.getElementById(contentId);
	content.style.display = "none";


	contentId = `content-dices`;
	content = document.getElementById(contentId);
	content.style.display = "none";
});

document.getElementById('about_the_world').addEventListener('click', function() {
	const contentId = `content-${this.id}`;
	const content = document.getElementById(contentId);
		if (content.style.display === "none" || content.style.display === "") {
			content.style.display = "block"; // Показати контент
		} else {
			content.style.display = "none"; // Сховати контент
		}
});
document.getElementById('books').addEventListener('click', function() {
	const contentId = `content-${this.id}`;
	const content = document.getElementById(contentId);
		if (content.style.display === "none" || content.style.display === "") {
			content.style.display = "block"; // Показати контент
		} else {
			content.style.display = "none"; // Сховати контент
		}
});

document.getElementById('dices').addEventListener('click', function() {
	const contentId = `content-${this.id}`;
	const content = document.getElementById(contentId);
		if (content.style.display === "none" || content.style.display === "") {
			content.style.display = "block"; // Показати контент
		} else {
			content.style.display = "none"; // Сховати контент
		}
});

document.querySelectorAll('.unlock-content').forEach(item => {
item.addEventListener('click', function() {
		const url = this.getAttribute('data-url'); // Витягуємо URL зі змінної data-url
		window.location.href = url; // Перенаправляємо користувача на нову сторінку
});
});



document.querySelectorAll('.lock-content').forEach(item => {
	item.addEventListener('click', function() {
			const modal = document.getElementById('passwordModal');
			modal.style.display = 'flex';

			document.getElementById('modal-password').value = '';
			
			const targetUrl = this.getAttribute('data-url');

			// Закриваємо модальне вікно при кліку на кнопку закриття
			document.querySelector('.close').addEventListener('click', function() {
					modal.style.display = 'none';
			});

			document.getElementById('access-password').addEventListener('click', function() {
				const access = document.getElementById('accessModal');
				access.style.display = 'none';
				window.location.href = targetUrl;
				
			});
			
			document.getElementById('alert-password').addEventListener('click', function() {
			const access = document.getElementById('alertModal');
			access.style.display = 'none';
			});

			// Перевіряємо пароль
			document.getElementById('submit-password').addEventListener('click', function() {
					const enteredPassword = document.getElementById('modal-password').value;
					modal.style.display = 'none'; 
					if (enteredPassword === 'lol') {
							const access = document.getElementById('accessModal');
							access.style.display = 'flex';
					} else {
							const alert = document.getElementById('alertModal');
							alert.style.display = 'flex';
					}
			});
			
	});
});

