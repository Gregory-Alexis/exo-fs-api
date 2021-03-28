const fs = require('fs')

if (process.argv.length !== 3) {
  console.log('Usage: node cp.js file.txt')
  process.exit(1)
}

if (!fs.existsSync(process.argv[2])) {
  console.log(`${process.argv[2]} does not exist`)
  process.exit(1)
}

if (!fs.statSync(process.argv[2]).isFile()) {
  console.log(`${process.argv[2]} is not a file`)
  process.exit(1)
}

fs.copyFileSync(process.argv[2], './copy.txt')

