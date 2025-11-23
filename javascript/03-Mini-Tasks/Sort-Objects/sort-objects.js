const employees = [
  { id: 1, name: "Niloy", role: "Frontend Developer", salary: 55000, experience: 1.2 },
  { id: 2, name: "Arif", role: "Backend Developer", salary: 75000, experience: 2 },
  { id: 3, name: "Rafi", role: "Fullstack Developer", salary: 90000, experience: 3.5 },
  { id: 4, name: "Mehedi", role: "UI/UX Designer", salary: 45000, experience: 1 },
  { id: 5, name: "Shanto", role: "Frontend Developer", salary: 60000, experience: 2.5 }
];


// sort by salary (high > low)
function sortBySalary(data) {
    return [...data].sort((a, b) => b.salary - a.salary);
}


// filter frontend developers 
function filterFrontend(data) {
    return data.filter(emp => emp.role.toLowerCase().includes("frontend"));
}

// search by name (case insensitive)
function searchEmployee(data, keyword) {
  return data.filter(emp =>
    emp.name.toLowerCase().includes(keyword.toLowerCase())
  );
}

// sort by exprience (low > high)
function sortByExperience(data) {
  return [...data].sort((a, b) => a.experience - b.experience);
}

// combined operation: search + filter + sort
function findTopExperiencedFrontend(data) {
  return data
    .filter(emp => emp.role.includes("Frontend"))
    .sort((a, b) => b.experience - a.experience);
}
