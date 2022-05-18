/* eslint-disable no-restricted-globals */
self.onmessage = (e) => {
  const action = JSONParseFn(e.data.action);
  action(e.data.state, e.data.key);
  self.postMessage(e.data.state);
};

const JSONParseFn = (str) => {
  return JSON.parse(str, (key, value) => {
    var prefix;

    if (typeof value != 'string') {
      return value;
    }
    if (value.length < 8) {
      return value;
    }

    prefix = value.substring(0, 8);

    if (prefix === 'function') {
      return eval('(' + value + ')');
    }
    if (prefix === '_PxEgEr_') {
      return eval(value.slice(8));
    }
    if (prefix === '_NuFrRa_') {
      return eval(value.slice(8));
    }

    return value;
  });
};
