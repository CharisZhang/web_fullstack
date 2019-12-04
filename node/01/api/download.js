module.exports.clone = async function clone(repo, desc) {
    const { promisify } = require('util')
    const download = promisify(require('download-git-repo'))
    const ora = require('ora')
    const procress = ora(`下载..项目`)
    procress.start()
    try {
        await download(repo, desc)
    } catch (error) {
        procress.fail()
    }
    procress.succeed()
}