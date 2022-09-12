#! /usr/bin/env node

const { program } = require('commander')

program
  /* 带参数: 带参数使用<xx>包裹, 如果没有该<xx>, 将被默认解析为true */
  .option('-p, --port <port>', 'set node static server port')

  /* 取反参数: --no开头被默认解析为false */
  .option('-u, --no-safe', 'use unsafe mode')

  /* 必填参数: 使用requiredOption来定义必填项 */
  // .requiredOption('-m, --must', 'this option is must')

  /* 变长参数: 使用...定义变长参数, 值为数组 */
  .option('-n, --number <numbers...>', 'specify numbers')

  /* 自定义选项的回调: 自定义函数适用场景包括参数类型转换，参数暂存，或者其他自定义处理的场景 */
  .option('-i, --integer <number>', 'integer argument', (value, prev) => {
    console.log(`传入值:${value}`, `上一次的值${prev}`);
    return prev.concat([value]);
  }, [])

  /* 版本参数: 默认使用-V 或者 --version查看版本, 后续两个参数来自定义行为 */
  .version('1.0.0', '-v, --vers', 'show program current version')


program
  /* 只要传入了number选项, 就会触发该事件 */
  .on('option:number', (v) => {
    console.log("传入了number选项", v);
  })


program
  /* 自定义子命令: 例如 npm init 或者 install 都是子命令, <>为必填参数 []为选填参数 ...为可接收多个参数 */
  .command('init <templateName> [envs...]')
  /* 子命令设置别名 */
  .alias('it')


program
  /* 该操作会终止其他参数的解析, 应放最后一步, 参数可选, 默认值为process.argv */
  .parse(process.argv)

/* 未使用到的参数 */
// console.log(program.args);

/* 查看所有选项值 */
console.log(program.opts());


