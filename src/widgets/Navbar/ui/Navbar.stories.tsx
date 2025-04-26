import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Navbar } from './Navbar';

export default {
    title: 'widget/Navbar',
    component: Navbar,
} satisfies Meta<typeof Navbar>;

const Template: StoryFn<typeof Navbar> = (args) => <Navbar {...args} />;

export const Light = Template.bind({});
Light.args = {};
