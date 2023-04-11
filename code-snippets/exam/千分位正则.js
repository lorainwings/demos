// 将数字千分位格式化为,

const n = BigInt(1341234124312341243131)
const o = { a: 1, b: 2, c: 3 }

const res = `${n}`.replace(/\d(?=(\d{3})+$)/g, '$&,')

