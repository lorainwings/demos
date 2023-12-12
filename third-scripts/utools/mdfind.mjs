import mdfind from 'mdfind'

const res = mdfind({
  query: 'kMDItemFSName == "*溢出*"cdw',
  attributes: [
    'kMDItemContentType',
    'kMDItemKind',
    'kMDItemFSName',
    'kMDItemFSSize',
    'kMDItemFSCreationDate',
    'kMDItemFSContentChangeDate',
    'kMDItemLastUsedDate'
  ],
  // names: ['溢出'],
  directories: ['/Users/lorain'],
  limit: undefined
})

const terminateFunc = res.terminate
if (res.output) {
  const data = []
  res.output.on('data', (chunk) => data.push(chunk))
  res.output.on('end', () => {
    console.log('----', data)
    // 防止已终止的 mdfind 子进程还返回数据
    if (terminateFunc) {
      return data
    }
  })
  res.output.on('error', (err) => reject(err))
}
