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
      originalBtn.innerHTML + originalData;
  }
}
