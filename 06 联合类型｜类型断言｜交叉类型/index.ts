// 联合类型
let phone: number | string = '123'
phone = '232300jhlk'
phone = 100

interface People {
  name: string
  age: number
}
interface Man {
  sex: number
}
// 交叉类型
const person = (man: People & Man): void => {
  console.log(man)
}
person({ name: 'lisi', age: 12, sex: 1 })

// 类型断言
let fn = (num: number | string): void => {
  console.log((num as string).length)
}
fn('2234454')
