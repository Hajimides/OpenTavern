// js/character.js
// Character card: importCharacterCard, exportCharacter, open/save character editor,
// removeCharacter, createNewCharacter
// Full v3 card parsing + image embedding support can be added later.

function importCharacterCard(jsonData) {
    console.warn('[character] importCharacterCard STUB - full parser from backup needed');
    // Should set state on active conv and trigger renders
}

function exportCharacter() {
    console.log('[character] exportCharacter stub');
}

function openCharacterEditor() {
    var modal = document.getElementById('charEditorModal');
    if (modal) modal.classList.remove('hidden');
}

function saveCharacterEdits() {
    console.log('[character] saveCharacterEdits stub');
    var modal = document.getElementById('charEditorModal');
    if (modal) modal.classList.add('hidden');
}

window.importCharacterCard = importCharacterCard;
window.exportCharacter = exportCharacter;
window.openCharacterEditor = openCharacterEditor;
