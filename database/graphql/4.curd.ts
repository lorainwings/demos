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


/*
  - 征对 Query 类型, 直接使用 "{ articles: {...}} }" 这种查询方式, 这是默认的方式。也可以显式写上 "query{ articles: {...}} }"
  - 而征对 Mutation 类型, 必须加上 "mutation{ createArticle( title: "...", body: "...") }" 这种方式
*/
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

  # 修改入口点
  type Mutation {
    createArticle(title: String!, body: String!): Ariticle
  }

`)

const rootValue = {
  aiticles() {
    return articles
  },
  article({ id }) {
    return articles.find((item) => item.id === id)
  },
  createArticle(args) {
    console.log('...args', args);
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
