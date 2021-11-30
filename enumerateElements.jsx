#include "./helpers/isActiveDocument.jsx"
#include "./helpers/runGUI.jsx"

$.level = 1; // Debugging level, Level: 0 - No Break, 1 - Break, 2 - Immediate Break

enumerateElements()

function enumerateElements() {

    if(!isActiveDocument()) {
        alert("There is no active document!", "Warning", true);
        return; // abort program
    }

    runGUI();
}
