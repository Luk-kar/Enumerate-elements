function enumerateLayers() {
    if (confirm("Do you want to choose folder to rename it's layers?")) {

        var folder = getFolder("layers");
        if (folder) {
            var doc = app.activeDocument;
            var folders = doc.layerSets.getByName(folder).artLayers;

            var counter = renameElements(folders);
            notifyClientNumberOfChangedNames(counter, "layers");
        }

    } else {

        var doc = app.activeDocument;
        var layers = doc.artLayers;

        var counter = renameElements(layers);
        notifyClientNumberOfChangedNames(counter, "layers");
    }
}
