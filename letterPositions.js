const letterPositions = function (string) {
  const result = {};
  for (let index = 0; index < string.length; index++) {
    const char = string[index]
    if (char === " ") {
      continue;
    }
    if (result[char] !== undefined) {
      result[char].push(index);
    } else {
      result[char] = [index];
    }
  }
  return result;
};