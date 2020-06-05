let friendList = [
  "하동호",
  "김덕주",
  "박영호",
  "김명진",
  "양준석",
  "백정훈",
  "최성용",
];
let friendBtn = document.querySelectorAll(".friend");
let sumTag = "";
for (let i = 0; i < friendBtn.length; i++) {
  friendBtn[i].addEventListener("click", () => {
    addFriendBtn(i);
  }); //에로우 함수를 이용해서 인수를 받게끔 만듦 원래는 addEventListener은 함수() x 함수 o 밖에 못쓴다.
}
function addFriendBtn(data) {
  sumTag =
    `<li><button><i class="fas fa-user-ninja"></i> <span>${friendList[data]}</span></button></li>` +
    sumTag;
  localStorage.setItem("friendItem", JSON.stringify(sumTag));
}
