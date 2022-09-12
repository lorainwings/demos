const fs = require('fs');
const path = require('path');



const promisify = (fn) => (...args) => new Promise((resolve, reject) => {
  args.push((err, data) => {
    if (err) reject(err);
    resolve(data)
  });
  fn(...args);
});

const writeCtx = async (name) => {
  const target = path.resolve(__dirname, './code-snippets/README.md');
  const wstream = fs.createWriteStream(target);
  const buf = Buffer.from(name, 'utf-8');
  return new Promise((rs, rj) => {
    wstream.write(buf, e => { if (e) rj(e) });
    wstream.on('finish', () => rs);
  });
}

const dirList = async () => {
  let ctx = "";
  const fullpath = path.resolve(__dirname, './code-snippets/htmls');
  const readdirAsync = promisify(fs.readdir);
  const list = await readdirAsync(fullpath);
  const head = `# HTMLS\n\r该目录是一些HTML集合, 包含了平时常见需求的简单实现, 可以打开控制台查看代码;\n\r## 预览链接\n\r`
  for (const item of list) {
    const n = item.indexOf('.');
    const stat = fs.statSync(path.resolve(fullpath, item));
    if (stat.isDirectory() || !~item.indexOf('.html') || ~item.indexOf('ignore')) continue;
    ctx += `- [${item.slice(0, n)}](https://lorainwings.github.io/demos/code-segment/${item})\r`
  }
  await writeCtx(head + ctx);
  process.exit(0);
}

console.log("正在生成快捷访问链接.....");
dirList();
