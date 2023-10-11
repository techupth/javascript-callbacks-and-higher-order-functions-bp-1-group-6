// Exercise #1: For Each Function

function forEach(array,operation) {
  // Start coding here
  const salary = [];
  for (let i=0; i < array.length; i++){
    if (operation(array[i])){
      salary.push(operation(array[i]));
    };
  }
  return salary
}

function newSalary(old) {
  return old + 5000;
}

const employeeSalaries = [20005, 40000, 32000, 14500, 344000];
const newEmployeeSalaries = forEach(employeeSalaries,newSalary);
// Using `forEach` function here
console.log(newEmployeeSalaries); // [25005, 45000, 37000, 19500, 349000]