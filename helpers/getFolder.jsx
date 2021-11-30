#include "./checkIsFolder.jsx"
#include "./notifyClientAboutNoFolder.jsx"

function getFolder(elementsToRename) {

    var folder = prompt("Name folder within you want to enumerate " + elementsToRename, "folder name");

    if (!checkIsFolder(folder)) {
        notifyClientAboutNoFolder(folder);
        return "";
    }

    return folder;
}
