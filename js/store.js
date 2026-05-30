// js/store.js
// State management: createReactiveStore, appStore, state, defaults, persistState, initState
// Full logic to be ported from index.html.bak (~lines 2773-3240)

function defaultSettings() {
    return {
        apiEndpoint: '',
        apiKey: '',
        model: 'gpt-4o',
        contextLength: 10,
        maxTokens: 1024,
        temperature: 0.7,
        topP: 0.9,
        userName: 'User',
        systemPrompt: '',
        summaryEnabled: false,
        summaryThreshold: 10,
        summaryMaxWords: 0,
        summarizeUseMainAPI: true,
        summarizeApiEndpoint: '',
        summarizeApiKey: '',
        summarizeModel: 'deepseek-chat',
        worldInfoBudgetEnabled: false,
        worldInfoBudget: 2048,
        lang: 'zh-CN'
    };
}

function defaultConversation() {
    return {
        id: makeId(),
        title: t('new_chat_title'),
        created: Date.now(),
        updated: Date.now(),
        messages: [],
        character: null,
        summary: null,
        summaries: [],
        worldBookIds: []
    };
}

function createReactiveStore(initialState) {
    var state = JSON.parse(JSON.stringify(initialState || {}));
    var listeners = [];
    return {
        state: state,
        subscribe: function(fn) { listeners.push(fn); return function(){ listeners = listeners.filter(function(l){return l!==fn}); }; },
        notify: function(keys) {
            var arr = Array.isArray(keys) ? keys : [keys];
            listeners.forEach(function(fn){ try { fn(arr); } catch(e){} });
        }
    };
}

var appStore = createReactiveStore({
    settings: defaultSettings(),
    conversations: {},
    conversationOrder: [],
    activeConvId: null,
    isGenerating: false,
    worldBooks: {}
});

var state = appStore.state;

var renderSubscriptions = {
    'settings': function() {},
    'conversations': function() {},
    'activeConvId': function() {},
    'isGenerating': function() {}
};

function persistState(immediate) {
    // delegate to StorageService in full version
    console.log('[store] persistState called (stub)');
}

async function initState() {
    console.log('[store] initState stub - load from StorageService');
    // In full version: load, migrate, populate state, apply defaults
}

function getActiveConv() {
    return state.activeConvId ? state.conversations[state.activeConvId] : null;
}

function requestFullRender() { if (window.renderAll) window.renderAll(); }
function requestRender(key) { appStore.notify(key); }

window.appStore = appStore;
window.state = state;
window.defaultSettings = defaultSettings;
window.defaultConversation = defaultConversation;
window.persistState = persistState;
window.initState = initState;
window.getActiveConv = getActiveConv;
window.requestFullRender = requestFullRender;
window.requestRender = requestRender;
