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

