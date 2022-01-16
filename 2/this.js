// !node js와 browser js의 this는 서로 다르게 정의됩니다.

// 전역에서 사용되는 this는 전역(global)과 같다.
console.log("전역에서 사용되는 this는 전역(global)과 같다.");
var global = 27; // let, const는 안된다.
console.log(this.global);

// 함수의 this => 함수의 this는 window다.
console.log("함수의 this => 함수의 this는 window다.");
function sum() {
  console.log(this.a + this.b + this.c);
}
var a = 1;
var b = 2;
var c = 3;
sum();

const obj = { a: 2, b: 3, c: 4, sum };
obj.sum();

// codejong
console.log("코딩종");
// !!!!!호출한 놈 === this!!!!! //

// someone이 this임.
console.log("someone이 this임.");
var someone = {
  name: "LeeGyoheon",
  whoAmI: function () {
    console.log(this);
  },
};
someone.whoAmI(); //호출 => someone이 호출한 거임.

// window가 this임.
console.log("window가 this임.");
var myWhoAmI = someone.whoAmI;
console.log(myWhoAmI);
myWhoAmI(); // 호출 => window가 호출한 거임.

// btn이 this임
console.log("btn이 this임");
var btn = document.querySelector("#btn");
btn.addEventListener("click", someone.whoAmI);
btn.addEventListener("click", myWhoAmI);
//btn에 whoAmI를 넘긴것 과 똑같음 => 호출한게 아니니까!(함수를 넘기기만 했을 뿐임.)

// 객체안 객체?
console.log("객체안 객체?");
var objOut = {
  age: 27,
  sayOut: function () {
    console.log(this);
  },
  objIn: {
    weight: 60,
    sayIn: function () {
      console.log(this);
    },
  },
};
// objOut에서 호출된 sayOut의 this는 objOut이다.
objOut.sayOut();
// objIn에서 호출된 sayIn의 this는 objIn이다.
objOut.objIn.sayIn();

// function안 function?
// 결국 함수 선언은 윈도우 객체안에 함수를 선언했다고 볼 수 있다.
console.log("function안 function?");
function funcOut() {
  console.log(this);
  function funcIn() {
    console.log(this);
  }
  funcIn();
}
// 두 경우 모두 window를 this로 받는다.
funcOut();

// 화살표 함수의 this는 자신이 아니라 자신이 사용된 위치를 감싼 정적 범위이다.
// 화살표 함수는 this가 없다.
var arrowObj = {
  age: 27,
  arrowFunc: () => console.log(this),
};

arrowObj.arrowFunc();

// 생활 코딩
console.log("생활코딩");

console.log("함수의 this는 window다.");
function func() {
  if (this === window) {
    console.log("window===this");
  }
}
func();

console.log("객체의 소속인 메소드의 this는 그 객체이다.");
var o = {
  func: function () {
    if (o === this) {
      console.log("o===this");
    }
  },
};
o.func();

console.log("생성자의 호출");
var funcThis = null;

function Func() {
  funcThis = this;
}

var o1 = Func();
if (funcThis === window) {
  console.log("window");
}

var o2 = new Func();
if (funcThis === o2) {
  console.log("o2");
}
