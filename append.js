const fs = require('fs')

if (process.argv.length < 3) {
  console.log('Usage: node append.js file.txt(as much files you need to copy)  copyFile.txt')
  process.exit(1)
}

const res = []

for (let i = 2; i < process.argv.length - 1; i++) {
  if (!fs.existsSync(process.argv[i])) {
    console.log(`Error: ${process.argv[i]} does not exist`)
    process.exit(1)
  }
  if (!fs.statSync(process.argv[i]).isFile()) {
    console.log(`Error: ${process.argv[i]} is not a file`)
    process.exit(1)
  }
  const txt = fs.readFileSync(process.argv[i], 'utf-8')
  res.push(txt.split('\n'))
}

const resStr = res.join(' ')
fs.writeFileSync(process.argv[5], resStr)

