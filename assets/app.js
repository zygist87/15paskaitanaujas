/*
$(function() {
  $('ul li').css({
    color: 'purple',
    'font-size': '20px'
  });

var colors = ['yellow', 'blue', 'red', 'purple', 'green'];
function randomNumber(x) {
  return Math.floor(Math.random() * x);
};
$('#colorChanger').on('click', function() {
  $('body').css({
    background: colors[randomNumber(colors.length)]
  });
});
});
*/
/*
  let firstNumber;
  let secondNumber;
  $(function() {
    function getSum(x,y) {
    return x + y;
}
  $('button[type=submit]').on('click', function() {
    firstNumber =Number($('input[name=firstNumber]').val());
    secondNumber = Number($('input[name=secondNumber]').val());
    getSum(firstNumber, secondNumber);
    $('#answer').text(getSum(firstNumber, secondNumber))
  });

});
*/
"use strict";
$.ajax({
  url: 'https://api.chucknorris.io/jokes/random',
  type: "GET"
})
.done(function(data) {
  console.log(data.value);
  $('#randomJoke').text(data.value);
  $('#jokeIcon').attr('src', data.icon_url);
});



$.ajax({
  url: 'https://api.chucknorris.io/jokes/categories',
  type: "GET"
})
.done(function(data) {
console.log(data);
$.each(data, function(index, data) {
  $('select[name=categories]').append('<option>${data}</option>');
})
});
