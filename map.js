const map = function(array, callback) {
  const results = [];
  for (const element of array) {
    results.push(callback(element));
  };
  return results;
};

module.exports = map;
