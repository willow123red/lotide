const countLetters = function (string) {
  const result = {};
  for (let char of string) {
    if (char === " ") { continue; }
    if (result[char] !== undefined) {
      result[char]++;
    } else { 
      result[char] = 1;
    }
  }
  return result;
};
