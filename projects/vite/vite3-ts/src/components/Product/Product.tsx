import React, { useState, type PropsWithChildren } from 'react'

const PRODUCT_TYPE = {
  IS2D: 'is2D',
  IS2DGIF: 'is2DGIF',
  IS3D: 'is3D'
} as const

export type ProductType = typeof PRODUCT_TYPE[keyof typeof PRODUCT_TYPE]

const PREVIEW_IMG_TYPE = {
  LIST_IMG: 'listImg',
  SHARE_IMG: 'shareImg',
  MP_SHARE_IMG: 'mpShareImg'
} as const

export type PreviewImgType =
  typeof PREVIEW_IMG_TYPE[keyof typeof PREVIEW_IMG_TYPE]

/* 变种1
interface Props {
  info: Record<string, any>;
  onCancel: () => any;
  modalType: ProductType | PreviewImgType;
}
const array3D: Array<Props['modalType']> = [PRODUCT_TYPE.IS3D]
const array2D: Array<Props['modalType']> = [PRODUCT_TYPE.IS2D, PRODUCT_TYPE.IS2DGIF]
const arrayimgs: Array<Props['modalType']> = [PREVIEW_IMG_TYPE.LIST_IMG, PREVIEW_IMG_TYPE.SHARE_IMG, PREVIEW_IMG_TYPE.MP_SHARE_IMG]

export default ({ info, onCancel, modalType }:Props) => {
  return (
    <div>
      {array2D.includes(modalType)} && (<div>1</div>)
      {array3D.includes(modalType)} && (<div>2</div>)
      {arrayimgs.includes(modalType)} && (<div>3</div>)
    </div>
  )
}
*/

interface Props<T> {
  info: Record<string, unknown>
  onCancel: () => void
  modalType: T
}

export default ({
  info,
  onCancel,
  modalType
}: Props<ProductType | PreviewImgType>) => {
  return (
    <div>
      {/* {array3D.includes(modalType)} && (<div>2</div>) */}
      {/* {arrayimgs.includes(modalType)} && (<div>3</div>) */}
    </div>
  )
}

type TRes = { foo: 'foo'; bar: 'bar'; baz: never }
type TUnion = TRes[keyof TRes] // keyof TRes结果为 'foo' | 'bar' | 'baz'
