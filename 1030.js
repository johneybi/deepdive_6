// Morning Mission - 나머지수 구하기

function getRest(num1, num2) {
    // let result = ___
    let result = num1 % num2;
    return result;
}

console.log(getRest(3, 2))
// 3에서 2를 나눈 나머지값 구하기


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// mission 2 - numbers에서 짝수만 출력하시오

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        console.log(numbers[i]);
    }
}

// mission 3 - 주어진 수 이하의 짝수의 합을 구하시오.
function getSumEven(number) {
    // for문 활용
    let sum = 0;
    for (let i = 0; i <= number; i++) {
        if (i % 2 === 0) {
            sum += i;
        }
    }
    return sum;
}


console.log(getSumEven(10))
console.log(getSumEven(7))
console.log(getSumEven(20));