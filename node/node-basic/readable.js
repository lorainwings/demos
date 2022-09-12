const { Readable } = require('stream')

const inStream = new Readable({
    read(size) {
        const char = String.fromCharCode(this.currentCharCode++)
        this.push(char);
        console.log(`\n 推了${char}`)
        // 这个时候停止
        if (this.currentCharCode > 90) { // Z
            this.push(null)
        }
    }
})

inStream.currentCharCode = 65 // A

inStream.pipe(process.stdout)
