import { useState } from 'react'
import type { ChangeEvent, MouseEvent } from 'react'

const Event = () => {
  const [v, setV] = useState('hello')

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => { console.log('-', event) }

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => { console.log('-',event)}

  return (
    <>
      <input value={v} onChange={handleChange} />
      <button onClick={handleClick}>Click me!</button>
    </>
  )
}

export default Event
