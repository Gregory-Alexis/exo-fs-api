const fs = require('fs')

if (process.argv.length < 3 || process.argv.length > 5) {
  console.log('Usage: node cat.js file.txt')
  process.exit(1)
}

if (!fs.existsSync(process.argv[2])) {
  console.log('Error: file does not exist')
  process.exit(1)
}

if (!fs.statSync(process.argv[2]).isFile()) {
  console.log('Error: bad input')
  process.exit(1)
}

let text = fs.readFileSync(process.argv[2], 'utf-8')

if (process.argv.length === 4 && process.argv[3] !== '-l' && process.argv.length === 4 && process.argv[3] !== '-w' && process.argv.length === 4 && process.argv[3] !== '-c') {
  console.log("Enter the correct input")
  process.exit(1)
}

let res = []

if (process.argv[3] === '-l') {
  res.push(text.split('\n').length)

} else if (process.argv[3] === '-w') {
  res.push(text.split(' ').length)
} else if (process.argv[3] === '-c') {
  res.push(text.split('').length)
} else {
  res.push(text.split('\n').length)
  res.push(text.split(' ').length)
  res.push(text.split('').length)
}

const resStr = res.join(' ')
console.log(resStr)

