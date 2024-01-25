import helpers, { getGithubUserInfo } from '#helpers'

import http from "http"

const server = http.createServer(async(req)=>{
  console.log('req',req);


  console.log('helpers', helpers.test())

  console.log('getGithubUserInfo', await getGithubUserInfo())
})


server.listen(8080)
