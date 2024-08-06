import { graphql, buildSchema } from "graphql"
import express from "express"
import { graphqlHTTP } from "express-graphql"
import cors from "cors"


const app = express()

// 允许客户端跨域
app.use(cors())


// 1. 使用GraphQL Scheme 语法构建一个scheme
const schema = buildSchema(`
  # 普通对象类型
  type Score {
    name: String
    score: Float
  }

  # 普通对象类型嵌套对象数组
  type User {
    name: String
    age: Int
    scores: [Score]
  }

  # 普通对象嵌套字符串数组及对象
  type Ariticle {
    title: String
    body: String
    author: User

    # hobbies 不能为空, 且里面的元素不能为null, 但可以是空数组
    hobbies: [String!]!
  }

  # Query  严格来说是一种对象类型, 而且它是所有查询的入口点
  type Query {
    count: Int
    salary: Float
    isGood: Boolean
    id: ID
    article: Ariticle

    # 默认情况下, 每个类型都可以为空, 因此非空类型需要加一个!
    foo: String!
  }

`)


// 2. 定义Scheme 的 resolver
const rootValue = {
  // foo 为非空类型, 不能省略, 也不可以返回null
  foo() {
    return 'bar'
  },
  count() {
    // 使用字符串将自动转化成数字, 如果无法转换就报错
    return '123'
  },
  salary() {
    return 1000.111
  },
  isGood() {
    return true
  },
  id() {
    return `${URL.createObjectURL(new Blob())}`.slice(-10)
  },
  author() {
    return {
      name: 'zzdd',
      age: 25
    }
  },
  article() {
    return {
      title: '我欲乘风',
      body: 'lorem loremloremloremlorem',
      hobbies: ['zzd', 'wo', 'man', '吃饭', '睡觉'],
      author: {
        name: 'zzdd',
        age: 18,
        scores: [{ name: '排球', score: 100 }, { name: '篮球', score: 99 }]
      }
    }
  }
}

// 直接查询测试
// graphql(schema, '{ count, foo }', rootValue).then(console.log)


// 3. 挂载中间件
app.use('/graphql', graphqlHTTP({
  schema,
  rootValue,
  graphiql: true // 开启浏览器 GraphQL IDE 调试工具
}))


// 4. 启动web服务

app.listen(4000, () => {
  console.log('GraphQL Server is running at http://localhost:4000',);
})
