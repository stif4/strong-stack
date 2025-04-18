import React from 'react';
import { ErrorPage } from 'pages/ErrorPage';
import { useRouteError } from 'react-router-dom';

const ErrorBoundaryRouter = () => {
    const error = useRouteError() as Error;

    return <ErrorPage message={error.message} />;
};

export default ErrorBoundaryRouter;
