function groupBy(arr, key) {
  return arr.reduce((acc, item) => {
    const group = item[key]; 
    if (!acc[group]) {
      acc[group] = [];
    }
    acc[group].push(item);
    return acc;
  }, {});
}

// Example use:
const data = [
  { name: "Niloy", category: "A" },
  { name: "Rafi", category: "B" },
  { name: "Sumi", category: "A" }
];

console.log(groupBy(data, "category"));
