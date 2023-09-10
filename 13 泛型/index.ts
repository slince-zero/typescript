// 动态类型
function xiaoman<T>(a: T, b: T): Array<T> {
  return [a, b]
}

xiaoman(1, 2)
xiaoman(false, true)
xiaoman('1', '2')
xiaoman([1, 2], [3, 4])
