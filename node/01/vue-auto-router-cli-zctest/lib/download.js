module.exports.clone = async function clone(repo, desc) {
    const { promisify } = require('util')
    const download = promisify(require('download-git-repo'))
    const ora = require('ora')
    const process = ora(`下载.....${repo}`)
    process.start()
    try {
        await download(repo, desc)
    } catch (error) {
        process.fail()
    }
    process.succeed()
}
// const { promisify } = require('util')
// module.exports.clone = async function (repo, desc) {
//     const download = promisify(require('download-git-repo'))
//     const ora = require('ora')
//     const process = ora(`下载.....${repo}`)
//     process.start()
//     await download(repo, desc)
//     process.succeed()
// }