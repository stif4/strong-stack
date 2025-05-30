type Mods = Record<string, boolean | string>;

export function classNames(cls: string, mods: Mods, additional: string[]): string {
    return [
        cls,
        ...additional.filter(Boolean),
        ...Object.entries(mods)
            /* eslint-disable */
            .filter(([className, value]) => Boolean(value))
            /* eslint-enable */
            .map(([className]) => className),
    ].join(' ');
}
