#include "./helpers/isActiveDocument.jsx"
#include "./helpers/runGUI.jsx"

enumerateElements()

function enumerateElements() {

    if(!isActiveDocument()) {
        alert("There is no active document!", "Warning", true);
        return; // abort program
    }

    runGUI();
}
