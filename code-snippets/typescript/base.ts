/*
 * @Author: lorain lorainwings@gmail.com
 * @Date: 2022-08-23 12:14:56
 * @LastEditors: lorain lorainwings@gmail.com
 * @LastEditTime: 2022-09-09 15:41:29
 * @FilePath: /demos/code-snippets/typescript/function.ts
 * @Description: 类型兼容性
 */

/* 第一部分 接口兼容性 */

interface Foo {
  name: string;
  age: number;
}

interface Bar {
  name: string;
  job: string;
}

/* const tmp3: string = null; // 仅在关闭 strictNullChecks 时成立，下同
const tmp4: string = undefined; */

const tmp6: Object = Symbol();

const uniqueSymbolFoo: symbol = Symbol("linbudu")

// 类型不兼容
const uniqueSymbolBar: symbol = uniqueSymbolFoo


function bar(): undefined {
  return;
}

// 返回值
const fna = (): number => 123
const fnb = (): string => 'abc'




// 函数重载

function func(foo: number, bar: true): string;
function func(foo: number, bar?: false): number;
function func(foo: number, bar?: boolean): string | number {
  if (bar) {
    return String(foo);
  } else {
    return foo * 599;
  }
}

const res1 = func(599); // number
const res2 = func(599, true); // string
const res3 = func(599, false); // number

const str: string = "linbudu";

// 从 X 类型 到 Y 类型的断言可能是错误的，blabla
(str as unknown as { handler: () => {} }).handler()


interface AllStringTypes {
  [key: string]: string;
}


const a: AllStringTypes = {
  599: 'hello',
  "123": 'world',
  [598]: "h",
  [Symbol('aaa')]: 'w'
}

/* typeof 获取变量类型 */

const str1 = "linbudu";

const obj = { name: "linbudu" };

const nullVar = null;
const undefinedVar = undefined;

const func1 = (input: string) => {
  return input.length > 10;
}


function test<T>(data: T, keys: (keyof T)[]) { }
interface User {
  username: string
  email?: string
}
test<User>({ username: '' }, ['email'])
// test<User | { foo: string }>({ username: '' }, ['email'])
type uu = (keyof (User | { username: 'aasdaf', foo: string }))[]
let auu: uu = ['username']

type Str = typeof str1; // "linbudu"
type Obj = typeof obj; // { name: string; }
type Null = typeof nullVar; // null
type Undefined = typeof undefined; // undefined
type Func = typeof func1; // (input: string) => boolean

/* ReturnType参数类型必须是any[], 不能是unknown[], 因为参数还要赋给其他类型(unknown办不到) */
type ReturnFunType<T> = T extends (...args: any[]) => infer R ? R : never
type TypeFun = ReturnFunType<typeof func1>



function assert(condition: any, msg?: string): asserts condition is never {
  if (!condition) {
    throw new Error(msg);
  }
}

let name1: any = 'linbudu';
function assertIsNumber(val: any): asserts val is number {
  if (typeof val !== 'number') {
    throw new Error('Not a number!');
  }
}

assertIsNumber(name1);

// number 类型！
name1.toFixed();

type Args = ['a', number] | ['b', string];

type Func1 = (...args: ["a", number] | ["b", string]) => void;

const f11: Func1 = (kind: any, payload: any): void => {
  if (kind === "a") {
    // 仍然是 string | number
    payload.toFixed();
  }
  if (kind === "b") {
    // 仍然是 string | number
    payload.toUpperCase();
  }
};


declare let fx1: number | string | boolean
declare let fxc: number | boolean
fx1 = fxc

declare let jk: {
  name: string;
  age: number;
}
declare let jkc: {
  name: string
  age: number;
  gender: string
}
jk = jkc


abstract class ca {
  log() { }
}

class cb extends ca {
  log(...args: any[]) {
    console.log(args);
  }
}

const pickDatas = { 'a': 1, 'b': '2', 'c': 3 };

type TPickDatas = typeof pickDatas

// type TPick = <T extends Record<string, any>, K extends keyof T>(ob: T, key: K) => T[K]

// function Tpick<T extends object, U extends keyof T>(object: T, ...props: Array<U>): void { };


declare let keys: keyof any

type Result16 = {} extends object ? 1 : 2;
type Result18 = object extends {} ? 1 : 2;

type Result17 = object extends Object ? 1 : 2;
type Result20 = Object extends object ? 1 : 2;

