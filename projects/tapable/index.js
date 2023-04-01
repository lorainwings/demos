const { AsyncParallelBailHook } = require('tapable')

const hook = new AsyncParallelBailHook(['author', 'age']) //先实例化，并定义回调函数的形参

/* 注意:
    AsyncParallelBailHook钩子, callAsync后所有异步钩子函数全部并发执行

    当中间的钩子callback返回返回了非undefined值的时候, 最终的callAsync回调会立即执行, 表示任务完成

    但由于并发的异步任务, 所以后续的异步任务t3也将继续执行
*/

console.time('time')
//异步钩子需要通过tapAsync函数注册事件,同时也会多一个callback参数，执行callback告诉hook该注册事件已经执行完成
hook.tapAsync('t1', (param1, param2, callback) => {
  console.log('t1')
  setTimeout(() => {
    console.log('测试1接收的参数：', param1, param2)
    callback()
  }, 1000)
})

hook.tapAsync('t2', (param1, param2, callback) => {
  console.log('t2')
  setTimeout(() => {
    console.log('测试2接收的参数：', param1, param2)
    // 第一个参数是错误err, 第二个参数才是接受的参数
    callback(null, '测试2有返回值啦')
  }, 2000)
})

hook.tapAsync('t3', (param1, param2, callback) => {
  console.log('t3')
  setTimeout(() => {
    console.log('测试3接收的参数：', param1, param2)
    callback(null, '测试3有返回值啦')
  }, 3000)
})

hook.callAsync('不要秃头啊', '99', (err, result) => {
  //等全部都完成了才会走到这里来
  console.log('这是成功后的回调', result)
  console.timeEnd('time')
})

/* const accelerate = new AsyncParallelBailHook(['newSpeed'])

console.time('total time') // 记录起始时间

accelerate.tapAsync('LoggerPlugin', (newSpeed, done) => {
  // 1秒后加速才完成
  setTimeout(() => {
    console.log('LoggerPlugin', `加速到${newSpeed}`)

    done()
  }, 1000)
})

accelerate.tapAsync('OverspeedPlugin', (newSpeed, done) => {
  // 2秒后检测是否超速
  setTimeout(() => {
    if (newSpeed > 120) {
      console.log('OverspeedPlugin', '您已超速！！')
    }

    // 这个任务的done返回一个错误
    // 注意第一个参数是node回调约定俗成的错误
    // 第二个参数才是Bail的返回值
    done(null, new Error('您已超速！！'))
  }, 2000)
})

accelerate.tapAsync('DamagePlugin', (newSpeed, done) => {
  // 3秒后检测是否损坏
  setTimeout(() => {
    if (newSpeed > 300) {
      console.log('DamagePlugin', '速度实在太快，车子快散架了。。。')
    }

    done()
  }, 3000)
})

accelerate.callAsync(500, (error, data) => {
  if (data) {
    console.log('任务执行出错：', data)
  } else {
    console.log('任务全部完成')
  }
  console.timeEnd('total time') // 记录总共耗时
}) */

