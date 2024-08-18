import { Meta } from '@storybook/react';
import { Chips } from '@sos/components-react';

export default {
  title: 'Components/Chips',
  component: Chips,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'radio', options: ['s', 'm', 'l'] },
    variant: { control: 'radio', options: ['primary', 'secondary'] },
    state: {
      control: 'radio',
      options: ['default', 'outline', 'active', 'disabled'],
    },
  },
  args: {
    onClick: () => {},
  },
} as Meta;

export const Primary = {
  args: {
    size: 'm',
    variant: 'primary',
    state: 'default',
    label: 'Primary',
  },
};

export const Secondary = {
  args: {
    size: 'm',
    variant: 'secondary',
    state: 'default',
    label: 'Secondary',
  },
};

export const OutlinePrimary = {
  args: {
    size: 'm',
    variant: 'primary',
    state: 'outline',
    label: 'Outline Primary',
  },
};

export const OutlineSecondary = {
  args: {
    size: 'm',
    variant: 'secondary',
    state: 'outline',
    label: 'Outline Secondary',
  },
};

export const ActivePrimary = {
  args: {
    size: 'm',
    variant: 'primary',
    state: 'active',
    label: 'Active Primary',
  },
};

export const ActiveSecondary = {
  args: {
    size: 'm',
    variant: 'secondary',
    state: 'active',
    label: 'Active Secondary',
  },
};

export const Disabled = {
  args: {
    size: 'm',
    variant: 'primary',
    state: 'disabled',
    label: 'Disabled',
  },
};
