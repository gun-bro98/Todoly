"use strict";
let originalData;
let item;
showDisplay();

function showDisplay() {
  let originalBtn = document.querySelector("main .main");
  item = localStorage.getItem("friendItem");
  if (item != null) {
    originalData = JSON.parse(item);
    document.querySelector("main .main").innerHTML =
      originalData + originalBtn.innerHTML;
  }
  makeInfo();
}

function makeInfo() {
  let remove = document.querySelectorAll(".removeBtn");
  let countRm = localStorage.getItem("friendItem");
  let countRmNum = Number(JSON.parse(countRm));
  for (let i = 0; i < countRmNum; i++) {
    remove[i].addEventListener("click", removeBtn);
  }
}
function removeBtn() {
  localStorage.removeItem();
  showDisplay();
}
