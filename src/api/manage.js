/*
 * @Author: your name
 * @Date: 2020-08-19 13:52:03
 * @LastEditTime: 2020-08-25 15:26:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \safe\src\api\manage.js
 */
import resource from "@/utils/resource";
import axios from "@/utils/request";
//post
export function resourceAction(url) {
  return resource({
    url,
    method: "get"
  });
}

export function postAction(url, parameter) {
  console.log("api url::", url);
  return axios({
    url: url,
    method: "post",
    data: parameter
  });
}

//post method= {post | put}
export function httpAction(url, parameter, method) {
  return axios({
    url: url,
    method: method,
    data: parameter
  });
}

//put
export function putAction(url, parameter) {
  return axios({
    url: url,
    method: "put",
    data: parameter
  });
}

//get
export function getAction(url, parameter) {
  console.log("api url::", url);
  return axios({
    url: url,
    method: "get",
    params: parameter
  });
}

//get restful
export function getActionRest(url, { id }) {
  console.log("api url::", url);
  console.log("api id::", id);
  return axios({
    url: `${url}/${id || ""}`,
    method: "get"
  });
}

//deleteAction
export function deleteAction(url, parameter) {
  return axios({
    url: url + "/" + parameter.id,
    method: "delete"
  });
}

export function deleteActionNormal(url, params) {
  return axios({
    url: url,
    method: "delete",
    params
  });
}

export function deleteActionBody(url, params) {
  return axios({
    url: url,
    method: "delete",
    data: params
  });
}
