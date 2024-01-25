interface Info {
  login: string
  id: number
  node_id: string
  avatar_url: string
  gravatar_id: string
  url: string
}
export async function getGithubUserInfo(): Promise<Info> {
  console.log('----当前处于default环境')
  return await fetch('https://api.github.com/users/lorainwings').then((r) =>
    r.json()
  )
}

export default {
  getGithubUserInfo,
  test(): number {
    console.log('----当前处于default环境')
    return 1
  }
}

