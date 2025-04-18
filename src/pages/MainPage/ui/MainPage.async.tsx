import { lazy } from 'react';

export const MainPageAsync = lazy(
    () =>
        new Promise((resolve) => {
            /* eslint-disable */
            // @ts-ignore
            // ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАТЬ!!!!! ДЕЛАЕМ ДЛЯ КУРСА!
            setTimeout(() => resolve(import('./MainPage')), 1500);
            /* eslint-enable */
        }),
);
