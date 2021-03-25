if (process.argv.length !== 5) {
  console.log('Usage: node echos.js 3 arguments')
  process.exit(1)
}

const str = []

for (let i = 2; i < process.argv.length; i++) {

  str.push(process.argv[i])
}

console.log(str.join(' '))

