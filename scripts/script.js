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

