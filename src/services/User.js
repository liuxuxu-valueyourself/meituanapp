import axios from 'axios'

/**
 * 登录
 * @param {*} name 用户名 
 * @param {*} pwd 密码
 */
export async function login(name,pwd) {
  const res = await axios.get('http://open.duyiedu.com/api/meituan/login',{
    params:{
      userName:name,
      password:pwd,
      appkey:'xuxu_hbz_1581051267609'
    }
  })
  return res.data;
}
/**
 * 注册
 */
export async function reg(name,pwd) {
  const res = await axios.get('http://open.duyiedu.com/api/meituan/register',{
    params:{
      userName:name,
      password:pwd,
      rePassword:pwd,
      appkey:'xuxu_hbz_1581051267609'
    }
  })
  return res.data;
}