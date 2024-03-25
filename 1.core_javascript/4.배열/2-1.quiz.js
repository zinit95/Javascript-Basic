

var scores = [83,99,100,57];
var sum = 0; //더하는거 
for(var i = 0; i < scores.length; i++){
  sum += scores[i]; 
}
console.log(sum);

var divide = sum / scores.length; //나누는거 
console.log(divide);

console.log(`총점 : ${sum}점, 평균 : ${divide}`);


