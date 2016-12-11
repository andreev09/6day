// var title = document.head.childNodes[7];
// // var random = document.body.childNodes[1].childNodes[3].childNodes[1].childNodes[1].childNodes[9].childNodes[1].childNodes[0];
// console.log(title);
//
// var random = document.getElementById('random'); //возвращает содержимое id
//
// var navigation = document.queryselector
//
// if (result == "Рахим") {
//   console.log('Наконец-то! Я так долго ждал тебя, ' + result + '!');
// } else if (result) {
//   console.log('Привет, ' + result);
// } else {
//   console.log('Вы не ввели свое имя!')
// }

//1 шаг - выделить элемент класса date
// var date = document.queryselector('.date');
// //

var $logo = $('.logo');
var $date = $('.date');

function getDate() {
  var realDate = new Date(); //текущая дата
  //2 получаем дату

  var day = realDate.getDate();
  var month = realDate.getMonth() + 1;
  var year = realDate.getFullYear();

  var hour = ('0' + realDate.getHours()).slice(-2);
  var minutes = ('0' + realDate.getMinutes()).slice(-2);
  var seconds = ('0' + realDate.getSeconds()).slice(-2);

  var dateHtml = day + '/' + month + '/' + year + ' ' + hour + ':' + minutes + ':' + seconds + ' MSC';

  $date.text(dateHtml);
  setInterval(getDate, 1000);
}

$logo.click(getDate);

getDate();
