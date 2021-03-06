-Массив(Array) в JavaScript является глобальным объектом, который используется для создания массивов; которые представляют собой высокоуровневые спископодобные объекты:
console.log(!![]) // true
console.log(!![].length) // false

//!--Создание массива
var fruits = ['Яблоко', 'Банан'];
console.log(fruits.length); // 2
Cвойство length объекта, который является экземпляром типа Array, устанавливает или возвращает число элементов этого массива.Длина массива.
//?----------------------------------------------------

//!--Доступ к элементу массива по индексу
var first = fruits[0];
// Яблоко
var last = fruits[fruits.length - 1];
// Банан
//?----------------------------------------------------


//!--Итерирование по массиву
fruits.forEach(function (item, index, array) {
   console.log(item, index);
});
// Яблоко 0
// Банан 1
//?----------------------------------------------------

--Метод map() создает новый массив с результатом вызова указанной функции для каждого элемента массива.

--Метод filter() создает новый массив со всеми элементами, прошедшими проверку, задаваемую в передаваемой функции.

--Метод reduce() применяет функцию reducer к каждому элементу массива(слева - направо), возвращая одно результирующее значение.

--Метод forEach() выполняет указанную функцию один раз для каждого элемента в массиве.

--Метод slice() возвращает новый массив, содержащий копию части исходного массива.

--Метод find() возвращает значение первого найденного в массиве элемента, которое удовлетворяет условию переданному в callback функции.В противном случае возвращается undefined.

--Метод findIndex() возвращает индекс в массиве, если элемент удовлетворяет условию проверяющей функции.В противном случае возвращается - 1.

--Метод reverse() на месте обращает порядок следования элементов массива.Первый элемент массива становится последним, а последний — первым.
//?----------------------------------------------------

//!--Добавление элемента в конец массива
var newLength = fruits.push('Апельсин');
// ["Яблоко", "Банан", "Апельсин"]
//?----------------------------------------------------


//!--Удаление последнего элемента массива
var last = fruits.pop(); // удалим Апельсин (из конца)
// ["Яблоко", "Банан"];
//?----------------------------------------------------


//!--Удаление первого элемента массива
var first = fruits.shift(); // удалим Яблоко (из начала)
// ["Банан"];
//?----------------------------------------------------



//!--Добавление элемента в начало массива
var newLength = fruits.unshift('Клубника') // добавляет в начало
// ["Клубника", "Банан"];
//?----------------------------------------------------


//!--Поиск номера элемента в массиве
fruits.push('Манго');
// ["Клубника", "Банан", "Манго"]
var pos = fruits.indexOf('Банан');
//?----------------------------------------------------



//!--Удаление элемента с определённым индексом
var removedItem = fruits.splice(pos, 1); // так можно удалить элемент
// ["Клубника", "Манго"]
//?----------------------------------------------------



//!--Создание копии массива
var shallowCopy = fruits.slice(); // так можно создать копию массива
// ["Клубника", "Манго"]
//?----------------------------------------------------


//!--Удаление нескольких элементов, начиная с определённого индекса
var vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];
console.log(vegetables);
// ["Капуста", "Репа", "Редиска", "Морковка"]
var pos = 1, n = 2;
var removedItems = vegetables.splice(pos, n);
// так можно удалить элементы, n определяет количество элементов для удаления,
// начиная с позиции(pos) и далее в направлении конца массива.
console.log(vegetables);
// ["Капуста", "Морковка"] (исходный массив изменён)
console.log(removedItems);
// ["Репа", "Редиска"]
//?----------------------------------------------------




//!  Ways to reverse an array:
//?----------------------------------------------------

//*Method number 2:
let b = ['V', 'l', 'a', 'd']

function reverseArray(a) {
   res = [];
   a.forEach(element => {
      res.unshift(element);
   });
   return res;
}

console.log(reverseArray(b));
//?----------------------------------------------------

//*Method number 3:
let b = [1, 2, 3, 4, 5, 6, 7];

function reverseArray(a) {
   res = [];
   for (let i = a.length - 1; i >= 0; i--) {
      res.push(a[i]);
   }
   return res;
}

console.log(reverseArray(b));
//?--------------------------------------------------------


//!Ways to clone an array:

//*Method number 1:
let a = [1, 2, 3, 'a', 'b', 'c']        //! это медленая операция 
let b = JSON.parse(JSON.stringify(a));  //!'этот способ иногда ломает обьекты
console.log(b); //* Этот способ работает правильно и с обычными массисами и с вложенными масивами 
//?----------------------------------------------------


//*Method number 2:
let a = [1, 2, 3, 'a', 'b', 'c']
let b = [...a]  //спред оператор //!есть проблема с вложенными массивами (через вложеные массивы делается ссылание и это меняет старый массив )

console.log(b)
//?---------------------------------------------------

//*Method number 3:
let a = [1, 2, 3, 'a', 'b', 'c']
let b = a.slice();
console.log(b)
//!тоже есть проблема если будете клонировать вложеными массивы 
//?---------------------------------------------------

//*Method number 4:
let a = [1, 2, 3, 'a', 'b', 'c']
let b = [];

for (let i = 0; i < a.length; i++) {
   b[i] = a[i]
}
console.log(b)
//!тоже есть проблема если будете клонировать вложеными массивы 
//?---------------------------------------------------

//*Method number 5:
let a = [1, 2, 3, 'a', 'b', 'c']
let b = a.map(x => x);
console.log(b)
//!тоже есть проблема вложеными 
//?----------------------------------------------------

//*Method number 6:
let a = [1, 2, 3, 'a', 'b', 'c']
let b = a.filter(() => true);
console.log(b)
//!тоже есть проблема  вложеными
//?----------------------------------------------------


//!--Как бы Вы реализовали метод Array.prototype.map?
function map(arr, mapCallback) {
   // проверяем переданные параметры
   if (!Array.isArray(arr) || !arr.length || typeof mapCallback !== 'function') {
      return []
   } else {
      let result = []
      // мы создаем массив с результатами при каждом вызове функции
      // поскольку мы не хотим менять оригинальный массив
      for (let i = 0, len = arr.length; i < len; i++) {
         result.push(mapCallback(arr[i], i, arr))
         // помещаем результаты mapCallback в result
      }
      return result
   }
}
//?----------------------------------------------------