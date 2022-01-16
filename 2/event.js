// Event bubbling
const divs = document.querySelectorAll("div");
divs.forEach(function (div) {
  div.addEventListener("click", logEvent);
});
function logEvent(e) {
  console.log(e.currentTarget);
}

//---//

// Event capturing
// const divs = document.querySelectorAll("div");
// divs.forEach(function (div) {
//   div.addEventListener("click", logEvent, { capture: true });
// });
// function logEvent(e) {
//   console.log(e.currentTarget);
// }

//---//

// stopPropagation
// event.stopPropagation()로 막을 수 있으나 긍정적이지는 않다.
// function logEvent(e) {
//   console.log(e.currentTarget);
//   e.stopPropagation();
// }

//---//

// 이런 특성을 이용해 상위 요소에서 하위 요소의 이벤트를 제어할 수 있고 이를 이벤트 위임이라고 한다.
const ul = document.querySelector("ul");

ul.addEventListener("click", function (e) {
  console.log(e.target.tagName);
  if (e.target.tagName === "INPUT") alert("clicked");
});

// // 새 리스트 아이템을 추가하는 코드
var itemList = document.querySelector(".itemList");

var li = document.createElement("li");
var input = document.createElement("input");
var label = document.createElement("label");
var labelText = document.createTextNode(" 이벤트 위임 학습");

input.setAttribute("type", "checkbox");
input.setAttribute("id", "item3");
label.setAttribute("for", "item3");
label.appendChild(labelText);
li.appendChild(input);
li.appendChild(label);
itemList.appendChild(li);
