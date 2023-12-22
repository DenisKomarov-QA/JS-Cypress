
describe(' Автотест на покупку нового фото для своего тренера', function () {
	it('Проверка авторизации', function () {
		 cy.visit('https://pokemonbattle.me/login'); // Зашли на сайт
		 cy.get(':nth-child(1) > .auth__input').type('komar.arzamas88@mail.ru'); // Ищу инпут ввода имейла и ввожу правильный логин 
		 cy.get('#password').type('Den693220'); // Ищу инпут ввода пароля и ввожу правильный пароль
		 cy.get('.auth__button').click(); // клик по кнопке Войти
		 cy.contains('Покемоны').should('be.visible');
		 cy.get('.header__btns > [href="/shop"]').click(); // клик по кнопке Магазин
		 cy.get('.shop__list > li').not('.feature-empty').children('.shop__button').eq(0).click();
		 cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4620869113632996'); //ищу инпут ввода номера карты и ввожу карту
		 cy.get(':nth-child(1) > .pay_base-input-v2').type('1225');
		 cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');
		 cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('GERMAN DOLNIKOV');
		 cy.get('.pay-btn').click(); // клик по кнопке Оплатить
		 cy.get('#cardnumber').type('56456');
		 cy.get('.payment__submit-button').click();
		 cy.get('.payment__adv').click(); // вернуться в магазин
		 

		 


 })



 })