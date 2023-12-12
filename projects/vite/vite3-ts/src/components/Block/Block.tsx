import { type PropsWithChildren } from 'react'

const Block: React.FC<PropsWithChildren> = (props: PropsWithChildren) => {
  const colors = [
    Math.random() * 80,
    Math.random() * 80 + 80,
    Math.random() * 80 + 170
  ]
    .sort((a, b) => (Math.random() > 0.5 ? a - b : b - a))
    .join(',')

  return (
    <div
      style={{
        width: '80vw',
        backgroundColor: `rgb(${colors})`,
        margin: '10px',
        padding: '10px'
      }}
    >
      {props.children}
    </div>
  )
}

export default Block
