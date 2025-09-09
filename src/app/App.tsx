import React, { Suspense } from 'react';
import { classNames } from 'shared/helpers/classNames/classNames';

import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Outlet } from 'react-router-dom';

import './styles/index.scss';

const App = () => {
    return (
        <div className={classNames('app', {}, [])}>
            <Suspense fallback="">
                <Navbar />
                <div className="contentPage">
                    <Sidebar />
                    <Outlet />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
