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


class Property {
  // 一般來說習慣將 private 的屬性加上_，標示為 private
  private _age: number;

  constructor() {
    this._age = 18;
  }

  get get_age() {
    return this._age;
  }
}

const propertyInstance = new Property();
/*
// Property '_age' does not exist on type 'typeof Property'
console.log(Property._age);

// Error!! Property '_age' is private and only accessible within class 'Property'.
console.log(propertyInstance._age);

// Property 'get_age' does not exist on type 'typeof Property'
console.log(Property.get_age)
*/

// 18
console.log(propertyInstance.get_age);
