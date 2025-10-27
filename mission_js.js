const numbers = [3, 17, 21, 30, 9]
const str = 'Hello World'

//Q1. 홀수만 출력하기

for (const number of numbers) {
    if (number % 2 === 1) {
        console.log(number)
    }
}

//Q2. 길이 출력하기

console.log(str.length)

//Q3. 총합 구하기

let sum = 0;
for (const number of numbers) {
    sum += number
}

console.log(sum)

//Q4. 20 이상인 수의 개수를 출력하기

let count = 0;
for (const number of numbers) {
    if (number >= 20) {
        count++
    }
}

console.log(count)