import { useEffect } from 'react'
import _ from 'lodash'

const Page1 = () => {
  console.log($)
  console.log(React)
  const [num, setNum] = React.useState

  useEffect(() => {
    console.log('%c------>[LOG:]lifecycle', 'color: fuchsia')
  })

  return (
    <div>
      <div>Page1</div>
      <div>{num}</div>
    </div>
  )
}

export default Page1
