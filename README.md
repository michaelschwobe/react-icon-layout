# react-icon-layout

React hook for displaying icon-to-text relationships.

[![version](https://img.shields.io/npm/v/react-icon-layout.svg?style=flat-square)](https://www.npmjs.com/package/react-icon-layout)
[![license](https://img.shields.io/npm/l/react-icon-layout?style=flat-square)](https://github.com/michaelschwobe/react-icon-layout/blob/develop/LICENSE)
[![status](https://img.shields.io/github/workflow/status/michaelschwobe/react-icon-layout/CI?style=flat-square)](https://www.npmjs.com/package/react-icon-layout)
[![coverage](https://codecov.io/gh/michaelschwobe/react-icon-layout/branch/develop/graph/badge.svg?token=NN3EY45TXL)](https://codecov.io/gh/michaelschwobe/react-icon-layout)

You've likely seen this relationship before within the macOS Finder:

!['macOS Finder with it’s header right-click menu visible'](https://github.com/michaelschwobe/react-icon-layout/raw/develop/media/Finder-light.png#gh-light-mode-only)!['macOS Finder with it’s header right-click menu visible'](https://github.com/michaelschwobe/react-icon-layout/raw/develop/media/Finder-dark.png#gh-dark-mode-only)

## Features

- 3 common display modes: `Icon and Text`, `Icon Only`, or `Text Only`.
- Styles for positioning of `icon` to `text` while maintaining source order.
- Styles for positioning of `<IconLayout>` within a larger parent.

## Installation

```sh
npm i -S react-icon-layout
```

or

```sh
yarn add react-icon-layout
```

## Usage

### Basic Example

```js
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  IconLayout,
  iconLayoutOptions,
  IconLayoutProvider,
  useIconLayoutDispatch,
  useIconLayoutState,
} from 'react-icon-layout';
import 'react-icon-layout/styles.css';

import { ReactComponent as ArrowRightIcon } from './arrow-right.svg';

const NextButton = () => {
  const iconLayoutState = useIconLayoutState();
  return (
    <button type="button">
      <IconLayout
        icon={<ArrowRightIcon />}
        text="Next"
        direction="right"
        placement="right"
        variant={iconLayoutState}
      />
    </button>
  );
};

const IconLayoutPicker = () => {
  const iconLayoutState = useIconLayoutState();
  const iconLayoutDispatch = useIconLayoutDispatch();
  return (
    <select
      value={iconLayoutState}
      onChange={(event) => iconLayoutDispatch({ type: event.target.value })}
    >
      {iconLayoutOptions.map(({ id, name }) => (
        <option key={id} value={id}>
          {name}
        </option>
      ))}
    </select>
  );
};

const App = () => (
  <IconLayoutProvider>
    <NextButton />
    <IconLayoutPicker />
  </IconLayoutProvider>
);

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
```

- View “Basic” example on [CodeSandbox](https://codesandbox.io/s/react-icon-layout-basic-example-urw6e)

### Advanced Examples

- View “Finder” example on [CodeSandbox](https://codesandbox.io/s/react-icon-layout-finder-example-dzedn)
- View App example on [GitHub](https://github.com/michaelschwobe/react-icon-layout/blob/develop/src/App.tsx)
- View Storybook example on [GitHub](https://github.com/michaelschwobe/react-icon-layout/blob/develop/stories/react-icon-layout.stories.tsx)

## API

### Exports

```ts
import {
  /* ↓ List of `direction` prop values */
  iconLayoutDirections,
  /* ↓ List of `placement` prop values */
  iconLayoutPlacements,
  /* ↓ List of `variant` prop values / context states */
  iconLayoutStates,
  /* ↓ List for iterating button/input/option/etc elements */
  iconLayoutOptions,
  /* ↓ Default `direction` prop value */
  defaultIconLayoutDirection,
  /* ↓ Default `placement` prop value */
  defaultIconLayoutPlacement,
  /* ↓ Default `placement` prop value / context state */
  defaultIconLayoutState,
  /* ↓ Context component for `dispatch` */
  IconLayoutDispatchContext,
  /* ↓ Context component for `state` */
  IconLayoutStateContext,
  /* ↓ Provider component */
  IconLayoutProvider,
  /* ↓ Display Component */
  IconLayout,
  /* ↓ Hook for accessing `state` */
  useIconLayoutState,
  /* ↓ Hook for accessing `dispatch` */
  useIconLayoutDispatch,
} from 'react-icon-layout';

/* ↓ Types for when using TypeScript */
import type {
  IconLayoutAction,
  IconLayoutDirection,
  IconLayoutDispatch,
  IconLayoutOption,
  IconLayoutPlacement,
  IconLayoutProps,
  IconLayoutProviderProps,
  IconLayoutState,
} from 'react-icon-layout';

/* ↓ Styles for <IconLayout> */
import 'react-icon-layout/styles.css';
```

### `<IconLayout>`

```jsx
import { IconLayout } from 'react-icon-layout';
import 'react-icon-layout/styles.css';

const IconOnly = (props) => (
  <IconLayout
    {...props}
    className="exampleIconOnly"
    icon="exampleIcon"
    text="exampleText"
    direction="center"
    placement="center"
    variant="iconOnly"
  />
);
```

#### `className`

`className?: string | undefined;`

Sets the `class` attribute. **Default:** `undefined`

#### `direction`

`direction?: IconLayoutDirection | undefined;`

Styles the positioning of `icon` to `text` while maintaining source order. **Default:** `center`

#### `placement`

`placement?: IconLayoutPlacement | undefined;`

Styles the positioning of the component within a larger parent. **Default:** `center`

#### `variant`

`variant?: IconLayoutState | undefined;`

Styles the display mode. **Default:** `iconAndText`

#### `icon`

`icon: React.ReactNode;`

Sets the "icon" content, similar to a `children` prop. **Required.**

#### `text`

`text: React.ReactNode;`

Sets the "text" content, similar to a `children` prop. **Required.**

### `<IconLayoutProvider>`

```js
import { IconLayoutProvider } from 'react-icon-layout';

const App = () => (
  <IconLayoutProvider value="textOnly">
    <div>exampleChild</div>
  </IconLayoutProvider>
);
```

#### `children`

`children: React.ReactNode;`

Sets the content. **Required.**

#### `value`

`value?: IconLayoutState | undefined;`

Sets the initial state. **Default:** `'iconAndText'`.

### `useIconLayoutState()`

```js
import { useIconLayoutState } from 'react-icon-layout';

const IconLayoutSpan = (props) => {
  const iconLayoutState = useIconLayoutState();
  return <span {...props}>{iconLayoutState}</span>;
};
```

`const useIconLayoutState: () => IconLayoutState`

Custom hook that returns the context state.

### `useIconLayoutDispatch()`

```js
import { useIconLayoutDispatch } from 'react-icon-layout';

const TextOnlyButton = (props) => {
  const iconLayoutDispatch = useIconLayoutDispatch();
  return (
    <button
      {...props}
      type="button"
      onClick={() => iconLayoutDispatch({ type: 'textOnly' })}
    >
      Text Only
    </button>
  );
};
```

`const useIconLayoutDispatch: () => IconLayoutDispatch`

Custom hook that returns the method to update context state.

## License

[MIT](https://github.com/michaelschwobe/react-icon-layout/blob/develop/LICENSE)
