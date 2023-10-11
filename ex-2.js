//Exercise #2: At Least Five Function

function atLeastFive(array, operation) {
  // Start coding here
  let count = 0;
  for (let i=0; i < array.length; i++){
    if(array[i] >= 70){
      count = count + 1;
     }
    //console.log(array[i] + " in Rount "+ (i+1) + " : count = " + count); //show ค่าของ array และ การนับ count
  }
//console.log("\nSummary Count = "+ count+"\n") //จำนวนนักเรียนที่มีคะแนนมากกว่าหรือเท่ากับ 5
return operation(count);
}

const count = (num) => {
  return num >= 5? true:false;
}


const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

// Using `atLeastFive` function here

let scoreRoom1Result = atLeastFive(studentScoresRoom1,count);
let scoreRoom2Result = atLeastFive(studentScoresRoom2,count);
let scoreRoom3Result = atLeastFive(studentScoresRoom3,count);

console.log(scoreRoom1Result);
console.log(scoreRoom2Result);
console.log(scoreRoom3Result);