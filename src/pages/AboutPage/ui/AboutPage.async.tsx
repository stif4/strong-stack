import { lazy } from 'react';

export const AboutPageAsync = lazy(
    () =>
        new Promise((resolve) => {
            /* eslint-disable */
            // @ts-ignore
            // ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАТЬ!!!!! ДЕЛАЕМ ДЛЯ КУРСА!
            setTimeout(() => resolve(import('./AboutPage')), 3000);
            /* eslint-enable */
        }),
);
