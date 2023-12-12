type RequiredByKeys2<
  T extends Record<string, any>,
  K extends string = keyof T & string
> = Omit<
  Omit<T, keyof T & K> & {
    [P in K & keyof T]-?: T[P] & {}
  },
  never
>

interface User {
  name?: string
  age?: number
  address?: string
}

interface UserRequiredName {
  name: string
  age?: number
  address?: string
}

interface UserRequiredNameAndAge {
  name: string
  age: number
  address?: string
}

type nr = RequiredByKeys2<User, 'name'>
type nr1 = RequiredByKeys2<User, 'name' | 'unknown'>
type nr2 = RequiredByKeys2<User, 'name' | 'age'>

type Test<T> = T extends true ? 1 : 2
type res = Test<boolean>

type robj = { readonly [key: string]: string }
type robj1 = Readonly<Record<string, unknown>>

type trobj = robj extends robj1 ? 1 : 2

interface Iperson {
  readonly name?: string
  readonly age: number
  readonly sex: string
}

type TNoReadonly<T extends Record<string, any>> = T extends Readonly<infer O>
  ? O
  : never

type TestTNR = Required<TNoReadonly<Iperson>>

export enum cloneType {
  Object = 'Object',
  Array = 'Array',
  Date = 'Date',
  RegExp = 'RegExp',
  Function = 'Function',
  String = 'String',
  Number = 'Number',
  Boolean = 'Boolean',
  Undefined = 'Undefined',
  Null = 'Null',
  Symbol = 'Symbol',
  Set = 'Set',
  Map = 'Map',
  WeakSet = 'WeakSet',
  WeakMap = 'WeakMap'
}

type ExcludeByKeyTest = Omit<
  cloneType,
  Exclude<cloneType, cloneType.Symbol | cloneType.WeakMap>
>

/**
 *
 * @param x 可以是任意类型, 但不能是Date类型
 */
function log<T>(x: Exclude<T, Date>) {
  console.log(x)
}
// log(new Date())

type Watcher<T extends Record<string, any>> = {
  on<K extends keyof T & string>(
    event: `${K}Change`,
    fn: (ow: T[K], nw: T[K]) => void
  ): void
}

function watch<T extends Record<string, unknown>>(params: T): Watcher<T> {
  return {
    on() {}
  }
}

const pw = watch({
  firstName: 'Saoirse',
  lastName: 'Ronan',
  age: 26
})

pw.on('firstNameChange', (ow, nw) => {})

interface ComplexObject {
  mandatory: string
  option1?: number
  option2?: boolean
}

// 获取所有可选字段
// 方式一
type OptionalFields<T extends Record<keyof any, any>> = {
  [K in keyof T as {} extends Pick<T, K> ? K : never]?: T[K]
}
// 方式二
type OptionalFields1<T extends Record<keyof any, any>> = {
  [K in keyof T as Omit<T, K> extends T ? K : never]?: T[K]
}
// 方式三
type OptionalFields2<
  T extends Record<keyof any, any>,
  K extends keyof T = keyof T
> = Pick<T, K extends K ? ({} extends Pick<T, K> ? K : never) : never>

type TestRequire = Required<ComplexObject>
type TestOptionkey =
  ComplexObject['option1'] extends Required<ComplexObject>['option1'] ? 1 : 2 // 2
type Same = number | undefined extends number ? 1 : 2 // 2

type t6 = Omit<{ a: number; b: number } & { a: string; c: string }, never> // { a: 1 | 'zss' }
