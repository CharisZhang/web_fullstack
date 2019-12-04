const http = require('http')
const fs = require('fs')
const server = http.createServer((request, response) => {
    // console.log('request ..', getPrototypeChain(request))
    // console.log('response ..', getPrototypeChain(response))
    const { url, method, headers } = request
    if (url === '/' && method === 'GET') {
        fs.readFile('index.html', (err, data) => {
            if (err) {
                response.writeHead(500, { 'Content-Type': 'text/plain;charset=utf-8' })
                response.end('500 服务器错误')
                return
            }
            response.statusCode = 200
            response.setHeader('Content-Type', 'text/html')
            response.end(data)
        })
    }
    else if (url === '/users' && method === 'GET') {
        response.writeHead(200, { 'Content-Type': 'application/json' })
        response.end(JSON.stringify({ name: 'zc' }))
    } else if (method === 'GET' && headers.accept.indexOf('image/*')) {
        fs.createReadStream('.' + url).pipe(response)
    }
    else {
        response.writeHead(404, { 'Content-Type': 'text/plain;charset=utf-8' })
        response.end('404 未找到页面')
    }
    // response.end('a response')
})
server.listen(3000)

function getPrototypeChain(obj) {
    const protoChain = []
    while (obj = Object.getPrototypeOf(obj)) {
        protoChain.push(obj)
    }
    return protoChain
}