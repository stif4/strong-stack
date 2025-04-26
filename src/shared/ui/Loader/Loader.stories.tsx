import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Loader } from './Loader';

export default {
    title: 'shared/Loader',
    component: Loader,
} satisfies Meta<typeof Loader>;

const Template: StoryFn<typeof Loader> = (args) => <Loader {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
