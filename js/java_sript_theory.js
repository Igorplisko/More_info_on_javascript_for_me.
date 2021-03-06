
1. Что такое замыкание ?

   Замыкание когда функция имеет доступ к переменным из вышестоящего скопа и замыкает в себе значение
Ну к примеру функция внутри функции
Функция замыкает к себе значения из вышестоящего скопа!

2. Какая разница между null и undefined ?

   null - это особый объект, потому что typeof null возвращает 'object'.С другой стороны, undefined означает, что переменная не была объявлена или ей не было присвоено значение., т.е.объявленной, но не инициализированной переменной;
функции, которая ничего не возвращает явно, например, console.log(1);
несуществующего свойства объекта! null - это особый объект, потому что typeof null возвращает 'object'.С другой стороны, undefined означает, что переменная не была объявлена или ей не было присвоено значение.






4. Что такое поднятие(Hoisting) ?

   Поднятие — это термин, описывающий подъем переменной или функции в глобальную или функциональную области видимости.

Для того, чтобы понять, что такое Hoisting, необходимо разобраться с тем, что представляет собой контекст выполнения.


0.Что такое шаблонные литералы(Template Literals) ?

   Шаблонные литералы — относительно новый способ создания строк в JS.Шаблонные литералы создаются с помощью двойных обратных кавычек(``):



9. Какие приемы работы с асинхронным кодом в JS Вы знаете ?

   Функции обратного вызова(Callbacks).
      Промисы(Promises).
      Async / await.
Библиотеки вроде async.js, blueprint, q, co.



1. Что такое приведение типов ? какие бывают ?
   (Явное(через конструкторы Boolean(), Number) не явное(+, !  ))





21. Что такое AJAX ?
   AJAX или Asyncronous JavaScript and XML — это набор взаимосвязанных технологий, которые позволяют работать с данными в асинхронном режиме.Это означает, что мы можем отправлять данные на сервер и получать данные с него без перезагрузки веб - страницы.
AJAX использует следующие технологии:
HTML — структура веб - страницы.
   CSS — стили веб - страницы.
      JavaScript — поведение страницы и работа с DOM.
XMLHttpRequest API — отправка и получение данных с сервера.
   PHP, Python, Nodejs — какой - нибудь серверный язык.


   22. В чем разница между spread - оператором и rest - оператором ?
   Операторы spread и rest имеют одинаковый синтаксис("...").Разница состоит в том, что с помощью spread мы передаем или распространяем данные массива на другие данные, а с помощью rest — получаем все параметры функции и помещаем их в массив(или извлекаем часть параметров)

23. Что такое функция обратного вызова(Callback Function) ?

   Функция обратного вызова — это функция, вызов которой отложен на будущее(происходит при некоторых условиях, например, при наступлении события).


   24. Что такое объект arguments ?
   Arguments — это коллекция аргументов, передаваемых функции.Это объект, подобный массиву, у него есть свойство length, мы можем получить доступ к определенному значению с помощью arguments[i], но у него отсутствуют методы forEach, reduce, filter и map.Он позволяет узнать количество параметров функции



29. В чем разница между методами call и apply ?

   Отличие между call и apply состоит в том, как мы передаем аргументы в вызываемой функции.В apply аргументы передаются в виде массива, в call — через запятую.

30. Для чего используется метод Function.prototype.bind ?

   Bind возвращает новую функцию, значением this которой является объект, указанный в качестве первого параметра.В отличие от bind, call и apply сразу же вызывают функцию.