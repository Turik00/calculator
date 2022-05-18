export const JSONStringifyFn = (obj: any) => { return JSON.stringify(obj, (key, value) => {
    var fnBody;
    if (value instanceof Function || typeof value == 'function') {

      fnBody = value.toString();

      if (fnBody.length < 8 || fnBody.substring(0, 8) !== 'function') { //this is ES6 Arrow Function
        return '_NuFrRa_' + fnBody;
      }
      return fnBody;
    }
    if (value instanceof RegExp) {
      return '_PxEgEr_' + value;
    }
    return value;
  });
}