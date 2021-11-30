#include "./helpers/isActiveDocument.jsx"

enumerateElements()

function enumerateElements() {

    if(!isActiveDocument()) {
        alert("There is no active document!");
        return; // abort program
    }

    var menu = new Window("dialog", "Enumerate elements");

    var buttonFolders = menu.add("button", [0,80,290,101], "folders");
    var buttonLayers = menu.add("button", [0,80,290,101], "layers");
    var buttonClose = menu.add("button", [0,80,290,101], "close");

    buttonFolders.onClick = function() {
        menu.close();
        enumerateFolders()
    }

    buttonLayers.onClick = function() {
        menu.close();
        enumerateLayers()
    }

    buttonClose.onClick = function() {
        menu.close();
    }

    menu.show();
}

function enumerateFolders() {

    if(confirm("Do you want to choose folder to rename it's folders?")) {

        var folder = getFolder("layers")
        if (folder) {
            var doc = app.activeDocument;
            var folders = doc.layerSets.getByName(folder).layerSets;

            var counter = renameElements(folders);
            alert("Congrats! You renamed " + counter + " folders")
        }

    } else {

        var doc = app.activeDocument;
        var folders = doc.layerSets;

        var counter = renameElements(folders);
        alert("Congrats! You renamed " + counter + " folders")
    }

}

function renameElements(elements) {

    var counter = 1;

    for (var i = 0; i < elements.length; i++) {
        var folderToRename = elements[i];
        folderToRename.name = counter;
        counter++;
    }

    return counter;
}

function enumerateLayers() {
    if(confirm("Do you want to choose folder to rename it's layers?")) {

        var folder = getFolder("layers")
        if (folder) {
            var doc = app.activeDocument;
            var folders = doc.layerSets.getByName(folder).artLayers;

            var counter = renameElements(folders);
            alert("Congrats! You renamed " + counter + " layers")
        }

    } else {

        var doc = app.activeDocument;
        var layers = doc.artLayers;

        var counter = renameElements(layers);
        alert("Congrats! You renamed " + counter + " layers")
    }
}

function notifyClientAboutNoFolder(folder) {
    alert('There is no "' + folder + '" folder in the top hierachy!', "Warning", true);
}

function getFolder(elementsToRename) {

    var folder = prompt("Name folder within you want to enumerate " + elementsToRename, "folder name");

    if(!checkIsFolder(folder)) {
        notifyClientAboutNoFolder(folder);
        return "";
    }

    return folder
}

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


