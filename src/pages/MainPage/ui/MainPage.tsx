import React from 'react';
import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/errorBoundary';
import { Counter } from 'entities/Counter';

const MainPage = () => {
    const { t } = useTranslation();

    return (
        <div>
            <BugButton />
            <Counter />
            <div>{t('Главная страница')}</div>
        </div>
    );
};

export default MainPage;
