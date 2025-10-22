const math = 80;

let result = math >= 65? 'Pass' : 'Fail';
console.log(result);

const eng = 40;

if(eng >= 65) {
    result = 'Pass';
} else {
    result = 'Fail';
}

console.log(`English : ${result}`)



const average = (math + eng) / 2;


if(average >= 90) {
    result = 'A';
} else if(average >= 80) {
    result = 'B';
} else if(average >= 70) {
    result = 'C';
} else if(average >= 60) {
    result = 'D';
} else {
    result = 'F';
}

console.log(`최종학점 : ${result}`)