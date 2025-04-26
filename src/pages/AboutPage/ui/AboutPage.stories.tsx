import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import AboutPage from './AboutPage';

export default {
    title: 'pages/AboutPage',
    component: AboutPage,
} satisfies Meta<typeof AboutPage>;

const Template: StoryFn<typeof AboutPage> = (args) => <AboutPage {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
