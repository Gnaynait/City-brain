/*
 * @Author: your name
 * @Date: 2020-08-19 18:59:10
 * @LastEditTime: 2020-08-19 19:28:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \safe\src\api\weather.js
 */
import { getAction } from '@/api/manage'
const W_URL = 'https://devapi.heweather.net/v7/weather/now'
const W_KEY = 'f2921415d1cb438ebcf4435118aa7a64'
const D_URL = 'https://geoapi.heweather.net/v2/city/lookup'
// export const getWeather = async (cityString) => {
//   try {
//     const dres = await getAction(`${D_URL}?key=${W_KEY}&location=${cityString}`)
//     if (dres.status === '200') {
//       const searchId = dres.location[0].id
//       const res = await getAction(`${W_URL}?key=${W_KEY}&location=${searchId}`)
//       if (res.code === '200') {
//         return res.now
//       } else {
//         return Promise.reject('获取天气失败')
//       }
//     } else {
//       return Promise.reject('获取地区失败')
//     }
//   } catch (error) {
//     return Promise.reject('请求接口失败')
//   }
// }
export const getWeather = async (cityString) =>{
  try {
    const dres = await getAction(`${D_URL}?key=${W_KEY}&location=${cityString}`)
    if(dres.status !== '200'){
      return Promise.reject('获取地区失败')
    }
    
    const searchId = dres.location[0].id
    const res = await getAction(`${W_URL}?key=${W_KEY}&location=${searchId}`)
    if(res.status !=='200'){
      return Promise.reject('获取天气失败')
    }

    return res.now

  } catch (error) {
    return Promise.reject('请求接口失败')
  }
}