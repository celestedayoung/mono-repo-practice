import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Button, ButtonProps } from '@sos/components-react';

export default {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
    onClick: { action: 'clicked' },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  size: 'm',
  mainText: 'Primary Button',
  subText: 'Subtext',
  isLoading: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  size: 'm',
  mainText: 'Secondary Button',
  subText: 'Subtext',
  isLoading: false,
};

export const Large = Template.bind({});
Large.args = {
  size: 'l',
  mainText: 'Large Button',
  subText: 'Subtext',
  isLoading: false,
};

export const Small = Template.bind({});
Small.args = {
  size: 's',
  mainText: 'Small Button',
  subText: 'Subtext',
  isLoading: false,
};
