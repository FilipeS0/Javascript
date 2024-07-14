var age = 67
console.log(`You are ${age}`)
if (age < 16) {
    console.log('No vote')
} else if (age < 18 || age > 65) {
    console.log('Optional vote')
} else {
    console.log('Vote mandatory')
}