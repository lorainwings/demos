export async function getGithubUserInfo() {
  console.log('----当前处于node环境')
  return await fetch('https://api.github.com/users/lorainwings').then((r) =>
    r.json()
  )
}

export default {
  test() {
    console.log('----当前处于node环境')
    return 1
  }
}

