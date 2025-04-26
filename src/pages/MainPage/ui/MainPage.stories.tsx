import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import MainPage from './MainPage';

export default {
    title: 'pages/MainPage',
    component: MainPage,
} satisfies Meta<typeof MainPage>;

const Template: StoryFn<typeof MainPage> = (args) => <MainPage {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
