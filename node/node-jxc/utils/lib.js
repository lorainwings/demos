/*
 * @Author: lorain lorainwings@gmail.com
 * @Date: 2022-08-24 21:30:27
 * @LastEditors: lorain lorainwings@gmail.com
 * @LastEditTime: 2022-08-24 21:35:34
 * @FilePath: /demos/node/node-jxc/utils/lib.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const cookieToJson = (cookie) => {
  if (typeof cookie !== 'string') return new Error(`cookie isn't string!`)
  const carrs = cookie.split(';')
  return carrs.reduce((o, item) => {
    const [k, v] = item.split('=')
    return o[k.trim()] = v.trim(), o
  }, {})
}


module.exports = {
  cookieToJson
}
