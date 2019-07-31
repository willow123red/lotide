const countOnly = function (allItems, itemsToCount) {
  const result = {}

  for (var item of allItems) {
    if (itemsToCount[item] === true) {
      if (result[item]) result[item]++;
       else result[item] = 1;
    }
  }
  return result;
};
