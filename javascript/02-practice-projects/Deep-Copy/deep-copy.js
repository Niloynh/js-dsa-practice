// Deep Copy Examples

const user = {
  name: "Niloy",
  skills: ["JS", "Node"],
  address: { city: "Dhaka", zip: 1200 }
};

// 1. JSON Deep Copy
const deep1 = JSON.parse(JSON.stringify(user));

// 2. StructuredClone
const deep2 = structuredClone(user);

// 3. Manual recursive deep copy
function deepCopy(obj) {
  if (obj === null || typeof obj !== "object") return obj;

  const result = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    result[key] = deepCopy(obj[key]);
  }

  return result;
}

const deep3 = deepCopy(user);
