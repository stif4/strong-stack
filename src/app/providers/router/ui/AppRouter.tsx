import React, { Suspense } from 'react';
import App from 'app/App';
import { ThemeProvider } from 'app/providers/themeProviders';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { RouteConfig, routeConfig } from 'shared/config/routeConfig';
import { PageLoader } from 'widgets/PageLoader/PageLoader';
import { ErrorBoundaryRouter } from 'app/providers/errorBoundary';
import ErrorBoundary from 'app/providers/errorBoundary/ui/ErrorBoundary';

const createRoute = ({
    path,
    element,
    errorElement,
    children,
    classNameWrapper,
}: {
    path: string;
    element: React.ReactNode;
    errorElement: React.ReactNode;
    children: RouteConfig[];
    classNameWrapper?: 'pageWrapper';
}) => {
    return (
        <Route
            key={path}
            path={path}
            element={
                // key занова мантирует компанет нужно быть внимательным возможны баги! если сломается юзай 6 верисю react router
                <Suspense fallback={<PageLoader />} key={path}>
                    <div className={classNameWrapper}>{element}</div>
                </Suspense>
            }
            errorElement={errorElement}
        >
            {children?.map((data) => {
                return createRoute({
                    path: data.path,
                    element: data.element,
                    errorElement: data.errorElement,
                    children: data.children,
                });
            })}
        </Route>
    );
};

const appRouter = createBrowserRouter(
    createRoutesFromElements(
        <Route
            path="/"
            element={
                <ErrorBoundary>
                    <ThemeProvider>
                        <App />
                    </ThemeProvider>
                </ErrorBoundary>
            }
            errorElement={<ErrorBoundaryRouter />}
        >
            {Object.values(routeConfig).map(({ element, path, errorElement, children }) =>
                createRoute({
                    path,
                    element,
                    errorElement,
                    children,
                    classNameWrapper: 'pageWrapper',
                }),
            )}
        </Route>,
    ),
);

export default appRouter;
