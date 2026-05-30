// js/storage.js
// Storage abstraction layer (localStorage + IndexedDB via lib/idb.js)
// Contains StorageService, persist helpers, backup reminders, etc.
// Full implementation should be migrated from index.html.bak lines ~2354-2800+

var STORAGE_KEY = 'opentavern-data-v1';

var StorageService = {
    _useIndexedDB: false,
    _idbDB: null,
    _dbName: 'OpenTavernDB',
    _dbVersion: 2,

    async loadAll() {
        try {
            var raw = localStorage.getItem(STORAGE_KEY);
            return raw ? JSON.parse(raw) : null;
        } catch (e) {
            console.error('[Storage] loadAll failed:', e);
            return null;
        }
    },

    async saveAll(data) {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
        } catch (e) {
            console.error('[Storage] saveAll failed:', e);
        }
    },

    getBackend() {
        return this._useIndexedDB ? 'indexeddb' : 'localStorage';
    },

    async enableIndexedDB() {
        const success = await this.initIndexedDB();
        if (success) {
            this._useIndexedDB = true;
        }
        return success;
    },

    async initIndexedDB() {
        if (this._idbDB) return this._idbDB;
        try {
            this._idbDB = await idb.openDB(this._dbName, this._dbVersion, {
                upgrade(db, oldVersion) {
                    if (oldVersion < 1) {
                        if (!db.objectStoreNames.contains('settings')) db.createObjectStore('settings');
                        if (!db.objectStoreNames.contains('conversations')) db.createObjectStore('conversations', { keyPath: 'id' });
                        if (!db.objectStoreNames.contains('metadata')) db.createObjectStore('metadata');
                    }
                    if (oldVersion < 2) {
                        if (!db.objectStoreNames.contains('worldBooks')) db.createObjectStore('worldBooks', { keyPath: 'id' });
                    }
                }
            });
            return this._idbDB;
        } catch (err) {
            console.error('[Storage] Failed to init IndexedDB:', err);
            return null;
        }
    },

    async getIDB() {
        if (!this._idbDB) await this.initIndexedDB();
        return this._idbDB;
    },

    async loadAllFromIDB() {
        // Full implementation from backup needed for production
        console.warn('[storage] loadAllFromIDB stub - full migration required');
        return null;
    },

    async saveAllToIDB(data) {
        console.warn('[storage] saveAllToIDB stub');
    },

    async migrateFromLocalStorage() {
        console.warn('[storage] migrate stub');
        return false;
    },

    async getStorageInfo() {
        return { used: 0, total: 0, backend: this.getBackend() };
    }
};

// Backup reminder helpers (stubs)
const BACKUP_REMINDER_DAYS = 7;

function shouldShowBackupReminder() { return false; }
function recordBackupMade() {}
function showBackupReminderIfNeeded() {}
function updateStorageStatusUI() {}

// Expose
window.StorageService = StorageService;
window.updateStorageStatusUI = updateStorageStatusUI;
window.showBackupReminderIfNeeded = showBackupReminderIfNeeded;
