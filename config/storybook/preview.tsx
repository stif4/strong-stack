import type { Preview } from '@storybook/react';
import { ThemeProvider, useTheme } from 'app/providers/themeProviders';
import { classNames } from 'shared/helpers/classNames/classNames';
import { Theme } from 'app/providers/themeProviders/ui/ThemeContext';
import { ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';

import 'app/styles/index.scss';

const App = ({ children }: { children: ReactElement }) => {
    const { theme } = useTheme();
    return <div className={classNames('app', {}, [theme])}>{children}</div>;
};

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    decorators: [
        (Story, context) => {
            const theme = context.globals.theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;

            return (
                <BrowserRouter>
                    <ThemeProvider storybookTheme={theme}>
                        <App>
                            <Story />
                        </App>
                    </ThemeProvider>
                </BrowserRouter>
            );
        },
    ],
    globalTypes: {
        theme: {
            name: 'Theme',
            description: 'Global theme for components',
            defaultValue: Theme.LIGHT,
            toolbar: {
                icon: 'circlehollow',
                items: [Theme.LIGHT, Theme.DARK],
                title: 'Theme',
            },
        },
    },
};

export default preview;
