import type { MutableRefObject } from 'react'


declare global{

  export type TargetValue<T> = T | undefined | null

  export type TargetType = HTMLElement | Element | Window | Document

  export type BasicTarget<T extends TargetType = Element> =
    | TargetValue<T>
    | MutableRefObject<TargetValue<T>>
}