type Result19 = Object extends {} ? 1 : 2;
type Result21 = {} extends Object ? 1 : 2;
type Result46 = any[] extends number[] ? 1 : 2; // 1
type Result47 = number[] extends any[] ? 1 : 2; // 1

function universalAdd<T extends number | bigint | string>(x: T, y: T) {
  return x + (y as any);
}

interface EmptyArr {
  [index: number]: any | never
}

interface NonEmptyArr {
  [index: number]: number
}
type ArrCompare = EmptyArr extends NonEmptyArr ? 1 : 2
type EmptyArrCompare = Array<never> extends number[] ? 1 : 2
type EmptyComare = [] extends [] ? 1 : 2
type EmptyComare0 = [] extends never[] ? 1 : 2
type EmptyComare1 = [] extends Array<never> ? 1 : 2
type EmptyComare2 = never[] extends Array<never> ? 1 : 2
type EmptyComare3 = [] extends never[] ? 1 : 2
type Bo = false & true

/* const arr: [] = []
arr.push(1312) */
type IsAny<A> = 'test' extends 1 & A ? true : false

type IsNever<A> = [A] extends [never] ? true : false

type IsUnknown<A> = unknown extends A ? (IsAny<A> extends false ? true : false) : false


interface IPinfo {
  name: 'dz',
  age: 30,
  info: {
    addr: 'bz',
    married: true,
    object: {
      job: 'cf'
    }
  }
}
//  可以使用extends条件类型来触发深层计算
type IPReadonly<T extends Record<keyof any, any>> =
  any extends any ?
  {
    readonly [K in keyof T]: T[K] extends Record<keyof any, any> ? IPReadonly<T[K]> : T[K]
  }
  : never

declare const zinfo: IPReadonly<IPinfo>

/////
type Exclude1<T, K> = T extends K ? never : T

declare const ex1: Exclude1<1 | 2 | 3 | 4, 2 | 5>
declare const ex2: Exclude<1 | 2 | 3 | 4, 2 | 5>

type Omit1<T, K> = Pick<T, Exclude<keyof T, K>>;
type Omit2<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
// 这里就不能用严格 Omit 了
declare function combineSpread<T1, T2>(obj: T1, otherObj: T2, rest: Omit1<T1, keyof T2>): void;
type Point3d = { x: number, y: number, z: number };
declare const p1: Point3d;
// 能够检测出错误，rest 中缺少了 y
// combineSpread(p1, { x: 10 }, { z: 2 });

type complement<T, U extends T> = T extends U ? never : T

type fun = (arg: string | number, arg1: Number) => void
type fun1 = (arg: string, arg1: number, ...args: any[]) => void

declare let f1: fun
declare let f2: fun1
f2 = f1

//  协变 / 逆变 / 双向协变
// 必需开启ts->strictFunctionTypes才能发现问题


interface IPerson {
  name: string;
  age: number;
}
interface IWang {
  name: string;
  age: number;
  hobbies: string[]
}
declare let person: IPerson
declare let wang: IWang
// wang = person
person = wang

class Animal {
  doAnimalThing(): void {
    console.log("I am a Animal!")
  }
}
class Dog extends Animal {
  doDogThing(): void {
    console.log("I am a Dog!")
  }
}
class Cat extends Animal {
  doCatThing(): void {
    console.log("I am a Cat!")
  }
}
function makeAnimalAction(animalAction: (animal: Animal) => void): void {
  let cat: Cat = new Cat()
  animalAction(cat)
}

function dogAction(dog: Dog) {
  dog.doDogThing()
}

makeAnimalAction(dogAction)

// (x: string)=>unknown | (x: 'liao')=>unknown
type UnionToIntersection<U> =
  (U extends U ? (x: U) => unknown : never) extends (x: infer R) => unknown
  ? R
  : never

type UIa = UnionToIntersection<{ guang: 1 } | { dong: 2 }>

type a = string & 'yuan'


/*
 * 让一个对象的三个已知属性为可选的，那只要把这个对象拆成 A、B 两个对象结构，分别由三个属性和其他属性组成
 */

// 拍平类型
type Flatten<T> = { [K in keyof T]: T[K] };

type PartialSome<T extends Record<keyof any, unknown>, K extends keyof T> = Flatten<K extends any ? ({
  [P in K]?: T[P]
} & {
    [P in Exclude<keyof T, K>]: T[P]
  }) : never>

type PS1 = PartialSome<{ foo: string; bar: number; baz: boolean; }, 'bar'>

