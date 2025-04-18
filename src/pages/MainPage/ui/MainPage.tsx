import React from 'react';
import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/errorBoundary';

const MainPage = () => {
    const { t } = useTranslation();

    return (
        <div>
            <BugButton />
            <div>{t('Главная страница')}</div>
        </div>
    );
};

export default MainPage;
