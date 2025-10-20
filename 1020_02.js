const a = 13;
const b = 5;

const plus = a + b;
const isEven = a % 2;

console.log(sum);
console.log(isEven);

function sum(x, y) {
    const result = x + y;
    console.log(result);
}

sum(3, 5);
sum(a, b);
sum(10, 15);

const menu = {
    chocolate: '초코',
    almond: '아몬드',
    vanila: '바닐라',
    cream: '크림',
    strawberry: '딸기',
    mint: '민트'
};

function createIcecream(flavor, topping) {
  var KoFlavor = menu[flavor];
  var KoTopping = menu[topping];
  console.log(KoFlavor + ' ' + KoTopping + ' 아이스크림이 만들어 졌습니다.');
}

createIcecream('chocolate', 'almond')
createIcecream('vanila', 'cream')
createIcecream('mint', 'chocolate')
createIcecream('strawberry', 'cream')

