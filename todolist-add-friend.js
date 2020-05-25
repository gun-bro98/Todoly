"use strict";
//todolist-add-friend
const friendBtn = document.querySelector(".friend");
let friendName = "";
//todolist-home
let friendAddBtn = document.querySelector(".friend");
function addFriendBtn() {
  //이 함수는 친구를 클릭할시 todolist-home에 버튼이 생기게 하는 함수이다.

  let icon = '<i class="fas fa-user-ninja"></i>';
  friendAddBtn.textContent =
    "<li><button><span>박영호</span>" + icon + "</button></li>";
}
// friendBtn.addEventListener("click", addFriendBtn); // friendBtn버튼을 누르는 순간에 addFriendBtn함수 실행
