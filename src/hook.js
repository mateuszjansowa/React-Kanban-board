/* eslint-disable import/prefer-default-export */
import { useEffect } from 'react';

export const useStorage = (state, stateUpdate) => {
    const saveStorage = () => {
        useEffect(() => {
            window.addEventListener('beforeunload', () => {
                localStorage.setItem('savedState', JSON.stringify(state));
            });
        });
    };

    const getStorage = () => {
        useEffect(() => {
            const savedState = JSON.parse(localStorage.getItem('savedState'));
            stateUpdate(savedState);
        }, []);
    };

    return [saveStorage, getStorage];
};
