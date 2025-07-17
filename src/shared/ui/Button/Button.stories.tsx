import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Button, ButtonSize, ButtonTheme } from './Button';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
        theme: {
            options: [
                ButtonTheme.CLEAR,
                ButtonTheme.OUTLINE,
                ButtonTheme.BACKGROUND,
                ButtonTheme.BACKGROUND_INVERTED,
                'default',
            ],
            control: { type: 'select' },
        },
        size: {
            options: [ButtonSize.M, ButtonSize.L, ButtonSize.XL, 'default'],
            control: { type: 'radio' },
        },
    },
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'Text',
    theme: ButtonTheme.CLEAR,
};

export const Outline = Template.bind({});
Outline.args = {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
};

export const Background = Template.bind({});
Background.args = {
    children: 'Text',
    theme: ButtonTheme.BACKGROUND,
};

export const BackgroundInverted = Template.bind({});
BackgroundInverted.args = {
    children: 'Text',
    theme: ButtonTheme.BACKGROUND_INVERTED,
};

export const OutlineSizeM = Template.bind({});
OutlineSizeM.args = {
    children: 'Size M',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.M,
};

export const OutlineSizeL = Template.bind({});
OutlineSizeL.args = {
    children: 'Size L',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.L,
};

export const OutlineSizeXL = Template.bind({});
OutlineSizeXL.args = {
    children: 'Size XL',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.XL,
};

export const SquareSizeXL = Template.bind({});
SquareSizeXL.args = {
    children: '<',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.XL,
    square: true,
};

export const AllSizes = () => (
    <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        {/* eslint-disable-next-line i18next/no-literal-string */}
        <Button size={ButtonSize.M}>Size M</Button>
        {/* eslint-disable-next-line i18next/no-literal-string */}
        <Button size={ButtonSize.L}>Size L</Button>
        {/* eslint-disable-next-line i18next/no-literal-string */}
        <Button size={ButtonSize.XL}>Size XL</Button>
    </div>
);
