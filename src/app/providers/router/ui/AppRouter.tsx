import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig';
import { PageLoader } from 'widgets/PageLoader/PageLoader';

const AppRouter = () => {
    return (
        <Routes>
            {Object.values(routeConfig).map(({ element, path }) => (
                <Route
                    key={path}
                    path={path}
                    element={
                        // key занова мантирует компанет нужно быть внимательным возможны баги! если сломается юзай 6 верисю react router
                        <Suspense fallback={<PageLoader />} key={path}>
                            <div className="pageWrapper">{element}</div>
                        </Suspense>
                    }
                />
            ))}
        </Routes>
    );
};

export default AppRouter;
