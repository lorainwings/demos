const { execSync } = require('child_process')
const path = require('path')

const file = path.resolve(__dirname, './eventloop.js')
execSync(`node ${file}`)

