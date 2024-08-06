import { buildSchema } from "graphql"
import express from "express"
import { graphqlHTTP } from "express-graphql"
import cors from "cors"

const app = express()
app.use(cors())

const articles = [
  { id: `1`, title: 'article 1', body: 'article 1 body' },
  { id: `2`, title: 'article 2', body: 'article 2 body' },
  { id: `3`, title: 'article 3', body: 'article 3 body' }
]

const schema = buildSchema(`
  type Ariticle {
    id: ID!
    title: String!
    body: String!
    tagList: [String!]
  }

  # 查询入口点
  type Query {
    aiticles:[Ariticle]
    article(id: ID!): Ariticle
  }
`)

const rootValue = {
  aiticles() {
    return articles
  },
  article({ id }) {
    return articles.find((item) => item.id === id)
  }
}


app.use('/graphql', graphqlHTTP({
  schema,
  rootValue,
  graphiql: true
}))


app.listen(4000, () => {
  console.log('graphql server is running at http://localhost:4000');
})
