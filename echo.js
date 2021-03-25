if (process.argv.length !== 5) {
  console.log('Usage: node echos.js 3 arguments')
  process.exit(1)
}

console.log(process.argv[2], process.argv[3], process.argv[4])



