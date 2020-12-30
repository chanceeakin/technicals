// your task is to turn an object into an array


export function objectToArray(obj: any): any {
  return Object.entries(obj)
}



export function arrayToObject(arr: any): any {
  const obj = {}
  // @ts-ignore
  arr.forEach(([key, value]: [string, string]) => {
  // [key, value]
  // @ts-ignore
  obj[key] = value
  })
  return obj
}

