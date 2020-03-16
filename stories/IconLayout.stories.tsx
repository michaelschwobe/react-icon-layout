import React from 'react';
import { DecoratorFunction } from '@storybook/addons';
import { select, text, withKnobs } from '@storybook/addon-knobs';
import {
  IconLayout,
  IconLayoutProvider,
  iconLayouts,
  defaultIconLayoutPosition,
  iconLayoutPositions,
  useIconLayout,
  // TODO: Remove when TSDX is updated with new Storybook config.
  // @ts-ignore - Cannot find module '@'.ts(2307)
} from '@/';
import '@/styles.css';

// -----------------------------------------------------------------------------
// typings
// -----------------------------------------------------------------------------

interface CSFStory<StoryFnReturnType = unknown> {
  (): StoryFnReturnType;
  story?: {
    name?: string;
    decorators?: DecoratorFunction<StoryFnReturnType>[];
    parameters?: { [name: string]: unknown };
  };
}

// -----------------------------------------------------------------------------
// default
// -----------------------------------------------------------------------------

export default {
  title: 'IconLayout',
  component: IconLayout,
};

// -----------------------------------------------------------------------------
// Minimal
// -----------------------------------------------------------------------------

export const Minimal: CSFStory<JSX.Element> = () => (
  <IconLayout icon="icon" text="text" />
);

Minimal.story = {
  decorators: [storyFn => <IconLayoutProvider>{storyFn()}</IconLayoutProvider>],
};

// -----------------------------------------------------------------------------
// Knobs
// -----------------------------------------------------------------------------

export const Knobs: CSFStory<JSX.Element> = () => (
  <IconLayout
    className={text('className', 'example', 'Consumer')}
    direction={select(
      'direction',
      iconLayoutPositions,
      defaultIconLayoutPosition,
      'Consumer',
    )}
    placement={select(
      'placement',
      iconLayoutPositions,
      defaultIconLayoutPosition,
      'Consumer',
    )}
    icon={text('icon', 'ICON', 'Consumer')}
    text={text('text', 'Lorem ipsum dolor sit amet', 'Consumer')}
  />
);

const Wrapper = ({ children }) => {
  const [iconLayout, dispatch] = useIconLayout();
  const layout = select('layout', iconLayouts, iconLayout, 'Provider');
  React.useEffect(() => {
    dispatch({ type: layout });
  }, [dispatch, layout]);
  return (
    <div
      style={{
        height: '95vmin',
        padding: '1rem',
        border: '4px dotted silver',
      }}
    >
      {children}
    </div>
  );
};

Knobs.story = {
  decorators: [
    withKnobs,
    storyFn => (
      <IconLayoutProvider>
        <Wrapper>{storyFn()}</Wrapper>
      </IconLayoutProvider>
    ),
  ],
};
