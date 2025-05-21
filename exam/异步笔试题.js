var a;

var b = new Promise((resolve) => {
  console.log('promise 1')

  setTimeout(() => {
    resolve()
  }, 1000)
}).then(() => {
  console.log('promise 2')
}).then(() => {
  console.log('promise 3')
}).then(() => {
  console.log('promise 4')
})


a = new Promise(async (resolve) => {
  console.log(a)
  await b;
  console.log('promise 5')
  console.log('after1')
  console.log(a)
  await a;
  resolve(true)
  console.log('after2')
})


console.log('end')

// 'promise 1 '=>' undefined'=> "end" => 'promise 2' => 'promise 3' => 'promise 4' => 'promise 5' => "after1" => Promise{<pending>}