type MarkPropsAsOptional<
  T extends object,
  K extends keyof T = keyof T
> = Flatten<Partial<Pick<T, K>> & Omit<T, K>>;

type MarkPropsAsOptionalStruct = MarkPropsAsOptional<{ foo: string; bar: number; baz: boolean; }, 'bar'>;


type TRes = { foo: 'foo'; bar: 'bar'; baz: never; }
type TUnion = TRes[keyof TRes]
type TURes1 = 'foo' | 'bar' | never

type TCondition<Positive, Condition, V1, V2> = Positive extends Condition ? V1 : V2

// 过滤掉函数的属性名
export type ValueTypeFilter<
  T extends object,
  ValueType,
  Positive extends boolean = false
> = {
  [Key in keyof T]-?: T[Key] extends ValueType
  ? TCondition<Positive, true, Key, never>
  : TCondition<Positive, false, Key, never>
}[keyof T];


type IsEqual<T, U> = [T] extends [U] ? ([U] extends [T] ? true : false) : false
type StrictConditional<V, C, R, S> = IsEqual<V, C> extends true ? R : S;

type Res1 = StrictConditional<1 | 2, 1 | 2 | 3, true, false>; // false
type Res2 = StrictConditional<1 | 2 | 3, 1 | 2, true, false>; // false
type Res3 = StrictConditional<1 | 2, 1 | 2, true, false>; // true





type StrictValueTypeFilter<
  T extends object,
  ValueType,
  Positive extends boolean = true
> = {
  [Key in keyof T]-?: T[Key] extends ValueType
  ? StrictConditional<Positive, true, Key, never>
  : StrictConditional<Positive, true, never, Key>;
}[keyof T];

type StrictPickByValueType<T extends object, ValueType> = Pick<
  T,
  StrictValueTypeFilter<T, ValueType>
>;


// 描述用户信息的类型, VIP字段vipExpires, 普通用户字段promotionUsed, 两者不互存
interface VIP {
  vipExpires: number;
}
interface CommonUser {
  promotionUsed: boolean;
}
interface Visitor {
  refererType: string;
}
type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never }

// 用户的信息类型
type TCommonUser = Flatten<Without<VIP, CommonUser> & CommonUser>
type TVipUser = Flatten<Without<CommonUser, VIP> & VIP>
type TVisitor = Flatten<Without<CommonUser, Visitor> & Visitor>
// 两者互斥
type TUserInfo = TCommonUser | TVipUser
type TCommonUserInfo = TCommonUser | TVisitor
// 三者互斥
type tss = Without<VIP, TCommonUserInfo>
type tss1 = { vipExpires?: number } & ({ vipExpires?: undefined; promotionUsed: boolean; } | { promotionUsed?: undefined; refererType: string; })

type t1 = { a: 'a' } & ({ b: 'b' } | { c: 'c' })
type t2 = ({ a: 'a' } & ({ b: 'b' })) | ({ a: 'a' } & ({ c: 'c' }))
type t3 = t2 extends t1 ? 1 : 2;
type t4 = keyof ({ a: 1, b: 2 } | { a: 2, c: 3 })

type ThreeMutex = (Without<VIP, TCommonUserInfo> & TCommonUserInfo) | (Without<TCommonUserInfo, VIP> & VIP)


type XOR<T, U> = (Without<T, U> & U) | (Without<U, T> & T);
// 两者互斥
type XORUserInfo = XOR<VIP, CommonUser>;
type XORCommonUserInfo = XOR<CommonUser, Visitor>
// 三者互斥
type XORUser = XOR<VIP, XORCommonUserInfo>;
type XORUserSpread = (Without<VIP, XORCommonUserInfo> & TCommonUser) | (Without<VIP, XORCommonUserInfo> & TVisitor) | (Without<XORCommonUserInfo, VIP> & VIP)
type XORUserSpread1 = { vipExpires?: number, promotionUsed: boolean }
  | { vipExpires?: number, promotionUsed?: undefined, refererType: string }
  | { vipExpires: number, refererType?: string, promotionUsed?: boolean }
type xt1 = XORUser extends XORUserSpread ? 1 : 2 // 1
type xt2 = XORUser extends XORUserSpread1 ? 1 : 2 // 1

type BaseInfo = {
  /* name: string;
  age: number;
  addr: string; */
}
type VipUserInfo = Flatten<VIP & BaseInfo>
type CommonUserInfo = Flatten<CommonUser & BaseInfo>
type VisitorUserInfo = Flatten<Visitor & BaseInfo>

