const users = [149, 180, 192, 170]
const ghost = 167;

function countTallerUsers(userHeights, ghostHeight) {
    let count = 0;
    for (const height of userHeights) {
        if (height > ghostHeight) {
            count++;
        }
    }
    return count;
} 

console.log(countTallerUsers(users, ghost)); // 출력: 3