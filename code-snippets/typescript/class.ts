enum LoginType {
  WeChat,
  TaoBao,
  TikTok
}

abstract class LoginHandler {
  abstract handler(): void
}

class WeChatLoginHandler implements LoginHandler {
  handler() {}
}

class TaoBaoLoginHandler implements LoginHandler {
  handler() {}
}

class TikTokLoginHandler implements LoginHandler {
  handler() {}
}

class Login {
  public static handlerMap: Record<LoginType, LoginHandler> = {
    [LoginType.TaoBao]: new TaoBaoLoginHandler(),
    [LoginType.TikTok]: new TikTokLoginHandler(),
    [LoginType.WeChat]: new WeChatLoginHandler()
  }
  public static handler(type: LoginType) {
    Login.handlerMap[type].handler()
  }
}

class Property {
  // 一般來說習慣將 private 的屬性加上_，標示為 private
  private _age: number

  constructor() {
    this._age = 18
  }

  get get_age() {
    return this._age
  }
}

const propertyInstance = new Property()
/*
// Property '_age' does not exist on type 'typeof Property'
console.log(Property._age);

// Error!! Property '_age' is private and only accessible within class 'Property'.
console.log(propertyInstance._age);

// Property 'get_age' does not exist on type 'typeof Property'
console.log(Property.get_age)
*/

// 18
console.log(propertyInstance.get_age)

const PRODUCT_TYPE = {
  IS2D: 'is2D',
  IS2DGIF: 'is2DGIF',
  IS3D: 'is3D'
} as const

export type ProductType = typeof PRODUCT_TYPE[keyof typeof PRODUCT_TYPE]

const PREVIEW_IMG_TYPE = {
  LIST_IMG: 'listImg',
  SHARE_IMG: 'shareImg',
  MP_SHARE_IMG: 'mpShareImg'
} as const

export type PreviewImgType =
  typeof PREVIEW_IMG_TYPE[keyof typeof PREVIEW_IMG_TYPE]

interface Props<M> {
  info: Record<string, any>
  onCancel: () => any
  modalType: M
}

export default ({ info, onCancel, modalType }: Props<ProductType>): any => {
  const IS2D: Array<ProductType> = [PRODUCT_TYPE.IS2D, PRODUCT_TYPE.IS2DGIF]
  return IS2D.includes(modalType)
}

type TZip<T extends Array<unknown>, U extends Array<unknown>> = T extends [
  infer F,
  ...infer O
]
  ? U extends [infer F1, ...infer O1]
    ? [[F, F1], ...TZip<O, O1>]
    : []
  : []

type TestZip = TZip<[1, 2, 3], [4, 5, 6]>

type Multab<T> = {
  -readonly [P in keyof T]: T[P]
}
type UnRequire<T> = {
  [P in keyof T]-?: T[P]
}

declare interface IO {
  a?: 111
  b?: 222
  c: 'iam'
}

type TestUnRequire = UnRequire<IO>

interface User {
  name: string
  age?: number
  address?: string
}

type PickUser = 1 extends any
  ? Pick<User, 'name'> & Omit<User, 'address' | 'name'>
  : never

type RequireKeys<T, K extends keyof T> = Omit<
  {
    [P in Exclude<keyof T, K>]?: T[P]
  } & {
    [P in K]-?: T[P]
  },
  never
>

type TRequireKeys = RequireKeys<User, 'name' | 'age'>

type ConstructType<T> = new (...args: unknown[]) => T
function createFactoryConstruct<U>(constructorType: ConstructType<U>) {
  return new constructorType()
}
createFactoryConstruct(Property)

type TCombineType<T extends Record<string, unknown>[]> = T extends [
  infer F,
  ...infer R extends Record<string, unknown>[]
]
  ? F & TCombineType<R>
  : {}

function combine<T extends Record<string, unknown>[]>(
  objs: T
): TCombineType<T> {
  const r = {} as TCombineType<T>
  objs.reduce((o, co) => {
    for (const k in co) o[k] = co[k]
    return o
  }, r)
  return r
}

const res = combine([
  { a: 1, b: 2 },
  { c: 3, d: 4 },
  { e: 5, f: 6 }
])

type ttss = TCombineType<[{ a: 1; b: 2 }, { c: 3; d: 4 }, { e: 5; f: 6 }]>

type ttss1 = [{ a: 1; b: 3 }] extends [infer F, ...infer R]
  ? R extends never[]
    ? 1
    : 2
  : 3

let obj = {
  name: 'wanggu'
}
type Tobj = typeof obj
function addObj(rec: Record<keyof Tobj, Tobj[keyof Tobj]>) {}

type Special1 = any extends any ? 1 : 2 // 1
type Special2<T> = T extends any ? 1 : 2
type Special2Res = Special2<any> // 1

type a = { a: 1; b: 2 }
type b = { a: 3; c: 3 }
type t6 = { a: 1; b: 2 } | { a: 'zss'; c: 3 }
type c = keyof t6

type KeyEvent = {
  eventType: 'keyUp'
  key: number
}
type MouseEvent = {
  eventType: 'click'
  x: number
  y: number
}
type EventFunctions<T extends Record<string, any>, K extends keyof T> = Omit<
  {
    // [P in `${T[U] & string}`]: (event: Event) => void
    [P in T[K]]: (event: Event) => void
  },
  never
>

type EventRec = EventFunctions<MouseEvent | KeyEvent, 'eventType'>

interface VueOptions<U> {
  data: () => U
}
class _Vue<T> {
  private $options

  constructor(options: VueOptions<T>) {
    this.$options = options
    const proxy = this.initProxy()
    return proxy
  }

  initProxy() {
    const data = this.$options.data()

    return new Proxy(this as unknown as Vue<T> & T, {
      set(_, key: string, value) {
        ;(data as Record<string, any>)[key] = value
        return true
      },
      get(_, key: string) {
        return (data as Record<string, any>)[key]
      }
    })
  }

  // static create<T>(data: VueOptions<T>): Vue<T> & T {
  //   return new Vue<T>(data) as unknown as Vue<T> & T
  // }
}

type Vue<T> = _Vue<T> & T
const Vue: new <T>(options: VueOptions<T>) => Vue<T> = _Vue as any

const vm = new Vue({
  data() {
    return {
      a: 1
    }
  }
})

console.log(vm.initProxy().a) // Output: 1
vm.a = 2
console.log(vm.a) // Output: 2

type TCallback<T, K extends keyof T> = (o: T[K], n: T[K]) => void
interface IWatchReturnType<T extends Record<string, any>> {
  on: <K extends keyof T & string>(
    event: `${K}Change`,
    callback: TCallback<T, K>
  ) => void
}

function watch<T extends Record<string, any>>(options: T): IWatchReturnType<T> {
  return {
    on(event, callback) {}
  }
}

const watcher = watch({
  firstName: 'saorise',
  lastName: 'Ronan',
  age: 26,
  info: {
    desc: 'very beautiful'
  }
})

watcher.on('infoChange', (o, n) => {})
