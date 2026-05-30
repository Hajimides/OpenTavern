// js/utils.js
// Generic utilities: escapeHtml, makeId, replacePlaceholders, highlightDialogue, etc.

function makeId() {
    return Date.now().toString(36) + Math.random().toString(36).slice(2, 9);
}

function escapeHtml(text) {
    if (!text) return '';
    return text.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

function highlightDialogue(text) {
    if (!text) return '';
    var escaped = escapeHtml(text);
    escaped = escaped.replace(/“([\s\S]*?)”/g, '<span class="dialogue-highlight">“$1”</span>');
    escaped = escaped.replace(/「([\s\S]*?)」/g, '<span class="dialogue-highlight">「$1」</span>');
    return escaped;
}

function replacePlaceholders(text, charName, userName) {
    if (!text) return text;
    var result = text;
    var c = charName || 'Assistant';
    var u = userName || 'User';
    result = result.replace(/\{\{char\}\}/g, c);
    result = result.replace(/\{\{user\}\}/g, u);
    result = result.replace(/<\|char\|>/g, c);
    result = result.replace(/<\|user\|>/g, u);
    return result;
}

// Expose
window.makeId = makeId;
window.escapeHtml = escapeHtml;
window.highlightDialogue = highlightDialogue;
window.replacePlaceholders = replacePlaceholders;
