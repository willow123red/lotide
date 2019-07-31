const without = function (source, itemsToRemove) {
  const results = [];
  for (let i = 0; i < source.length; i++) {
    const removableItems = source[i];
    if (!itemsToRemove.includes(removableItems)) {
      results.push(removableItems);
    }
  }
  return results;
};