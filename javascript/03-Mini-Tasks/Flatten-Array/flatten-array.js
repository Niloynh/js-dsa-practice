function flattenArray(arr) {
  const result = [];

  function helper(a) {
    for (let item of a) {
      if (Array.isArray(item)) {
        helper(item);
      } else {
        result.push(item);
      }
    }
  }

  helper(arr);
  return result;
}

console.log(flattenArray([1, [2, 3], [4, [5]]])); 
// Output: [1, 2, 3, 4, 5]
