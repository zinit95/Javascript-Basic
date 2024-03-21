


var x = +prompt('첫번째 숫자');
var y = +prompt('두번째 숫자');

// x ~ y 까지의 누적합
var total = 0;

var i = x;

while (i <= y) {
  total += i;
  i++;
}
alert(`${x} ~ ${y}의 누적합: ${total}`);









