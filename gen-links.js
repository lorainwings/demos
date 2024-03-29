const fs = require('fs')
const path = require('path')
const { promisify } = require('util')
const ejs = require('ejs')
const renderFile = promisify(ejs.renderFile)

const writeCtx = async (configs) => {
  const ps = configs.map(({ name, content }) => {
    const target = path.resolve(__dirname, name)
    const wstream = fs.createWriteStream(target)
    const buf = Buffer.from(content, 'utf-8')
    return new Promise((rs, rj) => {
      wstream.write(buf, (e) => {
        if (e) rj(e)
      })
      wstream.on('finish', () => rs)
    })
  })
  return Promise.all(ps)
}

const dirList = async () => {
  const fullpath = path.resolve(__dirname, './code-snippets/htmls')
  const whiteList = ['.html', '.js', '.ts']
  const readdirAsync = promisify(fs.readdir)
  const list = await readdirAsync(fullpath).then((files) =>
    files
      .filter((n) => whiteList.includes(path.extname(n)))
      .map((filename) => {
        const name = filename.slice(0, filename.indexOf('.'))
        const type = path.extname(filename)
        const viewLink = `https://lorainwings.github.io/demos/${filename}`
        const codeLink = `/code-snippets/htmls/${filename}`
        return { name, type, link: viewLink, code: codeLink }
      })
  )
  const htmlTemp = path.resolve(__dirname, './template/html.ejs')
  const mdTemp = path.resolve(__dirname, './template/md.ejs')
  const hRet = await renderFile(htmlTemp, { list })
  const mRet = await renderFile(mdTemp, { list, maxShowNum: 4 })
  const configs = [
    {
      name: './code-snippets/README.md',
      content: mRet
    },
    {
      name: './code-snippets/htmls/README.md',
      content: mRet
    },
    {
      name: './code-snippets/htmls/index.html',
      content: hRet
    }
  ]
  await writeCtx(configs)
  process.exit(0)
}

console.log('正在生成快捷访问链接.....')
dirList()

