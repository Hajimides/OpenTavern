// lib/idb.js
// Minimal IndexedDB wrapper extracted from OpenTavern
// Original source: https://github.com/jakearchibald/idb (trimmed for single-file use)
// ~3KB, zero deps, Promise-style API

(function() {
    'use strict';
    var idb = {};
    var instance;

    function promisifyRequest(request) {
        return new Promise(function(resolve, reject) {
            request.onsuccess = function() { resolve(request.result); };
            request.onerror = function() { reject(request.error); };
        });
    }

    function createStore(dbName, storeName) {
        return {
            get: function(key) {
                return instance.transaction(storeName).objectStore(storeName).get(key);
            },
            set: function(key, value) {
                return instance.transaction(storeName, 'readwrite').objectStore(storeName).put(value, key);
            },
            delete: function(key) {
                return instance.transaction(storeName, 'readwrite').objectStore(storeName).delete(key);
            },
            clear: function() {
                return instance.transaction(storeName, 'readwrite').objectStore(storeName).clear();
            },
            getAll: function() {
                return instance.transaction(storeName).objectStore(storeName).getAll();
            },
            getAllKeys: function() {
                return instance.transaction(storeName).objectStore(storeName).getAllKeys();
            }
        };
    }

    idb.openDB = function(name, version, options) {
        return new Promise(function(resolve, reject) {
            var request = indexedDB.open(name, version);
            
            request.onupgradeneeded = function(event) {
                var db = event.target.result;
                if (options && options.upgrade) {
                    options.upgrade(db, event.oldVersion, event.newVersion, request.transaction);
                }
            };

            // Ensure our stores use in-line keys (keyPath: 'id')
            // This must be done in upgrade if not already created
            // Note: We handle creation below in the actual upgrade callback passed from StorageService
            
            request.onsuccess = function() {
                instance = request.result;
                resolve({
                    get: function(storeName, key) {
                        return createStore(name, storeName).get(key);
                    },
                    set: function(storeName, key, value) {
                        return createStore(name, storeName).set(key, value);
                    },
                    delete: function(storeName, key) {
                        return createStore(name, storeName).delete(key);
                    },
                    clear: function(storeName) {
                        return createStore(name, storeName).clear();
                    },
                    getAll: function(storeName) {
                        return createStore(name, storeName).getAll();
                    },
                    transaction: function(storeNames, mode) {
                        return instance.transaction(storeNames, mode);
                    }
                });
            };
            
            request.onerror = function() { reject(request.error); };
        });
    };

    window.idb = idb;
})();
