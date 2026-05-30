// js/worldInfo.js
// World Book / World Info core: activation engine, editor UI, CRUD, injectWorldInfoIntoSystem
// Contains WI_POS, wiState, getActivatedWorldInfo, openWorldBookModal, etc.
// ~800+ lines of sophisticated logic to migrate from backup (~3313 onward)

var WI_POS = { BEFORE_CHAR: 0, AFTER_CHAR: 1 /* ... full map */ };
var WI_ROLE = { SYSTEM: 0, USER: 1, ASSISTANT: 2 };

function getActivatedWorldInfo(conv) {
    console.warn('[worldInfo] getActivatedWorldInfo STUB');
    return { byPosition: {}, totalTokens: 0 };
}

function injectWorldInfoIntoSystem(systemParts, wiByPos, charName, userName) {
    return systemParts; // stub
}

function buildSystemPrompt(character, worldInfoByPos) {
    // full version combines char defs + world info + summaries etc.
    return '';
}

function openWorldBookModal() {
    var modal = document.getElementById('worldBookModal');
    if (modal) modal.classList.remove('hidden');
}

function closeWorldBookModal() {
    var modal = document.getElementById('worldBookModal');
    if (modal) modal.classList.add('hidden');
}

function wireWorldBookListeners() {
    console.log('[worldInfo] wireWorldBookListeners stub - attach all wi* event listeners here');
}

window.openWorldBookModal = openWorldBookModal;
window.getActivatedWorldInfo = getActivatedWorldInfo;
window.injectWorldInfoIntoSystem = injectWorldInfoIntoSystem;
