const obj = {
  'a': 1,
  'b': 2,
  'c': 3
}

const foo = ['a', 'b', 'c'] as const

const c = foo.map(item=>obj[item])

export {}
