//Exercise #2: At Least Five Function

function atLeastFive(array, operation) {
  // Start coding here
  const count = array.filter(operation).length;
  return count >= 5;
}

const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

// Using `atLeastFive` function here
// สร้าง Callback Function ที่ตรวจสอบคะแนนมากกว่า 70
function checkAbove70(score) {
  return score > 70;
}

let scoreRoom1Result;
let scoreRoom2Result;
let scoreRoom3Result;

// ใช้ atLeastFive เพื่อตรวจสอบคะแนนของนักเรียนแต่ละห้อง
scoreRoom1Result = atLeastFive(studentScoresRoom1, checkAbove70);
scoreRoom2Result = atLeastFive(studentScoresRoom2, checkAbove70);
scoreRoom3Result = atLeastFive(studentScoresRoom3, checkAbove70);

console.log("Room 1:", scoreRoom1Result);
console.log("Room 2:", scoreRoom2Result);
console.log("Room 3:", scoreRoom3Result);