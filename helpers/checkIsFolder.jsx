function checkIsFolder(folderName) {

    var doc = app.activeDocument;
    var layerSets = doc.layerSets;

    for (var j = 0; j < layerSets.length; j++) {
        if (layerSets[j].name === folderName) {
            return true;
        }
    }

    return false;
}
