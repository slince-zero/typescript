"use strict";
// number[]
let num = [1, 2, 3];
// Array<number>
let num2 = [1, 2, 3];
let arr = [{ name: 'lisi', age: 1 }];
// function fn(...args: any[]) {
//   console.log(args)
// }
// fn(1, 2, 3)
function fn(args) {
    console.log(args);
}
fn([1, 2, 3]);
