const fs = require('fs')

// 同步调用
// fs.readFileSync获取的是二进制
// const data = fs.readFileSync('./download.js')
// console.log(data.toString())

fs.readFile('./download.js', (err, data) => {
    if (err) throw err
    console.log(data.toString())
})