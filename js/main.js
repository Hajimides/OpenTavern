// js/main.js
// Application entry point: DOMContentLoaded / init, cacheDom, bindEvents,
// global helpers (applyMainApiPreset etc.), send message flow, stop generation
// This file should contain the orchestration that was at the bottom of the original <script> (~6400+)

(function() {
    'use strict';

    // Global preset helpers (called from inline onclick in HTML)
    window.applyMainApiPreset = function(key) {
        if (key === 'deepseek') {
            var ep = document.getElementById('apiEndpoint');
            if (ep) ep.value = 'https://api.deepseek.com/v1';
            var model = document.getElementById('modelName');
            if (model) model.value = 'deepseek-chat';
        }
    };

    window.applySummarizeApiPreset = function(key) {
        if (key === 'deepseek') {
            var ep = document.getElementById('summarizeApiEndpoint');
            if (ep) ep.value = 'https://api.deepseek.com';
            var model = document.getElementById('summarizeModel');
            if (model) model.value = 'deepseek-chat';
        }
    };

    function bindEvents() {
        console.log('[main] bindEvents() - ATTACH ALL LISTENERS HERE (migrated from original ~6600 lines)');

        // Example wiring (expand with real handlers from backup):
        var sendBtn = document.getElementById('sendBtn');
        if (sendBtn) {
            sendBtn.addEventListener('click', function() {
                console.log('[main] Send clicked (stub handler - implement full send flow)');
            });
        }

        // Hamburger, settings open, newChatBtn, worldBookBtn, summarizeBtn, etc.
        // All the hundreds of .addEventListener calls that were in the original IIFE tail
        // must be moved here.
    }

    async function init() {
        console.log('[main] OpenTavern modular init starting...');

        if (window.cacheDom) window.cacheDom();
        if (window.initState) await window.initState();

        if (window.applyTranslations) window.applyTranslations();

        if (window.bindEvents) bindEvents();  // defined above
        if (window.wireWorldBookListeners) window.wireWorldBookListeners();

        // Initial render
        if (window.renderAll) window.renderAll();

        // Show announcement if needed (stub)
        // if (window.shouldShowAnnouncement && window.showAnnouncementModal) ...

        console.log('[main] Modular bootstrap complete. (Full logic migration from index.html.bak still required for full functionality)');
    }

    // Boot
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            init().catch(console.error);
        });
    } else {
        init().catch(console.error);
    }

    // Expose a debug hook
    window.__OpenTavernInit = init;
})();
