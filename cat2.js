const fs = require('fs')

if (process.argv.length < 3 && process.argv.length > 5) {
  console.log('Usage: node cat2.js file.txt')
  process.exit(1)
}

let res = []

for (let i = 2; i < process.argv.length; i++) {
  if (!fs.statSync(process.argv[i]).isFile()) {
    console.log(`${process.argv[i]} is not a file`)
    process.exit(1)
  }
  if (!fs.existsSync(process.argv[i])) {
    console.log(`${process.argv[i]} do not exist`)
    process.exit(1)
  }
  res.push(fs.readFileSync(process.argv[i], 'utf-8'))
}
const resStr = res.join(' ')
console.log(resStr)
