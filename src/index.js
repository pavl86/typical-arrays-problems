
exports.min = function min (array) {
    
  return array && array.length ? Math.min(...array) : 0;
};

exports.max = function max (array) {
    return array && array.length ? Math.max(...array) : 0;
};

exports.avg = function avg (array) {
    let result = 0;
    if (array && array.length) {
        for (let i = 0; i < array.length; i++) {
            result = result + array[i];
        }
        result = result / array.length;
    }
  return result;
};
