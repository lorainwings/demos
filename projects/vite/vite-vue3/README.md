# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support For `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Typescript集成

在Typescipt集成的过程中, 需要注意以下问题

### Vite只编译不校验

`Vite`只做`ts`的编译, 并不做`ts`的类型校验。因此需要借助`IDE`和`tsc --noEmit`来做校验, 如果是`vue`项目使用`vue-tsc --noEmit`

### TS配置文件

在`Vite`的项目中, `ts`配置文件`tsconfig.json`有几个关键选项必须开启

- `Vite`项目默认所有模块都是ESM, 因此必须开启 `"module": "ESNext"`

- 如果是在`Vue`项目中使用`Vite`, 同时`Vue`中使用`jsx`语法, 那必须开启`"jsx": "preserve"`和 "jsxImportSource": "vue"

> 注意
>
> 从 Vue 3.4 开始，Vue 不再隐式注册全局JSX命名空间。要指示
> TypeScript 使用 Vue 的 JSX 类型定义，请确保在您的配置文件
> `tsconfig.json`中包含以下内容
> `"jsxImportSource": "vue"`
>

- 必须开启`"isolatedModules": true`, `Vite`在编译时只会编译单个文件中的`ts`语法变成`js`, 不会读取该文件所关联的其他`ts`模块的信息, 导致很多`ts`的功能无法使用

> 开启后能解决以下问题
>
> 1. 在`a.ts`导入的外部类型`A`, 编译后`export { A }`代码会报错
> 开启选项后, 可以提前给出提示
> 2. 开启后会在使用`const enum` 语法时提示报错。 因为`Vite`使用`esbuild`编译`ts`，不支持该语法
> 3. 开启`isolatedModules`后, 要求所有单个`ts`文件是一个
