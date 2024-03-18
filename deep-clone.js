function deepClone(obj) {
  // obj == null
  // 相当于
  // if (obj === null  || obj === undefined) {}
  if (typeof obj !== 'object' || obj == null ) {
    return obj
  }

  let result 
  if (obj instanceof Array) {
    result = []
  } else {
    result = {}
  }

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      return deepClone(obj[key])
    }
  }

  return result
}
