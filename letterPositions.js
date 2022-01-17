const letterPositions = (string) => {
  const results = {};
  let count = 0;
  for (const element of string) {
    if (element !== ' ') {
      if (!results[element]) {
        results[element] = [count];
       } else {
         results[element].push(count);
       }
    }
    count++;
  }
  return results;
}

module.exports = letterPositions;
