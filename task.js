// Задание 1

const element = document.createElement('div')
element.className = ('outer');

document.body.appendChild(element)
element.textContent = 'Этот элемент создан при помощи DOM API';

// Задание 2

var innerDiv = document.createElement('div');
innerDiv.className = ('inner');

const outer = document.querySelector('.outer')

outer.appendChild(innerDiv);
innerDiv.textContent = 'Этот элемент тоже создан при помощи DOM API';

// Задание 3

element.style.color = 'red';

// Задание 4

outer.addEventListener('click', function () {
  console.log('Этот текст говорит о том, что я всё сделал правильно')
});

// Задание 5

const link = document.createElement('a')
link.className = ('link')
link.setAttribute('href', 'https://loftschool.com')
link.textContent = 'Это ссылка!'

document.body.appendChild(link)
var HREF = link.getAttribute('href');
link.addEventListener('click', function () {
  event.preventDefault();
  console.log('Я кликнул на ссылку' + ' ' + HREF);
});

// Задание 6 

const input = document.createElement('input')
input.id = ('myForm')
document.body.appendChild(input)

const button = document.createElement('button')
button.id = ('sendButton')
document.body.appendChild(button)
button.textContent = 'Отправить'

const myForm = document.querySelector('#myForm');
const sendButton = document.querySelector('#sendButton');

sendButton.addEventListener('click', function(event) {
  event.preventDefault();
  console.log(myForm.value);
})