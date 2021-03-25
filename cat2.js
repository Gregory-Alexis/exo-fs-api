const fs = require('fs')

if (process.argv.length < 3 && process.argv.length > 5) {
  console.log('Usage: node cat.js file.txt')
  process.exit(1)
}

if (!fs.existsSync(process.argv[2])) {
  console.log(`${process.argv[2]} does not exist`)
  process.exit(1)
} else if (!fs.existsSync(process.argv[3])) {
  console.log(`${process.argv[3]} does not exist`)
  process.exit(1)
} else if (!fs.existsSync(process.argv[4])) {
  console.log(`${process.argv[4]} does not exist`)
  process.exit(1)
}

const stats = fs.statSync(process.argv[2])
const stats1 = fs.statSync(process.argv[3])
const stats2 = fs.statSync(process.argv[4])

if (!stats.isFile(process.argv[2])) {
  console.log(`${process.argv[2]} is not a file`)
  process.exit(1)
}
if (!stats1.isFile(process.argv[3])) {
  console.log(`${process.argv[3]} is not a file`)
  process.exit(1)
}
if (!stats2.isFile(process.argv[4])) {
  console.log(`${process.argv[4]} is not a file`)
  process.exit(1)
}

const str = fs.readFileSync(process.argv[2], 'utf-8')
const str1 = fs.readFileSync(process.argv[3], 'utf-8')
const str2 = fs.readFileSync(process.argv[4], 'utf-8')

console.log(`${str}${str1}${str2}`)