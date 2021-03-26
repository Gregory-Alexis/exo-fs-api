const fs = require('fs')

if (process.argv.length < 4) {
  console.log('Usage: node cat.js file.txt')
  process.exit(1)
}

for (let i = 2; i < process.argv.length - 1; i++) {
  if (!fs.existsSync(process.argv[i])) {
    console.log(`Error: ${process.argv[i]} does not exist`)
  }
  if (!fs.statSync(process.argv[i]).isFile()) {
    console.log(`Error: ${process.argv[i]} is not a file`)
  }
}
const res = []

const txt = fs.readFileSync(process.argv[2], 'utf-8')
const txt2 = fs.readFileSync(process.argv[3], 'utf-8')
const txt3 = fs.readFileSync(process.argv[4], 'utf-8')


const txtStr = res.push(txt.split('\n'))
const txtStr2 = res.push(txt2.split('\n'))
const txtStr3 = res.push(txt3.split('\n'))

const resStr = res.join(' ')
fs.writeFileSync(process.argv[5], resStr)

