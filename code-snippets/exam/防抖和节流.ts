
/**
 * 防抖函数主要的作用是在函数被频繁调用时，只在最后一次调用后才执行，防止函数被多次调用，节省资源。
 *
 * @param f 需防抖的函数
 * @param delay 延迟时间
 */

function debounce(f, delay) {
  let timer: null | NodeJS.Timeout = null
  // 将this放在函数参数列表上声明类型即可，使用的时候this不会干扰形参传入顺序
  return function (this: any, ...args) {
    const _t = this
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      f.call(_t, ...args)
    }, delay)
  }
}

/**
 * 节流函数的作用是控制函数的执行频率, 防止函数被频繁调用
 *
 * @param f 需节流的函数
 * @param delay 延迟时间
 */
// 方式一  第一次不执行(时间戳)
function throttle(f, delay) {
  let time = Date.now()
  return function (this: any, ...args) {
    const _t = this
    if (Date.now() - time > delay) {
      f.call(_t, ...args)
      time = Date.now()
    }
  }
}

// 方式一  第一次不执行(定时器)
function throttle1(f, delay) {
  let timer: null | NodeJS.Timeout = null
  return function (this: any, ...args) {
    const _t = this
    if (timer) return
    timer = setTimeout(() => {
      f.call(_t, ...args)
      timer = null
    }, delay)
  }
}


// 方式二  首次会执行(定时器模式)
function throttle2(f, delay) {
  let isThrottle = false
  return function (this: any, ...args) {
    const _t = this
    if (!isThrottle) {
      f.call(_t, ...args)
      isThrottle = true
      setTimeout(() => {
        isThrottle = false
      }, delay)
    }
  }
}

// 方式二 首次会执行(时间戳方式)
function throttle3(func, delay) {
  let lastExecTime = 0;

  return function (this: any, ...args) {
    const currentTime = Date.now();

    if (currentTime - lastExecTime >= delay) {
      func.apply(this, args);
      lastExecTime = currentTime;
    }
  };
}
