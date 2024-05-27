import isValidate from './validate.js';
import { todos } from './global_var.js';






// 새로운 할 일을 추가하는 함수
function insertTodoData() {
  // 1. 입력한 텍스트 읽어오기
  const $todoText = document.getElementById('todo-text');
  const inputText = $todoText.value;

  // 혹시 입력을 안하셨나요? 집에 가세요
  if (!isValidate($todoText)) return;

  // 새 할 일의 아이디 값을 생성하는 함수
  const makeNewId = () =>
    todos.length === 0 ? 1 : todos[todos.length - 1].id + 1;

  // 할 일 데이터 배열에 새로운 할 일 데이터 추가하기

  // todos 배열에 새로운 할일을 객체로 포장해서 추가해야 함
  // 1. 새로운 할 일 데이터를 객체로 만들기
  const newTodo = {
    id: makeNewId(),
    text: inputText,
    done: false,
  };

  // 2. 배열에 추가하기
  todos.push(newTodo);

  // 새로운 할 일 화면에 렌더링하기
  renderNewTodoElement(newTodo);

  $todoText.value = '';
}

export default insertTodoData;