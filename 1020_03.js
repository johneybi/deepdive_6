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





function isAdult(name, age) {
    const isAdult = age >= 18 ? '성인' : '미성년자'
    console.log(`${name}님은 ${isAdult}입니다.`)
}

isAdult('홍길동', 20)


function checkLogin(id, pw) {
    const trueId = 'admin'
    const truePw = 1234;
    const message = (id === trueId && pw === truePw) ? '로그인 성공' : '로그인 실패'
    console.log(`${id}님, ${message}했습니다.`)
}

checkLogin('admin', 1234)
checkLogin('ghost', 123)




function getRect(width, height) {
    const size = width * height
    console.log(`사각형의 크기는 ${size} 입니다.`)
}

getRect(10, 20)


function getAverage(국어, 영어, 수학) {
    const average = (국어 + 영어 + 수학) / 3
    console.log(`당신의 평균점수는 ${average} 입니다.`)
}

getAverage(88, 70, 94)


function getCircleArea(radius) {
		const size = radius ** 2 * 3.14
		console.log(`원의 넓이는 ${size} 입니다.`)
}

getCircleArea(3)


function calcDiscount(price, discount) {
    const salePrice = price - (price * discount / 100)
    console.log(`판매가 ${price}원에서 ${discount}% 할인된 가격은 ${salePrice} 입니다.`)
}

calcDiscount(10000, 10)


function getRemainder(x, y) {
    const result = x % y
    console.log(`${x}를 ${y}로 나눈 나머지는 ${result} 입니다.`)
}

getRemainder(10, 3) //?


function getRectPerimeter(width, height) {
    const result = width * 2 + height * 2;
    console.log(`가로 ${width}cm, 세로 ${height}cm인 사각형의 둘레는 ${result}cm 입니다.`);
}
getRectPerimeter(10, 3)

function checkPass(score) {
    const result = score >= 60 ? '합격' : '불합격';
    console.log(`${score}점은 ${result}입니다.`);
}
checkPass(50)
checkPass(99)

function canJoinEvent(age, locate) {
    const result = (age >= 20 && locate == '서울') ? '가능' : '불가능';
    console.log(`${age}세, ${locate} 거주자인 당신은 이벤트 참여가 ${result} 합니다.`);
}
canJoinEvent(20, '서울')

function canWatchMovie(age, parent) {
    const withParent = parent === true ? '보호자를 동반한' : '';
    const result = (age >= 15 || parent) ? '관람가능' : '관람불가';
    console.log(`${withParent} ${age}세 고객님은 ${result}합니다.`);
}
canWatchMovie(14, true)
canWatchMovie(11, false)


function isWeekend(day) {
    const result = (day == '토요일' || day == '일요일') ? '주말' : '평일'
    console.log(`${day}은 ${result}입니다.`);
}
isWeekend('월요일')
isWeekend('토요일')