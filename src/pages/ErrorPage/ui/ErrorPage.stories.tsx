import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { ErrorPage } from './ErrorPage';

export default {
    title: 'pages/ErrorPage',
    component: ErrorPage,
} satisfies Meta<typeof ErrorPage>;

const Template: StoryFn<typeof ErrorPage> = (args) => <ErrorPage {...args} />;

export const Light = Template.bind({});
Light.args = {};
