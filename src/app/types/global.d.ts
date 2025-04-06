// declare module '*.module.scss' {
//     const classes: { readonly [key: string]: string };
//     export default classes;
// }
// declare module '*.scss' {
//     const content: Record<string, string>;
//     export default content;
// }

declare module '*.scss' {
    const content: { [className: string]: string };
    export = content;
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg' {
    import React from 'react';

    const SVG: React.FC<React.SVGProps<SVGSVGElement>>;
    export default SVG;
}

declare const __IS_DEV__: boolean;
