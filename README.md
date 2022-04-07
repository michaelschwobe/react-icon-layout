# react-icon-layout

React components and hooks for controlling and displaying icon-to-text layouts.

[![NPM version](https://img.shields.io/npm/v/react-icon-layout.svg)](https://www.npmjs.com/package/react-icon-layout)
[![License](https://img.shields.io/npm/l/react-icon-layout)](https://github.com/michaelschwobe/react-icon-layout/blob/develop/LICENSE)
[![NPM status](https://img.shields.io/github/workflow/status/michaelschwobe/react-icon-layout/CI)](https://www.npmjs.com/package/react-icon-layout)
[![CI](https://github.com/michaelschwobe/react-icon-layout/actions/workflows/ci.yml/badge.svg)](https://github.com/michaelschwobe/react-icon-layout/actions/workflows/ci.yml)
[![CodeQL](https://github.com/michaelschwobe/react-icon-layout/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/michaelschwobe/react-icon-layout/actions/workflows/codeql-analysis.yml)
[![codecov](https://codecov.io/gh/michaelschwobe/react-icon-layout/branch/master/graph/badge.svg?token=NN3EY45TXL&)](https://codecov.io/gh/michaelschwobe/react-icon-layout)

You've likely seen this relationship before within the macOS Finder:

!['macOS Finder with it’s header right-click menu visible'](https://github.com/michaelschwobe/react-icon-layout/raw/develop/media/Finder-light.png#gh-light-mode-only)!['macOS Finder with it’s header right-click menu visible'](https://github.com/michaelschwobe/react-icon-layout/raw/develop/media/Finder-dark.png#gh-dark-mode-only)

## Features

- Context and hooks for controlling the 3 display modes: `Icon and Text`, `Icon Only`, or `Text Only`.
- Styles for positioning the icon-to-text relationship while maintaining source order.
- Styles for positioning the display component within a larger parent.

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
  IconLayoutProvider,
  iconLayoutOptions,
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

const IconLayoutSelector = () => {
  const iconLayoutState = useIconLayoutState();
  const iconLayoutDispatch = useIconLayoutDispatch();
  return (
    <label htmlFor="iconLayoutSelector">
      Select icon layout:{' '}
      <select
        name="iconLayoutSelector"
        id="iconLayoutSelector"
        value={iconLayoutState}
        onChange={(event) => iconLayoutDispatch({ type: event.target.value })}
      >
        {iconLayoutOptions.map(({ id, name }) => (
          <option key={id} value={id}>
            {name}
          </option>
        ))}
      </select>
    </label>
  );
};

const App = () => (
  <IconLayoutProvider>
    <NextButton />
    <IconLayoutSelector />
  </IconLayoutProvider>
);

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
```

- View “Basic” example on [CodeSandbox](https://codesandbox.io/s/react-icon-layout-basic-example-urw6e)

### Advanced Examples

- View “Finder” example on [CodeSandbox](https://codesandbox.io/s/react-icon-layout-finder-example-dzedn)
- View Storybook examples on [GitHub](https://github.com/michaelschwobe/react-icon-layout/blob/develop/stories/react-icon-layout.stories.tsx)

## API

### `<IconLayout>`

Display Component.

```ts
/** Sets the `class` attribute. **Default:** `undefined` */
className?: string | undefined;
/** Styles for positioning the icon-to-text relationship while maintaining source order. **Default:** `'center'` */
direction?: IconLayoutDirection | undefined;
/** Styles for positioning the component within a larger parent. **Default:** `'center'` */
placement?: IconLayoutPlacement | undefined;
/** Styles the display mode. **Default:** `'iconAndText'` */
variant?: IconLayoutState | undefined;
/** Sets the "icon" content, similar to a `children` prop. **Required.** */
icon: React.ReactNode;
/** Sets the "text" content, similar to a `children` prop. **Required.** */
text: React.ReactNode;
```

### `<IconLayoutProvider>`

Provider component. **\*Optional.** Use with `useIconLayoutState` and/or `useIconLayoutDispatch`.

```ts
/** Sets the content. **Required.** */
children: React.ReactNode;
/** Sets the initial state. **Default:** `iconAndText` */
value?: IconLayoutState | undefined;
```

### `useIconLayoutState()`

Hook for accessing `state`. **\*Requires** `IconLayoutProvider`.

### `useIconLayoutDispatch()`

Hook for accessing `dispatch`. **\*Requires** `IconLayoutProvider`.

### All Exports

```ts
import {
  /* List of `direction` prop values */
  iconLayoutDirections,
  /* List of `placement` prop values */
  iconLayoutPlacements,
  /* List of `variant` prop values / context states */
  iconLayoutStates,
  /* List for iterating button/input/option/etc elements */
  iconLayoutOptions,
  /* Default `direction` prop value */
  defaultIconLayoutDirection,
  /* Default `placement` prop value */
  defaultIconLayoutPlacement,
  /* Default `placement` prop value / context state */
  defaultIconLayoutState,
  /* Context component for `dispatch` */
  IconLayoutDispatchContext,
  /* Context component for `state` */
  IconLayoutStateContext,
  /* Provider component */
  IconLayoutProvider,
  /* Display Component */
  IconLayout,
  /* Hook for accessing `state` */
  useIconLayoutState,
  /* Hook for accessing `dispatch` */
  useIconLayoutDispatch,
} from 'react-icon-layout';

/* Types for when using TypeScript */
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

/* Styles for <IconLayout> */
import 'react-icon-layout/styles.css';
```

## License

[MIT](https://github.com/michaelschwobe/react-icon-layout/blob/develop/LICENSE)
