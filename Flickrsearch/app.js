$(document).ready(function() {

 var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";


 $('form').submit(function (evt) { //событие сабмит

    var $submitButton = $('#submit'); //создаем переменные для кнопок для будущего удобного обращения
    var $searchField = $('#search');

    evt.preventDefault(); // убираем обычные действие

    $searchField.prop("disabled",true);
    $submitButton.attr("disabled", true).val("searching...."); // убираем возможность нажать на кнопку

    var query = $searchField.val(); // сохраняем значение  инпута (наш запрос)

    $('#photos').html(''); // обнуляем нашу страницу

    $.getJSON(flickerAPI, {
        tags: query,
        format: "json"
      }, function(data){ // начинаем коллбек
      var photoHTML = ''; // создаем кусок html который будет вставлять
      if (data.items.length > 0) { // если в ответе больше 0
        $.each(data.items,function(i,photo) { // то для из элементов в массиве
          photoHTML += '<li class="grid-25 tablet-grid-50">';
          photoHTML += '<a href="' + photo.link + '" class="image">';
          photoHTML += '<img src="' + photo.media.m + '"></a></li>';
        }); // end each
      } else {
        photoHTML = "<p>No photos found that match: " + animal + ".</p>" // а если нет то сорян
      }
      $('#photos').html(photoHTML); // вставляем наш html
      $searchField.prop("disabled", false); // теперь можно нажимать
      $submitButton.attr("disabled", false).val("Search"); // теперь можно нажимать
    }); // end getJSON

  }); // end click

}); // end ready
