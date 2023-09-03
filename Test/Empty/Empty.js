console.log("Привет, мир!");
console.log(2 + 2); // выведет в консоль 4
console.log(2 * 2); // выведет в консоль 4
console.log(2 - 2); // выведет в консоль 0
console.log(2 / 2); // выведет в консоль 1
console.log(2 ** 3); // возведение в степень. выведет в консоль 8 

alert('В чём сила?');


let pages; 
// создали коробку с именем pages, то есть «страницы» 
//После ключевого слова let следует название коробки, то есть имя переменной. Тут есть ограничение: имя нельзя написать на русском или с пробелами.

pages = 210;  

//В созданную ранее коробку pages вы положили значение 210.  Писать let не потребовалось, ведь переменная уже была создана раньше.

let randomNumber = Math.random();
console.log(randomNumber); // например, 0.9752705074780903 
//рандом работает в промежутке от 0 до 1
//то бы изменить промжуток рандома, надо просто умножить на наивысшее число промежутка
let randomNumber = Math.random()*21;
// промежуток от 0 жо 21
//Но дробные числа можно округлить до целых. Для этого как раз есть команда Math.floor(). 
//В круглые скобки она принимает нецелое число и округляет его вниз, то есть отбрасывает все цифры после точки
let randIndex = Math.floor(Math.random() * 6);


let phrases = [
  'отправить другу смешную гифку',
  'посмотреть скидки на авиабилеты',
  'разобраться, о чём поют рэперы',
  'Юрий Дудь',
  'расставить книги на полке по цвету',
  'читать про зарплаты в Сан-Франциско'
];

function getRandomElement(arr) {
  let randIndex = Math.floor(Math.random() * arr.length);
  return arr[randIndex];
}

let button = document.querySelector(".button");
let advice = document.querySelector(".advice");
let phrase  = document.querySelector(".phrase");
let image = document.querySelector(".image");

phrase.textContent = getRandomElement(phrases);

button.addEventListener('click', function () {
    console.log('Счастье не за горами');
}); 


//Чтобы работать с элементами страницы, в JavaScript есть специальный ящик, он называется document. 
//В этом ящике — вся информация о веб-странице: URL-адрес, таблицы стилей, кодировка, гиперссылки, все тексты.
// И да, через document можно получить доступ к управлению любым элементом на странице.
//Помимо ящиков в JavaScript есть инструменты, которыми можно менять всё, что оказалось в ящиках — не только в document.
//Например, инструмент querySelector. Он работает как функция и принимает на вход селектор класса элемента, к которому вы хотите получить доступ:
let photoElement = document.querySelector('.photo');
// доступ к инструментам осуществляется через символ точки
// инструмент querySelector нашёл на странице нужный элемент 

//Так в переменную photoElement попадёт элемент с классом photo. 
//Теперь JavaScript может изменить содержимое элемента, его стиль и поведение.
let button = document.querySelector(".button") //обращение к классу "кнопка". это присваевание элемента из HTML переменной в JS

//Когда элемент выбран, им можно манипулировать.
//Используйте инструмент textContent и замените текст элемента .phrase на случайный элемент массива phrases:

//phrase.textContent = // здесь ваш код 

if (randomElement.length) {}
  

let phrases = [
  { text: 'отправить другу смешную гифку', image: 'https://code.s3.yandex.net/web-code/procrastinate/1.gif' },
  { text: 'посмотреть скидки на авиабилеты', image: 'https://code.s3.yandex.net/web-code/procrastinate/2.png' },
  { text: 'разобраться, о чём поют рэперы', image: 'https://code.s3.yandex.net/web-code/procrastinate/3.png' },
  { text: 'Юрий Дудь', image: 'https://code.s3.yandex.net/web-code/procrastinate/4.png' },
  { text: 'расставить книги на полке по цвету', image: 'https://code.s3.yandex.net/web-code/procrastinate/5.png' },
  { text: 'читать про зарплаты в Сан-Франциско', image: 'https://code.s3.yandex.net/web-code/procrastinate/6.png' },
  { text: 'прочитать новости и ужаснуться в комментариях', image: 'https://code.s3.yandex.net/web-code/procrastinate/7.png' },
  { text: 'попасть в поток грустных песен и вспомнить все ошибки молодости', image: 'https://code.s3.yandex.net/web-code/procrastinate/8.png' },
  { text: 'посмотреть трейлер сериала и заодно первый сезон', image: 'https://code.s3.yandex.net/web-code/procrastinate/9.png' },
  { text: 'проверить непрочитанное в Telegram-каналах', image: 'https://code.s3.yandex.net/web-code/procrastinate/10.png' } 
];

function getRandomElement(arr) {
  let randIndex = Math.floor(Math.random() * arr.length);
  return arr[randIndex];
}

let button = document.querySelector('.button');
let phrase = document.querySelector('.phrase');
let advice = document.querySelector('.advice');
let image = document.querySelector('.image');

button.addEventListener('click', function () {
  let randomElement = getRandomElement(phrases);
  phrase.textContent = randomElement.text;
  image.src = randomElement.image;

  if (randomElement.text.length > 40) {
    advice.style.fontSize = '33px';
  } else {
    advice.style.fontSize = '42px';
  }
});

for (i =0;i<=2;i++){
  smoothly(phrase, 'textContent', phrases[i].text);
  smoothly(image, 'src', phrases[i].image);
}
//------------------------------------------------------------------------------------------- 

