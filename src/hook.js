/* eslint-disable import/prefer-default-export */
import { useEffect } from 'react';

export const useStorage = () => {
    function saveData(items) {
        localStorage.setItem('savedState', JSON.stringify(items));
    }

    function getStorageData() {
        return JSON.parse(localStorage.getItem('savedState'));
    }

    function saveStorage(state) {
        useEffect(() => {
            window.addEventListener('beforeunload', () => {
                saveData(state);
            });
        });
    }

    function getStorage(stateUpdateFunction) {
        useEffect(() => {
            const savedData = getStorageData();
            stateUpdateFunction(savedData);
        }, []);
    }

    return [saveStorage, getStorage];
};
