// js/conversation.js
// Conversation management: newChat, switchConversation, deleteConversation,
// archiveCurrent, import/export conversation JSON, new chat picker

function newChat(characterData) {
    console.log('[conversation] newChat stub');
    // create defaultConversation, set active, persist, full render
}

function switchConversation(id) {
    state.activeConvId = id;
    persistState();
    if (window.renderAll) window.renderAll();
}

function deleteConversation(id) {
    if (!confirm(t('delete_confirm'))) return;
    delete state.conversations[id];
    // update order, pick another active, persist + render
}

function archiveCurrentConversation() {
    console.log('[conversation] archive stub');
}

function openNewChatPicker() {
    var m = document.getElementById('newChatPickerModal');
    if (m) m.classList.remove('hidden');
}

window.newChat = newChat;
window.switchConversation = switchConversation;
window.deleteConversation = deleteConversation;
window.openNewChatPicker = openNewChatPicker;
