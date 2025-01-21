const obj = {
  'a': 1,
  'b': 2,
  'c': 3
}

const foo = ['a', 'b', 'c'] as const

const c = foo.map(item=>obj[item])

export {}



function map(): <V>(arr: V[]) => V[];
function map<V, R>(fn: (value: V) => R): (arr: V[]) => R[];
function map(fn = (x: any) => x) {
  return (arr: any[]) => {
    const result: any[] = [];
    for (const item of arr) {
      result.push(fn(item));
    }
    return result;
  };
}

// 测试

const emptyMap = map();
const result1 = emptyMap([1, 2, 3]);
const result2 = emptyMap(["1", "2"]);

const mapNumberToString = map((v: number) => "str");
const result3 = mapNumberToString([1, 2, 3]);
// const result4 = mapNumberToString(["1", "2"]); // 报错，类型检查有效
// const mapNumberToString2 = map((v: number) => "str", [1, 2]); // 报错，类型检查有效
