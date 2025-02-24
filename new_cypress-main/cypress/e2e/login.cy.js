describe('Проверка авторизации', function () {
  beforeEach('Начало теста', function () {
    cy.visit('/');
    cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');
      });
      afterEach('Конец теста', function () {
        cy.get('#messageHeader').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
       });
it('Верный пароль и верный логин', function () {

  cy.get('#mail').type('german@dolnikov.ru');
  cy.get('#pass').type('iLoveqastudio1');
  cy.get('#loginButton').click();
  cy.get('#messageHeader').contains('Авторизация прошла успешно');

})

it('Восстановление пароля', function () {

   cy.get('#forgotEmailButton').click();
   cy.get('#mailForgot').type('german@dolnikov.ru');
   cy.get('#restoreEmailButton').click();
  cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
 
})

it('Не верный пароль и верный логин', function () {

  cy.get('#mail').type('german@dolnikov.ru');
  cy.get('#pass').type('iLoveqstudio1');
  cy.get('#loginButton').click();
  cy.get('#messageHeader').contains('Такого логина или пароля нет');
 
})

it('Верный пароль и не верный логин', function () {
  
   cy.get('#mail').type('germn@dolnikov.ru');
   cy.get('#pass').type('iLoveqastudio1');
  cy.get('#loginButton').click();
  cy.get('#messageHeader').contains('Такого логина или пароля нет');
  
})

it('Верный пароль и логин без @', function () {
  
   cy.get('#mail').type('germandolnikov.ru');
   cy.get('#pass').type('iLoveqastudio1');
  cy.get('#loginButton').click();
  cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
 
})

it('Верный пароль и сторочныйми буквами логин', function () {
 
  cy.get('#mail').type('GerMan@Dolnikov.ru');
  cy.get('#pass').type('iLoveqastudio1');
  cy.get('#loginButton').click();
  cy.get('#messageHeader').contains('Авторизация прошла успешно');
 

})
})