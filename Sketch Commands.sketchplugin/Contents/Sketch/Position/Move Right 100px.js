//Move Right 100px

var onRun = function(context) {
  var sketch = require('sketch')
  var document = sketch.Document.getSelectedDocument()
  var selection = document.selectedLayers
  selection.forEach(layer => {
    layer.frame.x += 100
  })
}