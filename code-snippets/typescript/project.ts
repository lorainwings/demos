/*
 * @Author: lorain lorainwings@gmail.com
 * @Date: 2022-09-09 15:41:41
 * @LastEditors: lorain lorainwings@gmail.com
 * @LastEditTime: 2022-09-09 16:31:58
 * @FilePath: /demos/code-snippets/typescript/project.ts
 * @Description: 工程化
 */

declare module 'pkg' {
  type Info = {
    name: string;
    age: number;
  }
  const handler: () => string

  export const zhangsan: Info
  export default handler;
}

declare module '*.scss' {
  const content: { [key: string]: any }
  export = content
}


function useState<S>(initialState: S | (() => S)): [S, () => S];
function useState<S>(initialState: (() => S)): [S, () => S];

function useState<S>(initialState: S | (() => S)) {
  return [initialState, () => initialState]
}


const o = {
  a: 'hello',
  b: 'world'
}
// type TypeO = { a: string; b: string; }
type TypeO = typeof o

const b = {
  a: 'hello',
  b: 'world'
} as const
// type TypeB = { readonly a: "hello"; readonly b: "world"; }
type TypeB = typeof b

type test = [1 | 2][number]
type test1 = [{}][number]
type test2 = [{ readonly a: 'A' }, {}, [2, 3]][number]

type IsEqual<A, B> = (<X>() => X extends A ? 1 : 2) extends (<X>() => X extends B ? 1 : 2) ? true : false

type Includes<
  T extends unknown[], U
> = T extends [infer F, ...infer R]
  ? (IsEqual<F, U> extends true
    ? true
    : Includes<R, U>)
  : false
type eq2<T extends any[], U> = T[number] extends T[number]
  ? IsEqual<U, T[number]>
  : never
type eq1 = eq2<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Kars'>
type intest = Includes<[{}], { a: 'A' }>
type int1 = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Kars'>

type Hmm<T> = keyof T extends never ? true : false
type X1 = Hmm<{ a: string }> // false, "a" is a known key
type X2 = Hmm<{}> // true, there are no known keys
type x3 = keyof {}
type X3 = Hmm<object> // true, there are no known keys
type X4 = Hmm<string> // false, there are keys like "toUpperCase"
type X5 = Hmm<
  { a: string } | { b: string }>
type DeepReadonly<T extends Record<string, any>>
  = { readonly [K in keyof T]: DeepReadonly<T[K]> }


type Xm = ({ a: string } | { b: number }) extends Record<string, any> ? 1 : 2
type X7 = 'a' | 'b' | 'c' extends 'a' ? 1 : 2
type t1 = ({ b: 'b' } | { c: 'c' }) & { a: 'a' }
type t2 = ({ a: 'a' } & ({ b: 'b' })) | ({ a: 'a' } & ({ c: 'c' }))
type t3 = t2 extends t1 ? 1 : 2;  // 1


type Chainable = {
  option(key: string, value: any): Chainable & {
    [K in typeof key]: typeof value
  }
  get(): Chainable
}

type Flatten<T> = { [K in keyof T]: T[K] };
declare const a: Chainable

const result1 = a
  .option('foo', 123)
  .option('bar', { value: 'Hello World' })
  .option('name', 'type-challenges')
  .get()

type ts1 = Flatten<typeof result1>

type Last<T extends any[]> = T extends [...infer R, infer L]
  ? L
  : (T extends Array<infer TY>
    ? TY
    : undefined);

type lts = Last<string[]>
const arr: number[] = []

// 使用T extends any 触发TS的类型计算展示
type GetPromiseAllType<T extends readonly any[]> = T extends any
  ? Promise<{
    [K in keyof T]: (T[K] extends Promise<infer V>
      ? V
      : T[K])
  }>
  : never
// 此处使用spread重新得到一个非只读数组
declare function PromiseAll<
  T extends readonly any[]
>(values: readonly [...T]): GetPromiseAllType<T>

type U = 'A' | 'B' | 'C'
type t11 = `${Exclude<U, 'B' | 'C'>}${Exclude<U, 'A' | 'C'>}${Exclude<U, 'A' | 'B'>}`

type KaKb<A, B> = keyof A | keyof B
type Kab<A, B> = keyof (A | B)

