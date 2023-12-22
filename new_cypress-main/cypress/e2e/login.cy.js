
describe('Автотесты на форму логина и пароля', function () {
	it('Проверка авторизации', function () {
		 cy.visit('https://login.qa.studio/'); // Зашли на сайт
		 cy.get('#mail').type('german@dolnikov.ru'); // ищу инпут ввода имейла и ввожу правильный логин
		 cy.get('#pass').type('iLoveqastudio1'); // ищу инпут ввода пароля и ввожу правильный пароль
		 cy.get('#loginButton').click(); // клик по кнопке Войти
		 cy.contains('Авторизация прошла успешно').should('be.visible'); // Аторизация прошла успешно 
		 cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик
	 })

	 it('Автотест на проверку логики восстановления пароля', function () {
		cy.visit('https://login.qa.studio/'); // Зашли на сайт
		cy.get('#forgotEmailButton').click(); // Нажал кнопку Забыли пароль
		cy.get('#mailForgot').type('komar.arzamas88@mail.ru'); // ищу инпут ввода имейла и ввожу любой имейл
		cy.get('#restoreEmailButton').click(); // клик по кнопке Отправить код
		cy.contains('Успешно отправили пароль на e-mail').should('be.visible'); // Успешно отправили пароль на e-mail
		cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик

	})
	it('Проверка на негативный кейс авторизации с не правильным паролем:', function () {
		cy.visit('https://login.qa.studio/'); // Зашли на сайт
		cy.get('#mail').type('german@dolnikov.ru'); // ищу инпут ввода имейла и ввожу правильный логин
		cy.get('#pass').type('12345'); // ищу инпут ввода пароля и ввожу не правильный пароль
		cy.get('#loginButton').click(); // клик по кнопке Войти
		cy.contains('Такого логина или пароля нет').should('be.visible'); // Такого логина или пароля нет
		cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик
	})
	it('Проверка на негативный кейс авторизации с не правильным логином:', function () {
		cy.visit('https://login.qa.studio/'); // Зашли на сайт
		cy.get('#mail').type('QAgerman@dolnikov.ru'); // ищу инпут ввода имейла и ввожу не правильный логин
		cy.get('#pass').type('iLoveqastudio1'); // ищу инпут ввода пароля и ввожу правильный пароль
		cy.get('#loginButton').click(); // клик по кнопке Войти
		cy.contains('Такого логина или пароля нет').should('be.visible'); // Такого логина или пароля нет
		cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик
	})	
	it('Проверка на негативный кейс валидации', function () {
		cy.visit('https://login.qa.studio/'); // Зашли на сайт
		cy.get('#mail').type('germandolnikov.ru'); // ищу инпут ввода имейла и ввожу правильный логин без @
		cy.get('#pass').type('iLoveqastudio1'); // ищу инпут ввода пароля и ввожу правильный пароль
		cy.get('#loginButton').click(); // клик по кнопке Войти
		cy.contains('Нужно исправить проблему валидации').should('be.visible'); // Нужно исправить проблему валидации
		cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик

	})
	it('Проверка на приведение к строчным буквам в логине:', function () {
		cy.visit('https://login.qa.studio/'); // Зашли на сайт
		cy.get('#mail').type('GerMan@Dolnikov.ru'); // ищу инпут ввода имейла и ввожу логин GerMan@Dolnikov.ru
		cy.get('#pass').type('iLoveqastudio1'); // ищу инпут ввода пароля и ввожу правильный пароль
		cy.get('#loginButton').click(); // клик по кнопке Войти
		cy.contains('авторизация успешна').should('be.visible'); // авторизация успешна
		cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик
	})	




 })


 