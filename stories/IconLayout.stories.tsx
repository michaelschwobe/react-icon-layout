import * as React from 'react';
import { Meta, Story } from '@storybook/react';

// Local modules
import {
  ConsumerProps,
  IconLayout,
  iconLayoutPositions,
  IconLayoutProvider,
} from '../src';
import '../styles.css';

// -----------------------------------------------------------------------------
// Template
// -----------------------------------------------------------------------------

const Template: Story<ConsumerProps> = args => <IconLayout {...args} />;

// -----------------------------------------------------------------------------
// Meta
// -----------------------------------------------------------------------------

const meta: Meta = {
  title: 'IconLayout',
  component: IconLayout,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    direction: {
      control: {
        type: 'select',
        options: iconLayoutPositions,
      },
    },
    placement: {
      control: {
        type: 'select',
        options: iconLayoutPositions,
      },
    },
  },
};

export default meta;

// -----------------------------------------------------------------------------
// Default
// -----------------------------------------------------------------------------

export const Default = Template.bind({});

Default.args = {
  icon: 'icon',
  text: 'text',
};

Default.decorators = [
  (Story: Story) => (
    <IconLayoutProvider>
      <Story />
    </IconLayoutProvider>
  ),
];

// -----------------------------------------------------------------------------
// Playground
// -----------------------------------------------------------------------------

export const Playground = Template.bind({});

Playground.args = {
  ...Default.args,
  icon: 'ICON',
  text: 'Lorem ipsum dolor sit amet',
};

Playground.decorators = [
  (Story: Story) => (
    <IconLayoutProvider>
      <div
        style={{
          height: '95vmin',
          padding: '1rem',
          border: '4px dotted silver',
        }}
      >
        <Story />
      </div>
    </IconLayoutProvider>
  ),
];