type ka1 = KaKb<{ 'a': 1, 'b': 2, 'c': 3 }, { 'b': 1, 'd': 2 }>
type ka2 = Kab<{ 'a': 1, 'b': 2, 'c': 3 }, { 'b': 1, 'd': 2 }>

// type Merge<F extends Record<string, unknown>, S extends Record<string, any>> = {
//   [K in keyof F | keyof S]: K extends keyof S ? S[K] : F[K]
// }
type Merge<
  F extends Record<string, unknown>,
  S extends Record<string, any>
> = Omit<Omit<F, keyof (F | S)> & S, never>
type m1 = Merge<{ 'a': 1, 'b': 2, 'c': 3 }, { 'b': 'm', 'd': 'x' }>


type t<T> = Flatten<T> extends Omit<T, never> ? 1 : 2
type t12 = t<{ 'a': 1, 'b': 2, 'c': 3 }>

type tk = keyof { 'a': 1, 'b': 2, 'c': 3 } & keyof { 'b': 'm', 'd': 'x' }
type t4 = keyof { a: 1, b: 2 } & keyof { a: 2, c: 3 } // 'a'
type t6 = keyof any
type t5 = keyof { a: 1, b: 2 } | keyof { a: 1, c: 2, d: 3 } //
type t7 = Record<string, any> extends {} ? 1 : 2
type t71 = {} extends Record<string, any> ? 1 : 2


type NoUndefined<T> = T extends undefined ? never : T;

type RequiredByKeys<
  T,
  K = keyof T
> = Omit<Omit<T, keyof T & K> & {
  /* 去除值中的 undefined
   * 方式一: T[P] & {}, 也即 NonNullable<T[P]>
   * 方式二: NoUndefined<T[P]>
   * 方式三: T[P] extends infer V ? V extends undefined ? never : V : never
   * 方式四: T[P] extends infer V | undefined ? V : T[P]
   * 方式五: [P in keyof T as P extends K ? P : never]-?: T[P]
   * */
  [P in keyof T & K]-?: T[P] extends infer V | undefined ? V : T[P]
}, never>

type RequiredByKeys1<
  T,
  K = keyof T
> = Omit<Omit<T, keyof T & K> & {
  [P in keyof T as P extends K ? P : never]-?: T[P]
}, never>

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

type _t1 = RequiredByKeys<User, 'name'>
type _t11 = RequiredByKeys1<User, 'name'>
type _t2 = RequiredByKeys<User, 'name' | 'unknown'>
type _t22 = RequiredByKeys1<User, 'name' | 'unknown'>
type _t3 = RequiredByKeys<User, 'name' | 'age'>
type _t33 = RequiredByKeys1<User, 'name' | 'age'>

type Salary = null | undefined | number;
type NonNullable1<T> = T extends null | undefined ? never : T

type T2 = NonNullable<Salary>;
type _tT2 = NonNullable1<Salary>


type FlattenArray<
  F,
  D = 1,
  C extends unknown[] = [unknown]
> = F extends unknown[]
  ? (C['length'] extends D
    ? F
    : (F extends [infer L, ...infer R]
      ? [...FlattenArray<L, D, [...C, unknown]>, ...FlattenArray<R, D, C>]
      : F))
  : [F]

type FlattenDepth<
  T extends Array<unknown>,
  D = 1
> = T extends [infer F, ...infer R]
  ? [...FlattenArray<F, D>, ...FlattenDepth<R, D>]
  : T

type s = [] extends never[] ? 1 : 2


type tu = (string | undefined) & {}

interface Data {
  id: string;
  src: string;
  exist: boolean
}

const images: Array<Data> = []
const item = {} as Data
const index = images.findIndex(image => image.id === item.id)



type Chainable1<T = {}> = {
  option<K extends string, V extends unknown>(k: K extends keyof T ? never : K, v: V): Chainable1<
    (K extends keyof T
      ? Omit<T, K>
      : T)
    & { [P in K]: V }
  >
  get(): T
}

declare const config: Chainable1

const result = config
  .option('foo', 123)
  .option('name', 'type-challenges')
  .option('bar', { value: 'Hello World' })
  .get()

// 期望 result 的类型是：
interface Result {
  foo: number
  name: string
  bar: {
    value: string
  }
}
