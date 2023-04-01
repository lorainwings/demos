import { useEffect, useState, useCallback } from 'react'
import MouseEvent from 'react'

/* const Example = () => {
  console.log('do render >>')

  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)

  const update = () => {
    console.log('update start')
    setNum1(1)
    console.log('update num1')
    setNum2(2)
    console.log('update num2')
  }

  const asyncUpdate = () => {
    console.log('-----------------------------')
    setTimeout(() => {
      console.log('async update start')
      setNum1(4)
      console.log('async update num1:', num1)
      setNum2(5)
      console.log('async update num2:', num2)
    })
  }

  useEffect(()=>{
    (document.querySelector('#btn-raw') as HTMLElement).addEventListener('click', asyncUpdate)
    return ()=>(document.querySelector('#btn-raw') as HTMLElement).removeEventListener('click', asyncUpdate)
  })

  return (
    <div>
      <p>num1 = {num1}</p>
      <p>num2 = {num2}</p>
      <button onClick={update}>update</button>
      <button id="btn-raw" >asyncUpdate</button>
    </div>
  )
} */

/* function Example() {
  const [a, setA] = useState(1)
  const [b, setB] = useState('b')
  console.log('render')

  function handleClickWithPromise() {
    Promise.resolve().then(() => {
      setA((a) => a + 1)
      setB('bb')
    })
  }

  function handleClickWithoutPromise() {
    setA((a) => a + 1)
    setB('bb')
  }

  return (
    <>
      <button onClick={handleClickWithPromise}>
        {a}-{b} 异步执行
      </button>
      <button onClick={handleClickWithoutPromise}>
        {a}-{b} 同步执行
      </button>
    </>
  )
} */

function Example() {
  const [price, setPrice] = useState(0)

  // 通过JSX button的onClick触发, 这种情况price是非同步更新的
  const handleClickBatch = useCallback((e: React.MouseEvent) => {
    setPrice(Number((e.target as HTMLButtonElement).value) + 10)
    console.log((e.target as HTMLButtonElement).value)

    setTimeout(() => {
      console.log('%c------>[LOG:]', 'color: fuchsia', e)
    }, 1000)
  }, [])

  // 通过原生event listener触发, 这种情况price是同步更新的
  const handleClick = useCallback((e: MouseEvent) => {
    setPrice(Number((e.target as HTMLButtonElement).value) + 10)
    console.log((e.target as HTMLButtonElement).value)
  }, [])

  useEffect(() => {
    ;(document.getElementById('price-control') as HTMLElement).addEventListener(
      'click',
      handleClick
    )
    return () => {
      ;(
        document.getElementById('price-control') as HTMLElement
      ).removeEventListener('click', handleClick)
    }
  }, [handleClick])

  return (
    <div>
      <p> Apple is ${price}</p>
      <button value={price} onClick={handleClickBatch}>
        Add Async
      </button>

      <button id="price-control" value={price}>
        Add sync
      </button>
    </div>
  )
}

export default Example

/* 结论

⭐️ 经过测试React@18以下版本:

  - 不受控的事件回调中, setState是同步更新的, 即界面值和js中的log值是一致的
  - 在受控的回调中, setState是异步批量更新的, js中的log值是上一次的值
  - 不受控的事件回调包括setTimeout/setInterval/Promise.then/addEventListener


⭐️ 在React@18以上的版本:

  - setState均是异步批量更新的


⭐️ 问题: setState既然是异步, 如何获取最新的状态值

  - setState(v => { console.log(v) }) 通过回调方式获取
  - useEffect中的回调也是最新值
  - useRef() 通过这个api来存储变化的值, 随时都是最新值


⭐️ useEffect 与 useLayoutEffect区别

  - useLayoutEffect等里面的代码执行完后才更新视图，会忽略掉setState()的那次更新, DOM操作一般可以放进这个回调
  - useEffect会先更新初始值再更新改变后的随机数。有种一闪而过的感觉

*/
