// js/api.js
// API layer: streaming chat, summarize requests, prompt building
// Functions like streamChatCompletion, generateSummaryViaAPI, buildMessagesForAPI, normalizeApiEndpoint
// Full code (~lines 2936 + fetch logic + 3400s) must be ported from backup.

function normalizeApiEndpoint(raw) {
    if (!raw) return raw;
    return String(raw).trim().replace(/\/+$/, '');
}

// Placeholder streaming fetch wrapper
async function streamChatCompletion(messages, onDelta, onDone, onError, signal) {
    console.warn('[api] streamChatCompletion is a STUB. Full implementation required from backup.');
    // In real version: construct headers, fetch /chat/completions with stream:true, read reader, call onDelta
    if (onError) onError(new Error('API stub not implemented - configure real API in settings'));
}

async function callSummarizeAPI(prompt) {
    console.warn('[api] callSummarizeAPI stub');
    return '（这是总结占位内容。请迁移完整 API 调用逻辑。）';
}

window.streamChatCompletion = streamChatCompletion;
window.callSummarizeAPI = callSummarizeAPI;
window.normalizeApiEndpoint = normalizeApiEndpoint;
