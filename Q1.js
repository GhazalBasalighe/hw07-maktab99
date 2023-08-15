const salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

function topsalary() {
  let maxSalary = 0;
  for (const [person, salary] of Object.entries(salaries)) {
    // console.log(`${person} has ${salary} salary`);
    maxSalary = maxSalary < salary ? salary : maxSalary;
  }
  return maxSalary;
}
const topSalaryInvoke = topsalary();
console.log(topSalaryInvoke);
