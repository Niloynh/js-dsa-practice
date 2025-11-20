// Challenge 1: Format current time into "10:35 PM" format

function formatTime(date = new Date()) {
  let hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12 || 12; // convert 0 → 12 (12-hour format)

  return `${hours}:${minutes} ${ampm}`;
}

console.log(formatTime());
// Example Output: 7:40 PM
