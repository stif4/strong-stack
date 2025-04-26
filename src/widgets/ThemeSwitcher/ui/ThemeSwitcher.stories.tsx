import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { ThemeSwitcher } from './ThemeSwitcher';

export default {
    title: 'shared/ThemeSwitcher',
    component: ThemeSwitcher,
} satisfies Meta<typeof ThemeSwitcher>;

const Template: StoryFn<typeof ThemeSwitcher> = (args) => <ThemeSwitcher {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
