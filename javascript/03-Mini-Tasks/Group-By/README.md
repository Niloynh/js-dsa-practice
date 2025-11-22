# 📦 groupBy Utility (JavaScript)

A simple and reusable `groupBy()` function that groups array items based on any key.

## 🔧 Function
```js
function groupBy(arr, key) {
  return arr.reduce((acc, item) => {
    const group = item[key];
    (acc[group] ||= []).push(item);
    return acc;
  }, {});
}
