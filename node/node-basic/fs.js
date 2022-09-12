const fs = require('fs');
const path = require('path');

const writeFile = () => {
  const buf = Buffer.from('123abcdefg34123412342dlfka;fkdsa;f;dsak;f1')
  fs.open('file.txt', 'w', (e, fd) => {
    let p = 0
    let offset = 0

    const next = () => {
      if (p >= buf.length) return
      fs.write(fd, buf, p, 2, offset, (e, writeLen, buffer) => {
        p += 2
        offset += writeLen
        console.log('本次写入长度及内容', writeLen, buffer.toString());
        next()
      })
    }

    next()
  })
}


const myRmdir = (dirPath, cb) => {
  fs.stat(dirPath, (err, info) => {
    if (err) return;

    // 该路径是文件
    if (!info.isDirectory()) {
      return fs.unlink(dirPath, cb)
    }

    // 该路径是目录
    fs.readdir(dirPath, (err, files) => {
      if (err) return

      const paths = files.map(f => path.join(dirPath, f))
      let index = 0

      const next = () => {
        if (index === paths.length) return fs.rmdir(dirPath, cb)
        const current = paths[index++]
        myRmdir(current, next)
      }

      next();
    });
  })
}


/* myRmdir('a', () => {
  console.log("删除完成");
}) */



writeFile()
