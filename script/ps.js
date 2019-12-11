//创建一个Document对象
var docRef = app.documents.add(400, 300, 72);

//创建一个ArtLayer对象
var newTextLayer = docRef.artLayers.add();

//注意:一个文本对象必须要依附于一个Layer对象，并且Layer的kind必须是TEXT类型
newTextLayer.kind = LayerKind.TEXT;
newTextLayer.textItem.font = "MicrosoftYaHeiUI-Blod";
//设置要显示的内容
newTextLayer.textItem.contents = "PSDOM Demo";
newTextLayer.textItem.size = 200;

var textColor = new SolidColor;

textColor.rgb.red = 255;
textColor.rgb.green = 0;
textColor.rgb.blue = 0;

newTextLayer.textItem.color = textColor;
//这样就可以显示文字了

var savePath = "/Users/zhangchao/Desktop/ps/demo.pdf";
var saveFile = new File(savePath);
save(saveFile)
alert('成功')
app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
function save(saveFile) { //saveas newText.psd
  // var saveOptions = new PhotoshopSaveOptions();
  // saveOptions.alphaChannels = false;
  // saveOptions.annotations = false;
  // saveOptions.embedColorProfile = true;
  // saveOptions.layers = true;
  // saveOptions.spotColors = false;
  var PdfSaveOptions = new PDFSaveOptions();
  // PdfSaveOptions.antiAlias = true 
  // PdfSaveOptions.mode = OpenDocumentMode.RGB 
  // PdfSaveOptions.resolution = 72 
  // PdfSaveOptions.page = 3
  app.activeDocument.saveAs(saveFile, PdfSaveOptions, true, Extension.LOWERCASE);
}