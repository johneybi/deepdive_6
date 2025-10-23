function adult(name, age) {
    if (age >= 18) {
        isAdult = '성인'
    } else {
        isAdult = '미성년자'
    }
    console.log(`${age}세 ${name}님은 ${isAdult}입니다.`)
}

adult('코뿔소', 20) 
adult('홍길동', 16)

