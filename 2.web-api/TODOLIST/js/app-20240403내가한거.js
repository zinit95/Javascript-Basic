const $addBtn = document.getElementById("add");
const $todoText = document.getElementById("todo-text");
const $ul = document.querySelector(".todo-list");
const $li = document.querySelector(".todo-list-item");
const $spanText = document.querySelector(".text");
//const $lavel = document.querySelectorAll(".checkbox");
const $lavel = [...document.querySelectorAll(".checkbox")];
const $first = $li.firstElementChild;
const intText = $todoText.value;
var checkboxesInput = document.querySelectorAll('input[type="checkbox"]');

$addBtn.addEventListener("click", function (e) {
  e.preventDefault();

  const intText = $todoText.value;

  if (intText === "") {
    $todoText.placeholder = "필수 입력사항입니다!!!!!!!!!!!";
    document.querySelector(".todo-insert").style.background = "red";
    $todoText.addEventListener("click", function () {
      $todoText.placeholder = "할 일을 입력하세요";
      document.querySelector(".todo-insert").style.background = "#495057";
    });
    return;
  }

  const $newLi = document.createElement("li");
  //const $newSpan = document.createElement('span');
  $newLi.textContent = intText;
  $newLi.classList.add("todo-list-item");
  $newLi.innerHTML = `
      <label class="checkbox">
          <input type="checkbox">
          <span class="text">${intText}</span>
      </label>
      <div class="modify">
          <span class="lnr lnr-undo"></span>
      </div>
      <div class="remove">
          <span class="lnr lnr-cross-circle"></span>
      </div>
  `;
  $ul.appendChild($newLi);
  $todoText.value = "";
  //console.log(e);
});

//라벨 체크했을 때 span 텍스트 색상 변경 및 밑줄 그어지게 하는거임
$lavel.forEach((lavelCheckbox) => {
  lavelCheckbox.addEventListener("click", () => {
    lavelCheckbox.classList.add("checked");
  });
});






