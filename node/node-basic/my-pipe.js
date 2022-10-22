const fs = require('fs')
const ReadStream = require('./my-readstream')
const WriteStream = require('./my-writestream')

/* const rs = new ReadStream('./source.txt')
const ws = new WriteStream('./target.txt') */

const rs = fs.createReadStream('./source.txt')
const ws = fs.createWriteStream('./target.txt')

rs.pipe(ws)
