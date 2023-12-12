// plaintext
const input = '{{subinput:请输入}}'
const cmd = `mdfind -name ${input} -onlyin ~/Store`

const exec = (cmd) =>
  new Promise((resolve, reject) => {
    child_process.exec(cmd, { encoding: 'utf8' }, (err, stdout) => {
      console.log(stdout, err)
      if (err) return reject(err)
      resolve(stdout)
    })
  })

const renderFiles = async () => {
  const res = await exec(cmd)
  const files = res.split('\n').reduce((arr, f) => {
    if (!f) return arr
    const title = f.split('/').pop()
    return [
      ...arr,
      {
        title,
        description: f
      }
    ]
  }, [])
  return files
}

const renderOpts = async (opts) => {
  const choise = await quickcommand.showSelectList(opts, { optionType: 'json' })
  return choise.description
}

;(async () => {
  const opts = await renderFiles()
  const choise = await renderOpts(opts)
  utools.shellOpenPath(choise)
  utools.outPlugin()
})()
