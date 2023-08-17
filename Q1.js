const salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

function topsalary() {
  let maxSalary = 0;
  const topSalaryPeople = []; // Array to store people with top salary

  for (const [person, salary] of Object.entries(salaries)) {
    if (salary > maxSalary) {
      maxSalary = salary;
      topSalaryPeople.length = 0; // Clear the array if a higher salary is found
    }

    if (salary === maxSalary) {
      topSalaryPeople.push(person); // Add person to the array if their salary is the top salary
    }
  }

  return topSalaryPeople;
}

const topSalaryInvoke = topsalary();
console.log(topSalaryInvoke);
