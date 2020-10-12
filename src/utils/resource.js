/*
 * @Author: sally
 * @Date: 2020-08-25 15:07:39
 * @LastEditTime: 2020-08-25 15:26:59
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \safe\src\utils\resource.js
 */
import axios from "axios";
const requestService = axios.create({
  timeout: 5000
});

// respone interceptor
requestService.interceptors.response.use(
  response => {
    if (response.status === 200) {
      return response.data;
    } else {
      return Promise.reject(response);
    }
  },
  error => {
    console.error("[response error]: ", error);
    return Promise.reject(error);
  }
);

export default requestService;
