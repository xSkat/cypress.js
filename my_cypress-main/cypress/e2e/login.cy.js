import * as data from "../helpers/default_data.json"
import * as loc from "../locators/main_page.json"
import * as locpas from "../locators/recovery_password_page.json"
import * as locres from "../locators/result_page.json"


describe('Проверка авторизации', function () {

    beforeEach('Начало теста', function () {
        cy.visit('/'); // заходим на сайт
          });



   afterEach('Конец теста', function () {
         cy.get(locres.title).should('be.visible');// проверка видимости уведомления от сайта клиенту
         cy.get(locres.close).should('be.visible');// есть крестик и он виден пользователю
         cy.get(locres.close).click()// закрываем уведомление об авторизации
         });

       


   it('Правильный логин и правильный пароль', function () { 
         cy.get(loc.email).type(data.login);//нашли поле имейл, ввели верный имейл
         cy.get(loc.password).type(data.password);//нашли поле пароль и ввели верный пароль
         cy.get(loc.login_button).click();// нажал кнопку войти
         cy.get(locres.title).contains('Авторизация прошла успешно');//проверяем, что авторизация успешна и мы видим конкретный текст
     });
 

   it('Восстановить пароль', function () {
         cy.get(loc.fogot_pass_btn).click();// нажал "забыл пароль"
         cy.get(locpas.title).contains('Восстановите пароль');// проверяю заголовок
         cy.get(locpas.email).type(data.login);//нашли поле имейл, ввели верный имейл
         cy.get(locpas.send_button).click();// нажал отправить код
         cy.get(locres.title).contains('Успешно отправили пароль на e-mail');// проверил получение пользователем сообщения, что операция прошла успешно
     })
 

   it('Правильный логин и НЕправильный пароль', function () {
         cy.get(loc.email).type(data.login);//нашли поле имейл, ввели верный имейл
         cy.get(loc.password).type('asadadawdawds');//нашли поле пароль и ввели неверный пароль
         cy.get(loc.login_button).click();// нажал кнопку войти
         cy.get(locres.title).contains('Такого логина или пароля нет');//проверяем, что авторизация успешна и мы видим конкретный текст
     });
 
 
   it('Неправильный логин и правильный пароль', function () {
        cy.get(loc.email).type('sdf43w@dolnikov.ru');//нашли поле имейл, ввели неверный имейл
        cy.get(loc.password).type(data.password);//нашли поле пароль и ввели верный пароль
        cy.get(loc.login_button).click();// нажал кнопку войти
        cy.get(locres.title).contains('Такого логина или пароля нет');//проверяем, что авторизация успешна и мы видим конкретный текст
    });  
    
    
    it('Логин без @ и правильный пароль', function () {
        cy.get(loc.email).type('germandolnikov.ru');//нашли поле имейл, ввели имейл без @
        cy.get(loc.password).type(data.password);//нашли поле пароль и ввели неверный пароль
        cy.get(loc.login_button).click();// нажал кнопку войти
        cy.get(locres.title).contains('Нужно исправить проблему валидации');//проверяем, что авторизация успешна и мы видим конкретный текст
    });  


    it('Логин заглавными буквами и правильный пароль', function () {
        cy.get(loc.email).type('GerMan@dolnikov.ru');//нашли поле имейл, ввели верный имейл
        cy.get(loc.password).type(data.password);//нашли поле пароль и ввели верный пароль
        cy.get(loc.login_button).click();// нажал кнопку войти
        cy.get(locres.title).contains('Такого логина или пароля нет');//проверяем, что авторизация успешна и мы видим конкретный текст
    });











}) 