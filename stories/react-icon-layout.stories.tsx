import { IconLayout } from '../lib/react-icon-layout.component';

import type { ComponentMeta, ComponentStory } from '@storybook/react';

// -----------------------------------------------------------------------------

export default {
  component: IconLayout,
  title: 'IconLayout',
} as ComponentMeta<typeof IconLayout>;

const Template: ComponentStory<typeof IconLayout> = (args) => (
  <IconLayout {...args} />
);

export const Default = Template.bind({});
Default.args = {
  icon: 'icon',
  text: 'text',
};

export const Playground = Template.bind({});
Playground.args = {
  ...Default.args,
  icon: (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="8" cy="8" r="8" />
    </svg>
  ),
  text: (
    <>
      Lorem ipsum <br />
      dolor sit amet
    </>
  ),
};
Playground.decorators = [
  (Story) => (
    <div
      style={{
        height: '95vmin',
        padding: '1rem',
        border: '4px dotted silver',
      }}
    >
      <Story />
    </div>
  ),
];
