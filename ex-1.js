// Exercise #1: For Each Function

function forEach(array, operation) {
  // Start coding here
  for (let i = 0; i < array.length; i++) {
    const currentSalary = array[i];
    const newSalary = operation(currentSalary);
    newEmployeeSalaries.push(newSalary);
  }
}

const employeeSalaries = [20005, 40000, 32000, 14500, 344000];
const newEmployeeSalaries = [];

// Using `forEach` function here
// สร้าง Callback Function ที่จะเพิ่มเงินเดือนไป 5000 บาท
function increaseSalary(salary) {
  return salary + 5000;
}
// ใช้ forEach เพื่อปรับเงินเดือนของพนักงานและบันทึกเงินเดือนใหม่ลงใน newEmployeeSalaries
forEach(employeeSalaries, increaseSalary);

console.log(newEmployeeSalaries); // [25005, 45000, 37000, 19500, 349000]
