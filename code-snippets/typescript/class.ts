enum LoginType {
  WeChat,
  TaoBao,
  TikTok
}

abstract class LoginHandler {
  abstract handler(): void
}

class WeChatLoginHandler implements LoginHandler {
  handler() { }
}

class TaoBaoLoginHandler implements LoginHandler {
  handler() { }
}

class TikTokLoginHandler implements LoginHandler {
  handler() { }
}

class Login {
  public static handlerMap: Record<LoginType, LoginHandler> = {
    [LoginType.TaoBao]: new TaoBaoLoginHandler(),
    [LoginType.TikTok]: new TikTokLoginHandler(),
    [LoginType.WeChat]: new WeChatLoginHandler(),

  }
  public static handler(type: LoginType) {
    Login.handlerMap[type].handler()
  }
}



