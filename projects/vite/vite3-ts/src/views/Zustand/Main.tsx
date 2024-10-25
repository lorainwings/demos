// zustand
import { useBoundStore } from '@/zustand-store'

type Props = {
  onClick: () => void
  children: string
}

function Button({ onClick, children }: Props) {
  return <button onClick={onClick}>{children}</button>
}

function DeepChild() {
  const { count, increaseCount, resetCount } = useBoundStore<CountState>(
    (state) => state
  )
  return (
    <div>
      <h3>DeepChild</h3>
      <p>Count:{count}</p>
      <Button onClick={() => increaseCount(1)}>increase</Button>
      <Button onClick={resetCount}>reset</Button>
    </div>
  )
}

const Child = function Child() {
  return (
    <div>
      <h2>Child</h2>
      <DeepChild />
    </div>
  )
}

function ParentOne() {
  const { count } = useBoundStore<CountState>((state) => state)
  console.log('ParentOne render')
  return (
    <div style={{ border: 'solid 1px black' }}>
      <h1>Here is Parent One</h1>
      <p>Count:{count}</p>
      <Child />
    </div>
  )
}
function ParentTwo() {
  console.log('ParentTwo render')
  const { number, increaseNumber, resetNumber } = useBoundStore<NumberState>(
    (state) => state
  )
  return (
    <div style={{ border: 'solid 1px black' }}>
      <h1>Here is Parent Two</h1>
      <p>Number:{number}</p>
      <Button onClick={() => increaseNumber(1)}>increase</Button>
      <Button onClick={resetNumber}>reset</Button>
    </div>
  )
}

export function Main() {
  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      <ParentOne />
      <ParentTwo />
    </div>
  )
}
