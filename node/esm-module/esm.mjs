import path from 'path'

const __filename = new URL(import.meta.url).pathname
const __dirname = path.dirname(__filename)

console.log('__dirname', __dirname)
console.log('__filename', __filename)

// __dirname /Users/lorain/Coding/Private/demos/node/esm-module
// __filename /Users/lorain/Coding/Private/demos/node/esm-module/esm.mjs

console.log('---------------------------------')

console.log("import.meta.dirname", import.meta.dirname)
console.log("import.meta.filename", import.meta.filename)
