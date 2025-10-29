const users = ["irangi", "camel", "ghost", "sunny", "henry"];
let userIndex = 3;

users.forEach((user, idx) => {
  if (idx === 2) {
    console.log(`3번째 user는 ${user}님 입니다.`);
  }
});

users.forEach((user, idx) => {
  if (idx === userIndex) {
    console.log(`${idx+1}번째 user는 ${user}님 입니다.`);
    }
});