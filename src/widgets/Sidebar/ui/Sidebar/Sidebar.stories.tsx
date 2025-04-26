import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Sidebar } from './Sidebar';

export default {
    title: 'widget/Sidebar',
    component: Sidebar,
} satisfies Meta<typeof Sidebar>;

const Template: StoryFn<typeof Sidebar> = (args) => <Sidebar {...args} />;

export const Light = Template.bind({});
Light.args = {};

//Light.globals = { theme: Theme.DARK };
