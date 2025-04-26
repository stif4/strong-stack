import React, { FC, ReactElement, useEffect, useMemo, useState } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

interface IThemProvider {
    children: ReactElement;
    storybookTheme?: Theme;
}

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

const ThemeProvider: FC<IThemProvider> = ({ children, storybookTheme }) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme);

    useEffect(() => {
        if (storybookTheme) {
            setTheme(storybookTheme);
        }
    }, [storybookTheme]);

    const defaultProps = useMemo(
        () => ({
            theme: theme,
            setTheme: setTheme,
        }),
        [theme],
    );

    return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
