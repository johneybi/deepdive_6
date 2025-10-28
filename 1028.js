const animals = ['cow', 'dolphin', 'puppy', 'cat', 'parrot']

for (let i = 0; i < animals.length; i++) {
    console.log(animals[i])
}

for (let animal of animals) {
    console.log(animal)
}

console.clear()

animals.forEach((animal, idx) => {
    console.log(`${idx + 1}. ${animal}`)
});

function print(animal, idx) {
    console.log(`${idx + 1}. ${animal}`)
}

const printAnimal = (animal, idx) => {
    console.log(`${idx + 1}. ${animal}`)
}

animals.forEach(printAnimal)
animals.forEach(print)

animals.forEach((animal, idx) => {
    if (idx === 2) {
        console.log(`${idx + 1}. ${animal}`)
    }
})

const numbers = [10, 20, 30, 40, 50]

numbers.forEach((num, idx) => {
    if (num >= 40) {
        console.log(num)
    } 
})

numbers.forEach((num, idx) => {
    if (num >= 40) {
        console.log(idx)
    }
})

const words = ['hamburger', 'milk', 'coffee', 'juice', 'chocolate cookie']

words.forEach((word) => {
    if (word.length >= 6) {
        console.log(word)
    }
})