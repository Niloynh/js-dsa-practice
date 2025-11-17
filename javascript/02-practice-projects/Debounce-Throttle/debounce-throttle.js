// Debounce function
function debounce(func, delay) {
  let timer;

  return function (...args) {
    console.log("Typing detected...");

    clearTimeout(timer);

    timer = setTimeout(() => {
      console.log("Debounce triggered");
      func.apply(this, args);
    }, delay);
  };
}

// Dummy database
const skills = [
  "JavaScript",
  "React",
  "Node.js",
  "Next.js",
  "MongoDB",
  "CSS",
  "HTML",
  "TypeScript",
  "Tailwind"
];

// Main search function
function handleSearch(e) {
  const text = e.target.value.toLowerCase();
  const output = document.getElementById("output");

  console.time("searchTime");

  if (!text) {
    output.textContent = "Waiting...";
    console.timeEnd("searchTime");
    return;
  }

  const filtered = skills.filter(item =>
    item.toLowerCase().includes(text)
  );

  output.textContent = filtered.length
    ? filtered.join(", ")
    : "No results found";

  console.timeEnd("searchTime"); // time log
}

// Attach event (500ms debounce)
const input = document.getElementById("searchInput");
input.addEventListener("input", debounce(handleSearch, 500));
