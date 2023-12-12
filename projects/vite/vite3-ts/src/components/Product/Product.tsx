import React from 'react'

export type TProduct = typeof PRODUCT_TYPE[keyof typeof PRODUCT_TYPE]

export type TProductPick<
  T extends TProduct,
  U extends '2D' | '3D'
> = T extends `is${U}${string}` ? T : never

export type PreviewImgType =
  typeof PREVIEW_IMG_TYPE[keyof typeof PREVIEW_IMG_TYPE]
export interface Props {
  info: Record<string, unknown>
  onCancel: () => void
  modalType:
    | TProductPick<TProduct, '2D'>
    | TProductPick<TProduct, '3D'>
    | PreviewImgType
}

const PRODUCT_TYPE = {
  IS2D: 'is2D',
  IS2DGIF: 'is2DGIF',
  IS3D: 'is3D'
} as const

const PREVIEW_IMG_TYPE = {
  LIST_IMG: 'listImg',
  SHARE_IMG: 'shareImg',
  MP_SHARE_IMG: 'mpShareImg'
} as const

export function includes<T extends U, U>(source: ReadonlyArray<T>, target: U) {
  return source.includes(target as T)
}

export default ({ modalType }: Props) => {
  if (includes([PRODUCT_TYPE.IS2D, PRODUCT_TYPE.IS2DGIF], modalType))
    return <div>2d</div>
  else if (includes([PRODUCT_TYPE.IS3D], modalType)) return <div>3d model</div>
  else if (includes(Object.values(PREVIEW_IMG_TYPE), modalType))
    return <div>images</div>
}
