import express from "express"

const app = express()


console.log(123)

app.get('/', (req, res) => {
  res.send('Hello World！')
})

app.listen(3000, () => {
  console.log('app listenning at port 3000.')
})
