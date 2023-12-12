/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useEffect, useRef } from 'react'

export default () => {
  const divRef = useRef<HTMLDivElement | null>(null)
  const pRef = useRef<HTMLParagraphElement | null>(null)

  const parentBubble = () => {
    console.log('父元素React事件冒泡')
  }
  const childBubble = () => {
    console.log('子元素React事件冒泡')
  }
  const parentCapture = () => {
    console.log('父元素React事件捕获')
  }
  const childCapture = () => {
    console.log('子元素React事件捕获')
  }

  useEffect(() => {
    divRef.current!.addEventListener(
      'click',
      () => {
        console.log('父元素原生捕获')
      },
      true
    )
    divRef.current!.addEventListener('click', () => {
      console.log('父元素原生冒泡')
    })

    pRef.current!.addEventListener(
      'click',
      () => {
        console.log('子元素原生捕获')
      },
      true
    )
    pRef.current!.addEventListener('click', () => {
      console.log('子元素原生冒泡')
    })

    document.addEventListener(
      'click',
      () => {
        console.log('document原生捕获')
      },
      true
    )
    document.addEventListener('click', () => {
      console.log('document原生冒泡')
    })
  }, [])

  return (
    <div ref={divRef} onClick={parentBubble} onClickCapture={parentCapture}>
      <p ref={pRef} onClick={childBubble} onClickCapture={childCapture}>
        事件执行顺序
      </p>
    </div>
  )
}
