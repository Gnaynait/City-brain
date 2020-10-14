/*
 * @Author: sally
 * @Date: 2020-08-17 16:45:49
 * @LastEditTime: 2020-10-14 19:29:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \safe\src\utils\util.js
 */
export const transPx2Rem=(px)=> {
  const h = document.querySelector('html')
  const [fs, other] = getComputedStyle(h, null)['fontSize'].split('px')
  const rate = fs / 100
  return px / rate
}
export const setSession = (key, val) => {
  window.sessionStorage.setItem(key, JSON.stringify(val))
}
export const getSession = (key) => {
  return JSON.parse(window.sessionStorage.getItem(key)) || undefined
}
export function deepClone(target) {
  // 定义一个变量
  let result
  // 如果当前需要深拷贝的是一个对象的话
  if (typeof target === 'object') {
    // 如果是一个数组的话
    if (Array.isArray(target)) {
      result = [] // 将result赋值为一个数组，并且执行遍历
      for (let i in target) {
        // 递归克隆数组中的每一项
        result.push(deepClone(target[i]))
      }
      // 判断如果当前的值是null的话；直接赋值为null
    } else if (target === null) {
      result = null
      // 判断如果当前的值是一个RegExp对象的话，直接赋值
    } else if (target.constructor === RegExp) {
      result = target
    } else {
      // 否则是普通对象，直接for in循环，递归赋值对象的所有值
      result = {}
      for (let i in target) {
        result[i] = deepClone(target[i])
      }
    }
    // 如果不是对象的话，就是基本数据类型，那么直接赋值
  } else {
    result = target
  }
  // 返回最终结果
  return result
}
var SIGN_REGEXP = /([yMdhsm])(\1*)/g
var DEFAULT_PATTERN = 'yyyy-MM-dd'

function padding(s, len) {
  let lens = len - (s + '').length
  for (let i = 0; i < lens; i++) {
    s = '0' + s
  }
  return s
}
//阻止冒泡
export function clearEventBubble(e) {
  if (e.stopPropagation) e.stopPropagation()
  else e.cancelBubble = true
  if (e.preventDefault) e.preventDefault()
  else e.returnValue = false
}
//获取样式
export function getStyle(obj, styleName) {
  if (obj.currentStyle) {
    return obj.currentStyle[styleName]
  } else {
    return getComputedStyle(obj, null)[styleName]
  }
}
//顶层边距
export function GetPosition(obj) {
  let left = 0
  let top = 0
  while (obj.offsetParent) {
    left += obj.offsetLeft
    top += obj.offsetTop
    obj = obj.offsetParent
  }
  return { left, top }
}

export const getQueryStringByName = function(name) {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
  var r = window.location.search.substr(1).match(reg)
  var context = ''
  if (r != null) context = r[2]
  reg = null
  r = null
  return context == null || context == '' || context == 'undefined'
    ? ''
    : context
}
export const trim = function(s) {
  return s.replace(/(^\s*)|(\s*$)/g, '')
}
export const formatDate = {
  format: function(date, pattern) {
    pattern = pattern || DEFAULT_PATTERN
    return pattern.replace(SIGN_REGEXP, function($0) {
      switch ($0.charAt(0)) {
        case 'y':
          return padding(new Date(date).getFullYear(), $0.length)
        case 'M':
          return padding(new Date(date).getMonth() + 1, $0.length)
        case 'd':
          return padding(new Date(date).getDate(), $0.length)
        case 'w':
          return new Date(date).getDay() + 1
        case 'h':
          return padding(new Date(date).getHours(), $0.length)
        case 'm':
          return padding(new Date(date).getMinutes(), $0.length)
        case 's':
          return padding(new Date(date).getSeconds(), $0.length)
      }
    })
  },
  parse: function(dateString, pattern) {
    var matchs1 = pattern.match(SIGN_REGEXP)
    var matchs2 = dateString.match(/(\d)+/g)
    if (matchs1.length == matchs2.length) {
      var _date = new Date(1970, 0, 1)
      for (var i = 0; i < matchs1.length; i++) {
        var _int = parseInt(matchs2[i])
        var sign = matchs1[i]
        switch (sign.charAt(0)) {
          case 'y':
            _date.setFullYear(_int)
            break
          case 'M':
            _date.setMonth(_int - 1)
            break
          case 'd':
            _date.setDate(_int)
            break
          case 'h':
            _date.setHours(_int)
            break
          case 'm':
            _date.setMinutes(_int)
            break
          case 's':
            _date.setSeconds(_int)
            break
        }
      }
      return _date
    }
    return null
  },
}

export const isObject = function(params) {
  return typeof params === 'object' && params !== null
}

export const isArray = function(params) {
  return params instanceof Array
}
export const isString = function(params) {
  return typeof params === 'string'
}
export const isNumber = function(params) {
  return typeof params === 'number'
}
export const isBoolean = function(params) {
  return typeof params === 'boolean'
}
export const isUndefined = function(params) {
  return params === undefined
}
export const isFunction = function(params) {
  return typeof params === 'function'
}
export const isNullOrUndefined = function(params) {
  return params == null
}
export const isError = function(params) {
  return params instanceof Error
}
export const isInArray = function(arr, value) {
  for (var i = 0; i < arr.length; i++) {
    if (value === arr[i]) {
      return true
    }
  }
  return false
}
export class WaitUntil {
  constructor({ condition, callback, timeout }) {
    this._condition = condition
    this._callback = callback
    this._timeout = timeout ? timeout : 150
    this.wait()
  }

  wait() {
    clearTimeout(this._handle)
    this._handle = setTimeout(() => {
      if (this._condition()) {
        this._callback()
      } else {
        clearTimeout(this._handle)
        this.wait()
      }
    }, this._timeout)
  }

  kill() {
    clearTimeout(this._handle)
  }
}

//数组去重
export const uniqueArr = function(arr, key) {
  var temp = []
  arr.map((item) => {
    let flag = true
    temp.map((tempItem) => {
      if (item[key] == tempItem[key]) {
        flag = false
      }
    })
    if (flag) {
      temp.push(item)
    }
  })
  return temp
}

export const getWindowWidth = () => {
  return window.innerWidth
}
export const getWindowHeight = () => {
  return window.innerHeight
}
