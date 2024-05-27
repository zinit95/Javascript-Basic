



//import { $btn } from "./getDom.js";
//다른사람과 내 변수명이 일치하여 충돌나는 경우 : ' as ' 로 이름을 변경한다 
import { $btn as $button } from "./getDom.js";
import { clickHandler } from "./event.js";
// 불러올게 하나면 {} 쓸 필요없다
//불러올 변수를 내 마음대로 변경 할 수 있다.
import hahahoho from "./pow.js";


//다른사람과 내 변수명이 일치하여 충돌나는 경우 
const $btn = '123'; //내가 만든 변수 
console.log(`내가 만든 btn : ${$btn}`);
console.log(`불러온 btn :, ${$button}`);

console.log(hahahoho.pow(5));
console.log(hahahoho.add(4,3));

//event.js에서 이벤트 핸들러 등록
$btn.addEventListener('click', clickHandler);






