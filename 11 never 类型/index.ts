// never 类型通常用于表示永不返回的函数和抛出异常的函数的返回类型。
// 函数返回类型：当一个函数永远不会返回时，可以将其返回类型标注为 never。例如，一个抛出异常的函数的返回类型就是 never。
function throwError(message: string): never {
  throw new Error(message)
}
throwError('err~~')

// 永不结束的循环：当一个循环永远不会结束时，可以将其类型标注为 never。
function infiniteLoop(): never {
  while (true) {
    // 无限循环
  }
}

// 类型保护：never 类型可以用于类型保护。例如，当一个函数的参数类型为 never 时，可以断定该函数是不可达的。
function assertNever(value: never): never {
  throw new Error(`Unexpected value: ${value}`)
}

// 类型推断：当 TypeScript 推断出一个变量的类型为 never 时，通常表示该变量无法具有任何有效的值。
// function unreachableCode(): never {
//   // return 123 // 错误：类型 'number' 不可分配给类型 'never'
// }
