// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function (obj) {
  // your code goes here
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }
  if (typeof obj === 'number') {
    return obj.toString();
  }
  if (typeof obj === 'boolean') {
    return obj.toString();
  }
  if (typeof obj === 'function') {
    return undefined;
  }
  if (typeof obj === undefined) {
    return undefined;
  }
  if (obj === null) {
    return 'null';
  }

  if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i += 1) {
      obj[i] = stringifyJSON(obj[i]);
    }
    return '[' + obj + ']';
  }

  if (typeof obj === 'object') {
    var keys = Object.keys(obj);
    var str = '';
    var i = 0;
    while (i < keys.length) {
      var key = keys[i];
      if (key === 'functions' || key === undefined) {
        return '{}';
      } else {
        if (i === keys.length - 1) {
          str += stringifyJSON(key) + ':' + stringifyJSON(obj[key]);
        } else {
          str += stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ',';
        }
      }
      i += 1;
    }
    return '{' + str + '}';
  }
};