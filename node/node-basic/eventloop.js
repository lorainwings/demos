// 案例一
// 同步代码->微任务->逐一切换宏任务队列执行

/* setImmediate(()=>{
  console.log("sm1")

  Promise.resolve().then(() => {
    console.log("sm1->p")
  })

  process.nextTick(() => {
    console.log("sm1->tick")
  })

})

setImmediate(()=>{
  console.log("sm2")

  Promise.resolve().then(() => {
    console.log("sm2->p")
  })

  process.nextTick(() => {
    console.log("sm2->tick")
  })

})

setTimeout(()=>{
  console.log('s1')

  Promise.resolve().then(() => {
    console.log("s1->p")
  })

  process.nextTick(() => {
    console.log("s1->tick")
  })

})

setTimeout(()=>{
  console.log('s2')

  Promise.resolve().then(() => {
    console.log("s2->p")
  })

  process.nextTick(() => {
    console.log("s2->tick")
  })

})

Promise.resolve().then(() => {
  console.log("p1")
})

console.log('start')

process.nextTick(() => {
  console.log("tick")
})


console.log('end') */

/*
node11+:

start
end
tick
p1
s1
s1->tick
s1->p
s2
s2->tick
s2->p
sm1
sm1->tick
sm1->p
sm2
sm2->tick
sm2->p

*/

/*
node10-:

start
end
tick
p1
s1
s2
s1->tick
s2->tick
s1->p
s2->p
sm1
sm2
sm1->tick
sm2->tick
sm1->p
sm2->p

*/




// 案例二
//


setTimeout(() => {
  console.log('settimeout')
});

setImmediate(() => {
  console.log('setImmediate')
});
