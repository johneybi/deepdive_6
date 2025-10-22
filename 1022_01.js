const numbers = [3, 17, 21, 30, 9]
let result = 0;

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i])
    result += numbers[i]
}


console.log(`${numbers}의 총 합은 ${result}입니다.`)


const str = "Hello World"
console.log(str.length)


let sum = 0;
for (const number of numbers) {
    sum += number
}

console.log(`${numbers}의 총 합은 ${sum}입니다.`)