const a = 5;
const b = 99;
const result = a % 2 === 0 ? '짝수' : '홀수';
console.log(result);


const compare = a > b ? '크다' : '작다';
console.log(`${a}는 ${b}보다 ${compare}`);

function check(number) {
    const isOver = number > 10 ? '크다' : '작다';
    console.log(`${number}는 10보다 ${isOver}`)
}

check('12')


function measure(x, y) {
    const size = x * y
    console.log(`사각형의 크기는 ${size} 입니다.`)
}

measure(10, 20)


function isAdult(name, age) {
    const isAdult = age >= 18 ? '성인' : '미성년자'
    console.log(`${name}님은 ${isAdult}입니다.`)
}

isAdult('홍길동', 20)

function getAverage(x, y, z) {
    const average = (x + y + z) / 3
    console.log(`당신의 평균점수는 ${average} 입니다.`)
}

getAverage(88, 70, 94)

function checkLogin(id, pw) {
    const trueId = 'admin'
    const truePw = 1234;
    const message = (id === trueId && pw === truePw) ? '로그인 성공' : '로그인 실패'
    console.log(`${id}님, ${message}했습니다.`)
}

checkLogin('admin', 1234)
checkLogin('ghost', 123)