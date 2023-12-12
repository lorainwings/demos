const buttonEle = document.getElementById('button')

buttonEle.onclick = function () {
  import('./test').then((module) => {
    const print = module.default
    print()
  })
}
buttonEle.ondoubleclick = function () {
  import('./test1').then((module) => {
    const print = module.default
    print()
  })
}
