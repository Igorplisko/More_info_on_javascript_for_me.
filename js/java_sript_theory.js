
1. Что такое замыкание ?

   Замыкание когда функция имеет доступ к переменным из вышестоящего скопа и замыкает в себе значение
Ну к примеру функция внутри функции
Функция замыкает к себе значения из вышестоящего скопа!

2. Какая разница между null и undefined ?

   null - это особый объект, потому что typeof null возвращает 'object'.С другой стороны, undefined означает, что переменная не была объявлена или ей не было присвоено значение., т.е.объявленной, но не инициализированной переменной;
функции, которая ничего не возвращает явно, например, console.log(1);
несуществующего свойства объекта










9. Какие приемы работы с асинхронным кодом в JS Вы знаете ?

   Функции обратного вызова(Callbacks).
      Промисы(Promises).
      Async / await.
Библиотеки вроде async.js, blueprint, q, co.