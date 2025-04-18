import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { appRouter } from 'app/providers/router';
import './shared/config/i18n/i18n';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(<RouterProvider router={appRouter} />);
