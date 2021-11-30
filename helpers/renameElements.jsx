function renameElements(elements) {

    var counter = 1;

    for (var i = 0; i < elements.length; i++) {
        var folderToRename = elements[i];
        folderToRename.name = counter;
        counter++;
    }

    return counter;
}
