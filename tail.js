
const fs = require('fs')

if (process.argv.length !== 3 && process.argv.length !== 5) {
  console.log('Usage: node tail.js file.txt')
  process.exit(1)
}

if (process.argv.length === 5 && !fs.existsSync(process.argv[4])) {
  console.log(`Error: ${process.argv[4]} file do not exist`)
  process.exit(1)
}
if (process.argv.length === 5 && !fs.statSync(process.argv[4]).isFile()) {
  console.log(`Error: ${process.argv[4]} This is not a file`)
  process.exit(1)
}

if (process.argv.length === 3 && !fs.existsSync(process.argv[2])) {
  console.log(`Error: ${process.argv[2]} file do not exist`)
  process.exit(1)
}
if (process.argv.length === 3 && !fs.statSync(process.argv[2]).isFile()) {
  console.log(`Error: ${process.argv[2]} This is not a file`)
  process.exit(1)
}

if (process.argv.length === 5 && process.argv[2] !== '-n') {
  console.log('Error: the correct symbol: "-n"')
  process.exit(1)
}

if (process.argv.length === 5 && isNaN(process.argv[3])) {
  console.log(`Error: ${process.argv[3]} is not a number`)
  process.exit(1)
}

if (process.argv.length === 5) {
  const read = fs.readFileSync(process.argv[4], 'utf-8')
  const txt = read.split('\n').splice(process.argv[3]).join('\n')

  if (process.argv[3] >= read.split('\n').length) {
    console.log(`Error: You cannot split more or equal than the length text. The max length limit is: ${read.split('\n').length}`)
    process.exit(1)
  }
  numStr = Number(process.argv[3])
  console.log(txt)

} else if (process.argv.length === 3) {
  const read = fs.readFileSync(process.argv[2], 'utf-8')
  const txt = read.split('\n').splice(-10).join('\n')
  console.log(txt)
}
