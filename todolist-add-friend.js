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
    `<li><button><i class="fas fa-user-ninja"></i> <span>${friendList[data]}</span><a class = "removeBtn"><h2>X</h2></a></button></li>` +
    sumTag;
  //내가 버튼을 눌렀을 때 저장은 되지만, 다시 친구 추가 버튼을 누르고 친구들을 골라서 눌렀을 때 다시 초기화가 된다.
  //그래서 friendItem을 자바스크립트 객체로 분해해서 더해준다음 다시 JSON문자열 형식으로 만든 것
  //friendItem보다는 friendItem[0], friendItem[1], friendItem[2] .....friendItem[i]를 배열 형식으로 만드는 게 좋은 것 같다.second
  //그러면 하나하나씩 넣고 뺄 수 있다.
  let savedItem = localStorage.getItem("friendItem");
  if (JSON.parse(savedItem) != null) {
    savedItem = JSON.parse(savedItem) + sumTag;
    localStorage.setItem("friendItem", JSON.stringify(savedItem));
    let count = localStorage.getItem("count");
    count = Number(JSON.parse(count));
    count += 1;
    localStorage.setItem("count", count);
  } else {
    localStorage.setItem("friendItem", JSON.stringify(sumTag));
    localStorage.setItem("count", 1);
  }
  // localStorage.setItem("friendItem", JSON.stringify(sumTag));
}
