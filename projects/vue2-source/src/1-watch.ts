function defineReactive(
  data: Record<keyof any, unknown>,
  key: string,
  val: any
) {
  Object.defineProperty(data, key, {
    enumerable: true,
    configurable: true,
    get() {
      console.log('[get]:', val)
      return val
    },
    set(newVal: unknown) {
      console.log('[set]:', newVal)
      if (val === newVal) return
      val = newVal
      w.update()
    }
  })
}

/* 数据挟持 */
const data = { a: 1, b: 2 }
defineReactive(data, 'a', 1)
defineReactive(data, 'b', 2)

class Watcher {
  private getter: () => any
  private value: any

  constructor(exp: keyof typeof data, cb = () => {}) {
    this.getter = () => data[exp]
    this.value = this.get()
  }

  get() {
    const v = this.getter()
    return v
  }

  update() {
    const old = this.value
    this.value = this.get()
  }
}

/* 收集依赖 */
const w = new Watcher('a')
// console.log(w);

/* 更新依赖 */
data.a = 2_31423
console.log(w)
