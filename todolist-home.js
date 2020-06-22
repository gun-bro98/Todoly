"use strict";
let friendBtn = document.querySelector("#addFriendBtn");
friendBtn.addEventListener("click", clickAddBtn);
firstPlay();
// 디바이스의 크기를 보려고 할 때 사용하자
// let innerW = window.innerWidth;
// let innerH = window.innerHeight;

// alert(innerW);
// alert(innerH);
//main의 .main부분 함수이다.

//처음에 localStorage에 있는 데이터들을 Todolist-home에 보이게 할 때 사용하는 함수
function firstPlay() {
  let originalBtn = document.querySelector("main .main");
  let count = localStorage.getItem("count");
  //savedLength의 기능은 todolist-add-friend에서 친구를 최대로 추가할 수 있는 횟수다.
  //최대 추가할 수 있는 횟수가 7회여서 savedLength에는 7이 들어가 있다.
  let savedLength = Number(localStorage.getItem("savedLength"));
  for (let c = 0; c < count.length; c++) {
    for (let i = 0; i < savedLength; i++) {
      if (count[c] == i) {
        let item = localStorage.getItem(`friend${i}`);
        if (item != null) {
          let originalData = JSON.parse(item);
          document.querySelector("main .main").innerHTML =
            originalData + originalBtn.innerHTML;
        }
      }
    }
  }
  let del = document.querySelectorAll(".del");
  for (let i = 0; i < del.length; i++) {
    del[i].addEventListener("click", () => {
      remove(i);
    });
  }
}
//보이지 않은 버튼 데이터를 없애주는 함수
function remove(data) {
  let num = localStorage.getItem("count");
  let numArray = num.split("");
  let delAttribute = document.querySelectorAll(".del")[data].getAttribute("id");
  let focusNum = numArray.indexOf(delAttribute);
  numArray.splice(focusNum, 1);
  let numString = numArray.join("");
  localStorage.setItem("count", numString);

  resetPlay(data);
}
//보이는 버튼을 없애주는 함수
function resetPlay(data) {
  let buttonReset = document.querySelectorAll(".del");
  buttonReset[data].parentNode.parentNode.style.display = "none";
}
//article의 .FL부분의 함수이다.
function clickAddBtn() {
  let temp = prompt("친구의 이름을 입력해주세요.", "ex) 박영호");
}
