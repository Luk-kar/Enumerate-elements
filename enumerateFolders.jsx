#include "./helpers/isActiveDocument.jsx"

function enumerateElements() {
    if(!isActiveDocument()) {
        alert("There is no active document!");
        return; // abort program
    }

    var menu = new Window("dialog", "Enumerate elements");

    var buttonFolders = menu.add("button", [0,80,290,101], "folders");
    var buttonLayers = menu.add("button", [0,80,290,101], "layers");

    buttonFolders.onClick = function() {
        menu.close();
        enumerateFolders()
    }

    buttonLayers.onClick = function() {
        menu.close();
        enumerateLayers()
    }

    
}

function enumerateFolders() {

    if(confirm("Do you want to choose folder to rename it's folders?")) {

        var folder = prompt("Name folder within you want to enumerate folders")

    } else {

        
    }

}

function enumerateLayers() {
    if(confirm("Do you want to choose folder to rename it's layers?")) {

        var folder = prompt("Name folder within you want to enumerate folders")

    } else {


    }
}