// 方式二
type MutexVipUserInfo = Flatten<Without<CommonUserInfo, (CommonUserInfo | VisitorUserInfo)> & Without<VisitorUserInfo, (CommonUserInfo | VisitorUserInfo)> & VipUserInfo>
type MutexCommonUserInfo = Flatten<Without<VipUserInfo, (CommonUserInfo | VisitorUserInfo)> & Without<VisitorUserInfo, (CommonUserInfo | VisitorUserInfo)> & CommonUserInfo>
type MutexVisitorUserInfo = Flatten<Without<CommonUserInfo, (CommonUserInfo | VisitorUserInfo)> & Without<VipUserInfo, (CommonUserInfo | VisitorUserInfo)> & VisitorUserInfo>
type XORStructUserInfo = MutexVipUserInfo | MutexCommonUserInfo | MutexVisitorUserInfo
type xt3 = XORUser extends XORStructUserInfo ? 1 : 2 // 1

// 方式三
type AllUserInfo = Flatten<VIP & CommonUser & Visitor>
type XORUserInfos<T extends Record<keyof any, unknown>, U extends keyof T = keyof T> = U extends U ?
  ({
    [K in U]: T[K]
  } & {
      [K in Exclude<keyof T, U>]?: T[K]
    })
  : never
type XORUserInfo1 = XORUserInfos<AllUserInfo>
type xt4 = XORUser extends XORUserInfo1 ? 1 : 2 // 1


type uaaa = keyof ({ v: number, c?: boolean, r?: string, b: object } | { v: number, c?: boolean, r?: string, de: object })
type test = ThreeMutex extends XORUser ? 1 : 2
type XORStruct = XOR<
  { zoo: string },
  {
    foo: string;
    bar: number;
  }
>;

type FunctionType = (...args: any) => any;

type LastParams<T extends (...args: any[]) => unknown> =
  T extends (...args: infer Args) => unknown ?
  (Args extends [...unknown[], infer L] ? L : (Args extends (infer V)[] ? V : never)) :
  never

type GetLast<Arr extends unknown[]> =
  Arr extends [...unknown[], infer Last] ? Last : (Arr extends Array<infer T> ? T : never);

type LastParameter<T extends FunctionType> = T extends (arg: infer P) => any ? P
  : (T extends (...args: infer R) => any ? (R extends [...any, infer Q] ? Q
    : never)
    : never);

type FuncFoo = (arg: number) => void;
type FuncBar = (...args: string[]) => void;
type FuncBaz = (arg1: string, arg2: boolean) => void;

type FooLastParameter = LastParams<FuncFoo>; // number
type BarLastParameter = LastParams<FuncBar>; // string
type BazLastParameter = LastParams<FuncBaz>; // boolean

type tf<T extends any[]> = T extends [...infer R, infer L] ? L : never;
type tf1 = GetLast<string[]>
type tf2 = ['ss', 's'] extends Array<string> ? 1 : 2



type RequiredKeys<T> = {
  [K in keyof T]-?: {} extends Pick<T, K> ? never : K;
}[keyof T];

// 可选属性
type OptionalKeys<T> = {
  [K in keyof T]-?: {} extends Pick<T, K> ? K : never;
}[keyof T];

interface infos {
  readonly name: string;
  age?: number;
  addr: string;
  married?: boolean
}
interface infos1 {
  name: string;
  age: number;
  readonly addr: string;
  married?: boolean
}
type Rts = RequiredKeys<infos>
type r1 = Pick<infos, 'name'>
type r2 = Pick<infos, 'age'>
type r3 = Pick<infos, 'addr'>
type r4 = Pick<infos, 'married'>


type IsEquel<T, U> = (<X>() => X extends T ? 1 : 2) extends (<X>() => X extends U ? 1 : 2) ? true : false
// 非只读属性
type MutableKeys<T> = {
  [K in keyof T]-?: IsEquel<{ readonly [P in K]: T[P] }, Pick<T, K>> extends true ? never : K
}[keyof T]
// 只读属性
type ImmutableKeys<T> = {
  [K in keyof T]-?: IsEquel<{ readonly [P in K]: T[P] }, Pick<T, K>> extends true ? K : never
}[keyof T]


type m1 = MutableKeys<infos>
type m2 = MutableKeys<infos1>
type m3 = ImmutableKeys<infos>
type m4 = ImmutableKeys<infos1>

