
const fs = require('fs')

if (process.argv.length !== 3 && process.argv.length !== 5) {
  console.log('Usage: node tail.js file.txt')
  process.exit(1)
}

if (process.argv.length === 5 && !fs.existsSync(process.argv[4])) {
  console.log('Error: file does not exist')
  process.exit(1)
}
if (process.argv.length === 5 && !fs.statSync(process.argv[4]).isFile()) {
  console.log('Error: This is not a file')
  process.exit(1)
}

if (process.argv.length === 3 && !fs.existsSync(process.argv[2])) {
  console.log('Error: file does not exist')
  process.exit(1)
}
if (process.argv.length === 3 && !fs.statSync(process.argv[2]).isFile()) {
  console.log('Error: This is not a file')
  process.exit(1)
}

if (process.argv.length === 5 && process.argv[2] !== '-n') {
  console.log('Error: this is not the correct symbol: "-n"')
  process.exit(1)
}

if (process.argv.length === 5 && isNaN(process.argv[3])) {
  console.log('Error: This is not a number')
  process.exit(1)
}

if (process.argv.length === 5) {
  const read = fs.readFileSync(process.argv[4], 'utf-8')
  let txt = read.split('\n').splice(process.argv[3])
  numStr = Number(process.argv[3])

  console.log(txt.join(' '))
} else if (process.argv.length === 3) {
  const read = fs.readFileSync(process.argv[2], 'utf-8')
  let txt = read.split('\n').splice(7)
  console.log(txt.join(' '))
}