type TMutationMethodNames =
  | 'push'
  | 'pop'
  | 'shift'
  | 'unshift'
  | 'splice'
  | 'sort'
  | 'reverse'
type TArrayKeys<T extends TMutationMethodNames> = Omit<
  {
    [K in T]: (...args: any[]) => unknown
  },
  never
>

const arrayProto = Array.prototype
const arrayMethods = <TArrayKeys<TMutationMethodNames>>Object.create(null)
const methods: Array<TMutationMethodNames> = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
]

methods.forEach((m) => {
  const original = arrayProto[m]
  Object.defineProperty(arrayMethods, m, {
    value(...args: any[]) {
      return original.apply(this, args)
    },
    enumerable: false,
    writable: true,
    configurable: true
  })
})

const arrayKeys = Object.getOwnPropertyNames(arrayMethods)

function copyAugment<
  T extends unknown[],
  S extends Record<keyof any, any>,
  K extends string[]
>(target: T, src: S, keys: K) {
  for (let i = 0, l = keys.length; i < l; i++) {
    const key = keys[i]
    Object.defineProperty(target, key, {
      value: src[key]
    })
  }
}

const r = [1, 2, 3, 4, 5]
copyAugment(r, arrayMethods, arrayKeys)
console.log(r)
