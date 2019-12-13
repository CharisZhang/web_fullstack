var inputFolder = new Folder("/Users/zhangchao/Desktop/课时2/")
var inputFiles = inputFolder.getFiles("*.jpg")

var fileName = "/Users/zhangchao/Desktop/ps/demo2.pdf"

alert(inputFiles[0].name)


var names = []
for (var i = 0; i < inputFiles.length; i++) {
  names.push(inputFiles[i])
}

alert(names.sort())

for (var i = 0; i < names.length; i++) {
  
  names[i]
}


function setFilename(){}





// saveToPdf(inputFiles, outputFile, options)

function saveToPdf(inputFiles, fileName, options) {
    var outputFile = File(fileName)
    var options = new PresentationOptions
    options.presentation = true
    options.view = true
    options.autoAdvance = true
    options.interval = 5
    options.loop = true
    options.transition = TransitionType.RANDOM
    makePDFPresentation(inputFiles, outputFile, options)
}
