/* 使用React.FC定义组件 */
import { useState, useRef, type PropsWithChildren } from 'react'

export interface IContainerProps {
  visible?: boolean
  controller?: () => void
}
const Label: React.FC<IContainerProps> = ({
  visible = true,
  controller = () => {
    /*  */
  }
}: IContainerProps) => {
  const [num, setNum] = useState<number>(0)
  let v = num
  const domRef = useRef<HTMLDivElement>(null)
  const valueRef = useRef<number>(599)
  return (
    <div>
      <h2>Label</h2>
      <h3 ref={domRef}>{num}</h3>
      <button onClick={() => setNum(++v)}>累加</button>
      <p>valueRef: {valueRef.current}</p>
    </div>
  )
}

export default Label
