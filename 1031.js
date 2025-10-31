// 1. sum()함수(두수의 합 반환)를 함수 선언식으로 만드시오.
// 2. div()함수(두수의 나눈값의 몫을 반환)를 함수 표현식으로 만드시오. (function 사용)
// 3. remianer()함수(두수의 나눈값의 나머지를 반환)를 화살표 함수로 만드시오.

// 1. 함수 선언식
function sum(a, b) {
    return a + b;
}

// 2. 함수 표현식
const div = function(a, b) {
    return Math.trunc(a / b);
}

// 3. 화살표 함수
const remainder = (a, b) => {
    return a % b;
}

console.log(sum(10, 3));     
console.log(div(10, 3));    
console.log(remainder(10, 3)); 


//설명 : 예를들어 5, 10 입력시 '5' 출력, 10, 3 입력시 '7' 출력 주의 : 음수값이 아닌 두 수의 차이만 구하시오. 힌트 : Math.abs() 를 알아보고 이용하여 문제를 풀어주세요

function difference(a, b) {
    return Math.abs(a - b);
}

console.log(difference(5, 10));
console.log(difference(10, 3));


//설명 : 태어난 연도를 입력받아 그 사람의 현재 (만)나이를 반환하는 함수를 만드세요 주의 : 현재 연도인 2025를 직접입력하거나 new Date().getFullYear() 를 공부하여 사용하세요.

function calculateAge(birthYear) {
    const currentYear = new Date().getFullYear();
    return currentYear - birthYear;
}

let birthYear = 2000;
let age = calculateAge(birthYear);
console.log(`Birth Year: ${birthYear}, Age: ${age}`);   


//설명 : 두 수를 입력받아 나눈 값의 몫만 반환하세요 주의 : 나머지는 버립니다. Math.floor() 를 알아보고 이용하여 문제를 풀어주세요

function quotient(a, b) {
    return Math.floor(a / b);
}

console.log(quotient(10, 3));   // 출력: 3
console.log(quotient(20, 2));   // 출력: 10


//설명 : 주어진 배열안의 원소들의 평균값을 구하여 반환하는 함수를 만드세요 주의 : reduce()를 공부하거나, for문으로 작성하세요(둘중 어떤것을해도 무방) 예시 : getAverage(numbers) 를 호출했을경우, 평균값은 6 이 된다. 평균 = 총합 / 배열원소개수

const numbers = [3, 5, 10, 2, 6, 7, 9];
function getAverage(arr) {
    const sum = arr.reduce((acc, curr) => acc + curr, 0);
    return sum / arr.length;
}

console.log(getAverage(numbers)); // 출력: 6
console.log(getAverage([1, 2, 3, 4, 5])); // 출력: 3