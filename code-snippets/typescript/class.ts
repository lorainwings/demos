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


const PRODUCT_TYPE = {
  IS2D: 'is2D',
  IS2DGIF: 'is2DGIF',
  IS3D: 'is3D',
} as const;

export type ProductType = typeof PRODUCT_TYPE[keyof typeof PRODUCT_TYPE];

const PREVIEW_IMG_TYPE = {
  LIST_IMG: 'listImg',
  SHARE_IMG: 'shareImg',
  MP_SHARE_IMG: 'mpShareImg',
} as const;

export type PreviewImgType = typeof PREVIEW_IMG_TYPE[keyof typeof PREVIEW_IMG_TYPE];

interface Props<M> {
  info: Record<string, any>;
  onCancel: () => any;
  modalType: M;
}


export default ({ info, onCancel, modalType }: Props<ProductType>): any => {
  const IS2D: Array<ProductType> = [PRODUCT_TYPE.IS2D, PRODUCT_TYPE.IS2DGIF]
  return IS2D.includes(modalType)
}


type TZip<
  T extends Array<unknown>,
  U extends Array<unknown>
> = T extends [infer F, ...infer O]
  ? U extends [infer F1, ...infer O1]
  ? [[F, F1], ...TZip<O, O1>]
  : []
  : []

type TestZip = TZip<[1, 2, 3], [4, 5, 6]>

type Multab<T> = {
  -readonly [P in keyof T]: T[P]
}
type UnRequire<T> = {
  [P in keyof T]-?: T[P]
}

declare interface IO {
  a?: 111;
  b?: 222;
  c: 'iam';
}

type TestUnRequire = UnRequire<IO>

interface User {
  name?: string
  age?: number
  address?: string
}


type RequireKeys<T, K extends keyof T> = Omit<{
  [P in Exclude<keyof T, K>]?: T[P]
} & {
    [P in K]-?: T[P]
  }, never>

type TRequireKeys = RequireKeys<User, 'name' | 'age'>
