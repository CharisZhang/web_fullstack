var inputFolder = new Folder("C:/Users/tocha/Desktop/image")
var inputFiles = inputFolder.getFiles("*.jpg")


inputFiles = inputFiles.sort()

var names = []
for (var i = 0; i < inputFiles.length; i++) {
  names.push(inputFiles[i])
  if (names.length == 2) {
    names = names.sort(sortBy)
    var endFileName = 'C:/Users/tocha/Desktop/pdf/' + names[0].name.split('.')[0] + '.pdf'
    saveToPdf(names, endFileName)
  }
  if (i % 2 == 1) {
    names = []
  }

}


function sortBy(a, b) {
  return a.name.length - b.name.length
}

function saveToPdf(inputFiles, fileName) {
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
