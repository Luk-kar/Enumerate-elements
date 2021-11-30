#include "./enumerateFolders.jsx"
#include "./enumerateLayers.jsx"

function runGUI() {

    var menu = new Window("dialog", "Enumerate elements");

    var buttonFolders = menu.add("button", [0, 80, 290, 101], "folders");
    var buttonLayers = menu.add("button", [0, 80, 290, 101], "layers");
    var buttonClose = menu.add("button", [0, 80, 290, 101], "close");

    buttonFolders.onClick = function () {
        menu.close();
        enumerateFolders();
    };

    buttonLayers.onClick = function () {
        menu.close();
        enumerateLayers();
    };

    buttonClose.onClick = function () {
        menu.close();
    };

    menu.show();
}
