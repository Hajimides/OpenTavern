// js/summarize.js
// Summarize feature: Summary Manager (new + history), auto/manual summarize,
// generateSummary, apply auto threshold logic
// Full logic from backup (~ summary manager event wiring + callSummarizeAPI usage)

async function generateSummaryForRange(startIdx, endIdx) {
    console.warn('[summarize] generateSummaryForRange STUB');
    return null;
}

function openSummaryManager() {
    var m = document.getElementById('summaryManagerModal');
    if (m) m.classList.remove('hidden');
}

function closeSummaryManager() {
    var m = document.getElementById('summaryManagerModal');
    if (m) m.classList.add('hidden');
}

function checkAndTriggerAutoSummary() {
    // called after new messages in full version
    console.log('[summarize] checkAndTriggerAutoSummary stub');
}

window.openSummaryManager = openSummaryManager;
window.checkAndTriggerAutoSummary = checkAndTriggerAutoSummary;
