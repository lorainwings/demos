import express from "express"
import errorHandler  from './middleware'
import articlesRouter from './router/articles.router'

const app = express()
app.use(express.json())
app.use('/articles', articlesRouter)
app.use(errorHandler)


app.listen(3000, () => {
  console.log('app listenning at port 3000.')
})
