/* 使用泛型组件 */
import { useState, type PropsWithChildren } from 'react'

interface ICellProps<TData> {
  field: keyof TData;
}

export interface IDataStruct {
  name: string;
  age: number;
}

const Cell = <T extends Record<string, any>>(props: PropsWithChildren<ICellProps<T>>) => {
  let [num, setNum] = useState<number>(0)
  return <>
    <hr />
    <h2>Cell</h2>
    <h3>{ num }</h3>
    <button onClick={() => setNum(++num)}>累加</button>
  </>
};

export default Cell;
