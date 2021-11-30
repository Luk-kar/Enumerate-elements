function enumerateFolders() {

    if (confirm("Do you want to choose folder to rename it's folders?")) {

        var folder = getFolder("layers");
        if (folder) {
            var doc = app.activeDocument;
            var folders = doc.layerSets.getByName(folder).layerSets;

            var counter = renameElements(folders);
            notifyClientNumberOfChangedNames(counter, "folders");
        }

    } else {

        var doc = app.activeDocument;
        var folders = doc.layerSets;

        var counter = renameElements(folders);
        notifyClientNumberOfChangedNames(counter, "folders");
    }

}
