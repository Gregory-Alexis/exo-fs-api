const fs = require('fs')

if (process.argv.length < 3 || process.argv.length > 5) {
  console.log('Usage: node wc.js file.txt (required input -l, -w or -c, if needed) ')
  process.exit(1)
}

for (let i = 2; i < process.argv.length - 1; i++) {
  if (!fs.existsSync(process.argv[i])) {
    console.log(`Error:${process.argv[i]} do not exist`)
    process.exit(1)
  }
  if (!fs.statSync(process.argv[i]).isFile()) {
    console.log(`Error:${process.argv[i]} is not a file `)
    process.exit(1)
  }
}

if (process.argv.length === 4 && process.argv[3] !== '-l' && process.argv.length === 4 && process.argv[3] !== '-w' && process.argv.length === 4 && process.argv[3] !== '-c') {
  console.log("Enter the correct input ('-w', or '-l', or '-c'")
  process.exit(1)
}

let text = fs.readFileSync(process.argv[2], 'utf-8')

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

