
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
