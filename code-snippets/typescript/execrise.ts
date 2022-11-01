
type RequiredByKeys2<
  T extends Record<string, any>,
  K extends string = keyof T & string
> = Omit<Omit<T, keyof T & K> & {
  [P in K & keyof T]-?: T[P] & {}
}, never>


interface User {
  name?: string
  age?: number
  address?: string
}

interface UserRequiredName {
  name: string
  age?: number
  address?: string
}

interface UserRequiredNameAndAge {
  name: string
  age: number
  address?: string
}


type nr = RequiredByKeys2<User, 'name'>
type nr1 = RequiredByKeys2<User, 'name' | 'unknown'>
type nr2 = RequiredByKeys2<User, 'name' | 'age'>

type Test<T> = T extends true ? 1 : 2;
type res = Test<boolean>;

type robj = { readonly[key: string]: string };
type robj1 = Readonly<Record<string, unknown>>

type trobj = robj extends robj1 ? 1 : 2

interface Iperson {
  readonly name?: string;
  readonly age: number
  readonly sex: string
}

type TNoReadonly<T extends Record<string, any>> = T extends Readonly<infer O> ? O : never

type TestTNR = Required<TNoReadonly<Iperson>>
