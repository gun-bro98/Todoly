let friendBtn = document.querySelectorAll(".friend");

for (let i = 0; i < friendBtn.length; i++) {
  friendBtn[i].addEventListener("click", () => {
    addBttnInfo(i);
  }); //에로우 함수를 이용해서 인수를 받게끔 만듦 원래는 addEventListener은 함수() x 함수 o 밖에 못쓴다.
}

function addBttnInfo(data) {
  let newBtton = document.createElement("button");
  let newI = document.createElement("i");
  let newSpan = document.createElement("span");
  let newH2 = document.createElement("h2");
  let newName = document.createTextNode(
    friendBtn[data].querySelector(".metaData").textContent
  );
  let newXText = document.createTextNode("X");

  newI.setAttribute("class", "fas fa-user-ninja");
  newBtton.appendChild(newI);
  newSpan.appendChild(newName);
  newH2.appendChild(newXText);
  newH2.setAttribute("class", "del");
  newH2.setAttribute("id", data);
  newBtton.appendChild(newSpan);
  newBtton.appendChild(newH2);
  localStorage.setItem(
    `friend${data}`,
    JSON.stringify(`<li><button>${newBtton.innerHTML}</button></li>`)
  );
  //savedLength를 만들어 todoly-home에서 friendBtn의 길이를 이용할 수 있게한다.
  localStorage.setItem("savedLength", friendBtn.length);
  //중복을 없애는 구간
  let count = localStorage.getItem("count");
  if (count != null) {
    for (let i = 0; i < friendBtn.length; i++) {
      if (count[i] != data) {
        localStorage.setItem("count", count + data);
      } else {
        let editedCount = count.slice(0, count.length);
        localStorage.setItem("count", editedCount);
        break;
      }
    }
  } else localStorage.setItem("count", data);
}
