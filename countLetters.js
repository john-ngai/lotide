const countLetters = (string) => {
  const results = {};
  for (const element of string) {
    if (element !== ' ') {
      if (!results[element]) {
        results[element] = 1;
      } else {
        results[element] += 1;
      }
    }
  }
  return results;
}

module.exports = countLetters;
