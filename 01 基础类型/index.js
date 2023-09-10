"use strict";
let notANumber = NaN; // NaN
let num = 123; // 123
let infinityNum = Infinity; // Infinity
let decimal = 5; // 5 - 十进制
let hex = 0xf00d; // 61453 - 十六进制
let binary = 0b1010; // 10 - 二进制
let octal = 0o744; // 484 - 八进制
console.log(notANumber);
console.log(num);
console.log(infinityNum);
console.log(decimal);
console.log(hex);
console.log(binary);
console.log(octal);
let btn = true;
// let v1: void = null // 严格模式下会报错
let v2 = undefined;
let n = null;
let a = undefined;
function my() {
    // return 123 //如果有返回值就会报错
}
