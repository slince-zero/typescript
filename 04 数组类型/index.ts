// number[]
let num: number[] = [1, 2, 3]

// Array<number>
let num2: Array<number> = [1, 2, 3]

// 定义对象数组使用interface
interface A {
  name: string
  age?: number
}
let arr: A[] = [{ name: 'lisi', age: 1 }]

// function fn(...args: any[]) {
//   console.log(args)
// }
// fn(1, 2, 3)
function fn(args: any[]) {
  console.log(args)
}
fn([1, 2, 3])
