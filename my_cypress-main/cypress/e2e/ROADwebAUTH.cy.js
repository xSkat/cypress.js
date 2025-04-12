import * as data from "../helpers/Log & pass.json"
import * as loc from "../locators/My_locators.json"

describe('Полный путь', function () {

    
   it('Правильный логин и правильный пароль', function () { 
        cy.visit('https://pokemonbattle.ru/login'); // заходим на сайт
        cy.get(loc.email).type(data.login);// вводим логин
        cy.get(loc.password).type(data.password);// вводим пароль 
        cy.get(loc.sing_in).invoke('css', 'color','rgb(237, 111, 45)'); // проверяем наличие оранжевой кнопки "Войти" на странице
        cy.get(loc.sing_in).should('be.visible');//кнопка видна пользователю
        cy.get(loc.sing_in).trigger('mouseover').should('have.css', 'color', 'rgb(255, 255, 255)');//навестись мышкой на кнопку и проверить, что цвет кнопки изменился
        cy.get(loc.sing_in).click ();// жмем "Войти"

// Появляемся на странице "Покемоны"
        cy.get(loc.home).should('be.visible');// ждем пока элемент (селектор) станет видимым на странице
        cy.get(loc.home).contains('Покемоны');// Проверяем, что пользователь видит надпись "Покемоны"
        cy.get(loc.home).should('css', 'color','rgb(0, 0, 0)');//Проверяем цвет надписи "Покемоны"

// Карточка тренера
        cy.get('.header_card_trainer').click();// переходим в карточку тренера
        cy.get(loc.chemp).should('be.visible');// ждем пока элемент (селектор) станет видимым на странице
        cy.get(loc.chemp).contains('Чемпион');// проверяем, что мы действительно на странице тренера
        cy.get(loc.chemp).should('css', 'color','rgb(34, 34, 34)')// проверяем цвет надписи

// Перечень аватаров        
        cy.get(loc.avatars).should('be.visible');// проверяем, что элемент (селектор) прогрузился
        cy.get(':nth-child(5) > .k_trainer_in_button_wrapper > .k_trainer_in_button_title_no_desc').contains('Смена аватара');// проверяем, что кнопка правильно называется
        cy.get(loc.avatars).click();// нажимаем на кнопку, переходим к перечню аватаров

        cy.get('.available > button').not('.shop__item.feature-empty.fix_block_cursor').first().click();// Находим все элементы с классом 'availeble'// Исключаем купленные продукты// Берём первый доступный продукт
        
//Страница покупки
        cy.get(loc.payment_page).should('be.visible');// ждем пока элемент (селектор) станет видимым на странице
        cy.get(loc.payment_page).contains('Карта');// проверяем, что мы на странице оплаты

        cy.get('.payment_form_card_form > :nth-child(2) > .payment_form_card_form_input_label').contains('Номер');// проверяем название поля
        cy.get('.payment_form_card_form > :nth-child(2) > .style_1_base_input').type(data.card_number);// вводим номер карты

        cy.get(':nth-child(1) > .payment_form_card_form_input_label').contains('Срок');// проверяем название поля
        cy.get(':nth-child(1) > .style_1_base_input').type(data.card_actual);// вводим срок действия

        cy.get('.payment_form_card_form_inputs > :nth-child(2) > .payment_form_card_form_input_label').contains('Код');// проверяем название поля
        cy.get('.payment_form_card_form_inputs > :nth-child(2) > .style_1_base_input').type(data.card_cvv);// вводим CVV

        cy.get('.payment_form_card_form_input_last > .payment_form_card_form_input_label').contains('Имя');// проверяем название поля
        cy.get('.payment_form_card_form_input_last > .style_1_base_input').type(data.card_name);// вводим имя
        cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();// нажимаем "Оплатить"

   // СМС с кодом для подтверждения оплаты
        cy.get(loc.SMS_page).should('be.visible');// ждем пока элемент (селектор) станет видимым на странице
        cy.get(loc.SMS_page).contains('Подтверждение покупки');// проверяем название окна
        cy.get('.payment_form_card_form_input_label').contains('Код из пуша или СМС');// проверяем название поля
        cy.get('.style_1_base_input').type(data.secure_code);// вводим правильно код из смс
        cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();// нажимаем "Оплатить"


        cy.get(loc.buy_result).should('be.visible');// ждем пока элемент (селектор) станет видимым на странице
        cy.get(loc.buy_result).contains('Покупка прошла успешно');// проверяем, что получили сообщение об успешной транзакции
        cy.get(loc.butt_back).contains('Вернуться в магазин');// проверяем, что кнопка возврата в магазин верно подписана
        cy.get(loc.butt_back).click();// нажимаем "вернуться в магазин"

        cy.get(loc.shop).should('be.visible');// ждем пока элемент (селектор) станет видимым на странице
        cy.get(loc.shop).contains('Магазин');// проверяем, что мы были перенаправлены на страничку Магазина

        });


   




 })
