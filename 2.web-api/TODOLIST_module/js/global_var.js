//전역변수를 모아 놓을 파일


// 현재 수정모드에 진입하셨나요?
let isEnterEditMode = false;

// 서버와 통신할 데이터
const todos = [
  {
    id: 1,
    text: '할 일 1',
    done: false,
  },
  {
    id: 2,
    text: '할 일 2',
    done: false,
  },
  {
    id: 3,
    text: '할 일 3',
    done: false,
  },
];

export{isEnterEditMode, todos};