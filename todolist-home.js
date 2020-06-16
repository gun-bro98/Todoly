"use strict";
firstPlay();

function firstPlay() {
  let originalBtn = document.querySelector("main .main");
  let count = localStorage.getItem("count");
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

function remove(data) {
  let num = localStorage.getItem("count");
  let numArray = num.split("");
  let delAttribute = document.querySelectorAll(".del")[data].getAttribute("id");
  let focusNum = numArray.indexOf(delAttribute);
  numArray.splice(focusNum, 1);
  let numString = numArray.join("");
  localStorage.setItem("count", numString);
  //초기화
  resetPlay(data);
}

function resetPlay(data) {
  let buttonReset = document.querySelectorAll(".del");
  buttonReset[data].parentNode.parentNode.style.display = "none";
}
//2020.6.14
//내가 해야할 것
//중복으로 누를 때 중복으로 저장 안돼야한다.
//삭제 기능이 가능해져야한다.
//삭제 기능을 만들시 count를 이용하자.

//2020. 6.15
//중복 안되게하는 건 성공
//삭제를 어떻게 해야할지 모르겠다....

//2020. 6.16
//성공
