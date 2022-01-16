// node js와 browser js의 this는 서로 다르게 정의됩니다.

// 전역에서 사용되는 this는 전역(global)과 같다.
// console.log("전역에서 사용되는 this는 전역(global)과 같다.");
// var global = 27;
// console.log(this.global);

// 함수의 this => 함수의 this는 window다.
// console.log("함수의 this => 함수의 this는 window다.");
// function sum() {
//   console.log(this.a + this.b + this.c);
// }
// var a = 1;
// var b = 2;
// var c = 3;
// sum();

// console.log("호출한 위치에 따라 this는 달라진다.");
// const obj = { a: 2, b: 3, c: 4, sum };
// obj.sum();

// object안의 메서드는 오브젝트가 this다.
// console.log("객체가 this임.");
// var obj1 = {
//   name: "LGH",
//   func1: function () {
//     console.log(this);
//   },
//   func2: function () {
//     console.log(this.name);
//   },
// };

// // obj1.func1();
// // // // OUTPUT: {name: 'LGH', func1: f, func2: f}
// // obj1.func2();
// // // OUTPUT: LGH

// // // window가 this임.
// // console.log("window가 this임.");
// var myWhoAmI = obj1.func1; // var myWhoAmI = function () {console.log(this)}과 같다.
// console.log(myWhoAmI);
// myWhoAmI(); // 호출 => window가 호출한 거임.

// // // btn이 this임
// console.log("btn이 this임");
// var btn = document.querySelector("#btn");
//btn.addEventListener("click", obj1.func1);
//btn.addEventListener("click", myWhoAmI);
// //btn에 whoAmI를 넘긴것 과 똑같음 => 호출한게 아니니까!(함수를 넘기기만 했을 뿐임.)

// // 객체안 객체?
// console.log("객체안 객체?");
// var objOut = {
//   age: 27,
//   sayOut: function () {
//     console.log(this);
//   },

//   objIn: {
//     weight: 60,
//     sayIn: function () {
//       console.log(this);
//     },
//   },
// };
// // objOut에서 호출된 sayOut의 this는 objOut이다.
// //objOut.sayOut();
// // objIn에서 호출된 sayIn의 this는 objIn이다.
// objOut.objIn.sayIn();

// // function안 function?
// // 결국 함수 선언은 윈도우 객체안에 함수를 선언했다고 볼 수 있다.
// console.log("function안 function?");
// function funcOut() {
//   console.log(this);
//   function funcIn() {
//     console.log(this);
//   }
//   funcIn();
// }
// // 두 경우 모두 window를 this로 받는다.
// funcOut();

// // 화살표 함수의 this는 자신이 아니라 자신이 사용된 위치를 감싼 정적 범위이다.
// console.log("화살표 함수는 this가 없다.");
// var arrowObj = {
//   age: 27,
//   arrowFunc: () => console.log(this),
// };

// arrowObj.arrowFunc();

// var arrowObj2 = {
//   age: 27,
//   func: function () {
//     console.log(this);
//     let arrowFunc = () => console.log(this);
//     arrowFunc();
//   },
// };

// arrowObj2.func();
