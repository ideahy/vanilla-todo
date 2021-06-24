/**
 * const, let等の変数宣言
 */

// var val1 = "var変数";
// console.log(val1);

// // var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// var val1 = "var変数を際宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// val2 = "let変数を上書き";
// console.log(val2);

//際宣言は不可
//let val2 = "let変数を際宣言";

// const val3 = "const変数";
// console.log(val3);

// //val3 = "const変数を上書き"

// const val3 = "const変数を再宣言";

// const val4 = {
//   name: "ジャケえ",
//   age: 20,
// };
// console.log(val4);

// val4.name = "ja";
// val4.address = "広島"
// console.log(val4);

// const val5 = ["dog", "cat"];
// val5[0] = "birs";
// val5.push("monkey");
// console.log(val5);

/**
 * テンプレート文字列
 */

// const name = "じゃええ";
// const age = 28;
// //私の名前はじゃええです、年齢は２８歳です

// //従来
// const message1 = "私のなめは" + name + "です" + age + "さいです";
// console.log(message1);

// //テンプレート文字列を用いると
// const message2 = `私のな目は${name}です、年齢は${age}です`;
// console.log(message2);

/**
 * アロー関数
 */

//従来
// function func1(str) {
//   return str;
// }
// const func1 = function (str) {
//   return str;
// };

// console.log(func1("fucn1ですううう"));

// //アロー関数
// const func2 = (str) => str;
// console.log(func2("fucn2ですううう"));

// const func3 = (num1, num2) => num1 + num2;

// console.log(func3(10, 30));

/**
 * 分割代入
 */

// const myProfile = {
//   name: "ジャケえ",
//   age: 28
// };

// const message1 = `名前は${myProfile.name}です、年は${myProfile.age}です`;
// console.log(message1);

// const { name, age } = myProfile;
// const message2 = `名前は${name}です、年は${age}です`;
// console.log(message2);

// const myProfile = ["じゃああ", 28];
// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}です`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `名前は${name}です、年は${age}歳です`;
// console.log(message4);

/**
 * デフォルト値
 */

// const sayHello = (name = "ゲスト") => console.log(`こんにちは${name}さん`);
// sayHello("ジャケえ");

/**
 * スプレッド構文　　...
 */

//配列の展開
// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

//まとめる
// const arr2 = [1,2,3,4,5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

//配列のコピー結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr6)
// console.log(arr4)

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// const arr8 = arr4;
// arr8[0] = 100;
// console.log(arr4);

/**
 * mapやfilterを使った配列の処理
 */

const nameArr = ["田中", "山田", "ジャケえ"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index + 1}番目は${nameArr[index]}でしす`);
// }

// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);

// nameArr.map((name, index) =>
//   console.log(`${index + 1}番目は${name}でしっっそ`)
// );

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(newNumArr);

// const newNameArray = nameArr.map((name) => {
//   if (name === "山田") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArray);

/**
 * 三項演算子
 */

// //ある条件　? true : falseの時
// const val1 = 1 < 0 ? "true" : "false";
// console.log(val1);

// const num = 1300;
// // console.log(num.toLocaleString());

// const formattedNum =
//   typeof num === "number" ? num.toLocaleString() : "数値を入力して";
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? '１００超えてる' : '超えてない';
// }
// console.log(checkSum(30,89));

/**
 * 論理演算子の本当の意味をしろう
 */

//  const flag1 = true;
//  const flag2 = false;

//  if (flag1 || flag2) {
//    console.log('1か2はtrue')
//  }

//  if (flag1 && flag2) {
//   console.log('1かつ2はtrue')
// }

// || は左側がfalseなら右側を返す
// const num = null;
// const fee = num || "金額未設定です";
// console.log(fee);

// && は左側がtrueなら右側を返す
const num2 = null;
const fee2 = num2 && "何かが設定されました";
console.log(fee2);
