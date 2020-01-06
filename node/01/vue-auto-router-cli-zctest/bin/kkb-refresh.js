#!/usr/bin/env node

const program = require('commander')
// cosole 图标
const symbols = require('log-symbols')
// 粉笔 将打印出来的 切换不同颜色
const chalk = require('chalk')

program.action(() => {
    console.log('refresh...')
})
program.parse(process.argv)

const fs = require('fs')
// 模板渲染类
const handlebars = require('handlebars')

const list = fs.readdirSync('./src/views')
    // home固定显示 需要排除
    .filter(v => v != 'Home.vue')
    .map(v => ({
        name: v.replace('.vue', '').toLowerCase(),
        file: v
    })
    )
compile({
    list
}, './src/router.js', './template/router.js.hbs')
compile({
    list
}, './src/App.vue', './template/App.vue.hbs')
function compile(meta, filePath, templatePath) {
    // fs.existsSync判断文件是否存在
    if (fs.existsSync(templatePath)) {
        const content = fs.readFileSync(templatePath).toString()
        // handlebars.compile渲染模板数据(content模板)(meta数据)
        const result = handlebars.compile(content)(meta)
        fs.writeFileSync(filePath, result)
    }
    console.log(symbols.success, chalk.green(`🚀${filePath} 创建成功`))
}