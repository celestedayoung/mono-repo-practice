import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Badge } from '@sos/components-react';

export default {
  title: 'Example/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: { type: 'select', options: ['blue', 'pink', 'orange', 'green'] },
    },
    size: {
      control: { type: 'select', options: ['s', 'm', 'l'] },
    },
  },
} as Meta;

const Template: Story = (args) => <Badge {...args} />;

export const Blue = Template.bind({});
Blue.args = {
  color: 'blue',
  size: 'm',
};

export const Pink = Template.bind({});
Pink.args = {
  color: 'pink',
  size: 'm',
};

export const Orange = Template.bind({});
Orange.args = {
  color: 'orange',
  size: 'm',
};

export const Green = Template.bind({});
Green.args = {
  color: 'green',
  size: 'm',
};

export const Large = Template.bind({});
Large.args = {
  color: 'blue',
  size: 'l',
};

export const Medium = Template.bind({});
Large.args = {
  color: 'blue',
  size: 'm',
};

export const Small = Template.bind({});
Small.args = {
  color: 'blue',
  size: 's',
};
