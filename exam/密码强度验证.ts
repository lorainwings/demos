
/**
 * 要求匹配密码包含 '数字' / '大小写字母' / '特殊字`~!@#$%^&*()_+-=' 中的三种字符，且密码长度至少为 8 位。
 * @param  {string} password  密码
 * @return {boolean} 密码是否符合要求
 */
function validatePassword(password: string): boolean {
  return /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[-`~!@#$%^&*()_+='])[a-zA-Z0-9[-`~!@#$%^&*()_+=']{8,}$/gi.test(password)
}
