import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { AboutPage } from 'pages/AboutPage';
import { ErrorBoundaryRouter } from 'app/providers/errorBoundary';
import { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';

export enum AppRouteNames {
    MAIN = 'main',
    ABOUT = 'about',
    NOT_FOUND = 'notFound',
}

export enum AppRoutes {
    MAIN = '/',
    ABOUT = '/about',
    ABOUT_ME = '/about/me',
    NOT_FOUND = '*',
}

export const RoutePath = {
    main: AppRoutes.MAIN,
    about: {
        index: AppRoutes.ABOUT,
        me: AppRoutes.ABOUT_ME,
    },
    notFound: AppRoutes.NOT_FOUND,
};

export type RouteConfig = {
    path?: string;
    index?: boolean;
    element: ReactNode;
    errorElement?: ReactNode;
    children?: RouteConfig[];
};

export const routeConfig: Record<AppRouteNames, RouteConfig> = {
    [AppRouteNames.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
        errorElement: <ErrorBoundaryRouter />,
    },
    [AppRouteNames.ABOUT]: {
        path: RoutePath.about.index,
        element: (
            <div>
                <Outlet />
            </div>
        ),
        errorElement: <ErrorBoundaryRouter />,
        children: [
            {
                path: RoutePath.about.index,
                element: <AboutPage />,
                errorElement: <ErrorBoundaryRouter />,
            },
            {
                path: RoutePath.about.me,
                element: <>123</>,
                errorElement: <ErrorBoundaryRouter />,
            },
        ],
    },
    [AppRouteNames.NOT_FOUND]: {
        path: RoutePath.notFound,
        element: <NotFoundPage />,
        errorElement: <ErrorBoundaryRouter />,
    },
};
