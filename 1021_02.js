const animals = ["cow", "dolphin", "puppy", "cat", "parrot"];
console.log(animals[2])

for (const animal of animals) {
    console.log(animal)
}

for (let i = 0; i < animals.length; i++) {
    console.log(animals[i])
}

let h = 1;
console.log(++h)


for (let i=0; i < 5; i++) {
    console.log(i)
}

for (let i = 0; i < 5; i++) {
    console.log(`${i + 1}. ${animals[i]}`)
}