type Tstring = `Hello ${number}`;
const test1: Tstring = `Hello 123` // 报错
type Words = 'Hello' | 'Hi'
type Names = 'zhangsan' | 'lisi';
// Hello zhangsan | Hello lisi | Hi zhangsan | Hi lisi
type Result = `${Words} ${Names}`;

let asa: {
  [K in never]: string;
}

type StartWith<T extends string, S extends string> = T extends `${S}${infer Rest}` ? true : false
type StartWithStrict<T extends string, S extends string> = T extends ''
  ? (S extends ''
    ? true
    : StartWith<T, S>)
  : StartWith<T, S>

type StartsWithRes1 = StartWithStrict<'linbudu', 'lin'>; // true
type StartsWithRes2 = StartWithStrict<'linbudu', ''>; // true
type StartsWithRes3 = StartWithStrict<'linbudu', ' '>; // false
type StartsWithRes4 = StartWithStrict<'', ''>; // true
type StartsWithRes5 = StartWithStrict<' ', ''>; // true
type StartsWithRes6 = StartWithStrict<'', 'abd'>; // false


type Split<
  Str extends string,
  Delimiter extends string,
  Buf extends unknown[] = []
> = Str extends `${infer L}${Delimiter}${infer R}`
  ? Split<R, Delimiter, [...Buf, L]>
  : (Str extends Delimiter
    ? []
    : [...Buf, Str])

type Split1<
  Str extends string,
  Delimiter extends string,
> = Str extends `${infer L}${Delimiter}${infer R}`
  ? [L, ...Split<R, Delimiter>]
  : (Str extends Delimiter
    ? []
    : [Str])

type testSplit1 = Split<'a-b-c-d-e-f', '-'>

type Join<
  List extends Array<string | number>,
  Delimiter extends string
> = List extends [infer L extends string | number, ...infer Rest extends Array<number | string>]
  ? `${L}${Rest['length'] extends 0 ? '' : Delimiter}${Join<Rest, Delimiter>}`
  : ''

type JoinTest = Join<['a', 1, 2, 3, 'c', 'def', '?_?'], '/'>


type SnakeCase2CamelCase<
  S extends string
> = S extends `${infer L}_${infer R}`
  ? `${Capitalize<L>}${SnakeCase2CamelCase<R>}`
  : (S extends ''
    ? ''
    : S)


type snakeTest = SnakeCase2CamelCase<''>

type DelimiterCase2CamelCase<
  S extends string,
  Delimiter extends string
> = S extends `${infer L}${Delimiter}${infer R}`
  ? `${Capitalize<Lowercase<L>>}${DelimiterCase2CamelCase<R, Delimiter>}`
  : (S extends ''
    ? ''
    : Capitalize<Lowercase<S>>)

// 一次只能处理一种符号
type AutoCamelCase<
  S extends string,
  Delimiter extends string = '_' | '-' | ' '
> = Delimiter extends Delimiter
  ? (S extends `${infer L}${Delimiter}${infer R}`
    ? Uncapitalize<DelimiterCase2CamelCase<S, Delimiter>>
    : never)
  : never

type autoCamelTest = AutoCamelCase<'a11_bss_cdes_didss_e122_f333_g'>
type autoCamelTest1 = AutoCamelCase<'foo bar baz'>
type autoCamelTest2 = AutoCamelCase<'foo-bar-baz'>
type autoCamelTest3 = AutoCamelCase<'FOO-BAR-BAZ'>
type autoCamelTest4 = AutoCamelCase<'Foo-bAR-baZ'>
type autoCamelTest5 = DelimiterCase2CamelCase<'Foo-bAR-baZ', '-'>


type Delimiters = '-' | '_' | ' ';
type CapitalizeStringArray<Words extends any[]> = Words extends [
  `${infer First} `,
  ...infer Rest
]
  ? `${Capitalize<First>}${CapitalizeStringArray<Rest>} `
  : '';
type CamelCaseStringArray<Words extends string[]> = Words extends [
  `${infer First} `,
  ...infer Rest
]
  ? `${First}${CapitalizeStringArray<Rest>} `
  : never;

type SplitDelimiter<
  S extends string,
  Delimiter extends string
> = S extends `${infer Head}${Delimiter}${infer Tail} `
  ? [Head, ...Split<Tail, Delimiter>]
  : S extends Delimiter
  ? []
  : [S];

type CamelCase<K extends string> = CamelCaseStringArray<
  Split<K, Delimiters>
>;

type sdTest = CamelCase<'a-bv-de-ops'>




///




