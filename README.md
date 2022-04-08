# react-icon-layout

Everything you need to manage icon-to-text layouts.

[![NPM version](https://img.shields.io/npm/v/react-icon-layout.svg)](https://www.npmjs.com/package/react-icon-layout)
[![License](https://img.shields.io/npm/l/react-icon-layout)](https://github.com/michaelschwobe/react-icon-layout/blob/master/LICENSE)
[![NPM status](https://img.shields.io/github/workflow/status/michaelschwobe/react-icon-layout/CI)](https://www.npmjs.com/package/react-icon-layout)
[![CI](https://github.com/michaelschwobe/react-icon-layout/actions/workflows/ci.yml/badge.svg)](https://github.com/michaelschwobe/react-icon-layout/actions/workflows/ci.yml)
[![CodeQL](https://github.com/michaelschwobe/react-icon-layout/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/michaelschwobe/react-icon-layout/actions/workflows/codeql-analysis.yml)
[![codecov](https://codecov.io/gh/michaelschwobe/react-icon-layout/branch/master/graph/badge.svg?token=NN3EY45TXL&)](https://codecov.io/gh/michaelschwobe/react-icon-layout)

## Use Case

As a developer, you’d like to:

- Create icon-to-text pairs (or other content types) multiple times, and possibly nest them.
- Dynamically or statically control how some or all icon-to-text pairs display.
- Use custom or default styles and variables.

So that you can:

- Ensure layout relationships are consistent and manageable.
- Allow some or all users to control their own icon-to-text display settings. For example, you’ve likely seen this use case before within the macOS Finder:

<p>
  <picture>
    <source
      srcset="https://github.com/michaelschwobe/react-icon-layout/raw/master/media/Finder-dark.png"
      media="(prefers-color-scheme: dark)"
    />
    <img
      src="https://github.com/michaelschwobe/react-icon-layout/raw/master/media/Finder-light.png"
      alt="'macOS Finder with it’s header right-click menu visible'"
      style="max-width: 100%;"
    />
  </picture>
</p>

## Installation

```sh
npm i -S react-icon-layout
```

or

```sh
yarn add react-icon-layout
```

## Usage

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

function NextButton() {
  const iconLayoutState = useIconLayoutState();
  return (
    <button type="button">
      <IconLayout
        icon={<ArrowRightIcon />}
        text="Next"
        placeIcon="right"
        placeSelf="right"
        variant={iconLayoutState}
      />
    </button>
  );
}

function IconLayoutSelector() {
  const iconLayoutState = useIconLayoutState();
  const iconLayoutDispatch = useIconLayoutDispatch();
  return (
    <label htmlFor="IconLayoutSelector">
      Select icon layout:{' '}
      <select
        name="IconLayoutSelector"
        id="IconLayoutSelector"
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
}

function App() {
  return (
    <IconLayoutProvider>
      <NextButton />
      <IconLayoutSelector />
    </IconLayoutProvider>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
```

- View basic example (shown above) on [CodeSandbox](https://codesandbox.io/s/react-icon-layout-basic-example-urw6e)
- View advanced “Finder” example on [CodeSandbox](https://codesandbox.io/s/react-icon-layout-finder-example-dzedn)
- View Storybook examples on [GitHub](https://github.com/michaelschwobe/react-icon-layout/blob/master/stories/react-icon-layout.stories.tsx)

## Features

```ts
import {
  /** Default `placeIcon` prop value */
  defaultPlaceIcon,
  /** Default `placeSelf` prop value */
  defaultPlaceSelf,
  /** Default `variant` prop value / context state */
  defaultVariant,
  /** List of `placeIcon` and `placeSelf` prop values */
  iconLayoutPlacements,
  /** List of `variant` prop values / context states */
  iconLayoutVariants,
  /** List for iterating button/input/option/etc elements */
  iconLayoutOptions,
  /** Display component */
  IconLayout,
  /** Context component for `state` */
  IconLayoutStateContext,
  /** Context component for `dispatch` */
  IconLayoutDispatchContext,
  /** Context provider component */
  IconLayoutProvider,
  /** Hook for accessing context `state` */
  useIconLayoutState,
  /** Hook for accessing context `dispatch` */
  useIconLayoutDispatch,
} from 'react-icon-layout';

/* Types for when using TypeScript */
import type {
  IconLayoutAction,
  IconLayoutDispatch,
  IconLayoutOptions,
  IconLayoutPlacement,
  IconLayoutProps,
  IconLayoutProviderProps,
  IconLayoutState,
} from 'react-icon-layout';

/* Styles for <IconLayout> */
import 'react-icon-layout/styles.css';
```

## API

### `<IconLayout>`

Display component, does **NOT** consume context.

```ts
/** Sets the `class` attribute. **Default:** `undefined` */
className?: string | undefined;
/** Styles the “icon” placement within the display component. **Default:** `'left'` */
placeIcon?: IconLayoutPlacement | undefined;
/** Styles the component placement within a larger parent. **Default:** `undefined` */
placeSelf?: IconLayoutPlacement | undefined;
/** Styles the content visibility. **Default:** `'iconAndText'` */
variant?: IconLayoutState | undefined;
/** Sets the “icon” content, similar to a `children` prop. **Required.** */
icon: React.ReactNode;
/** Sets the “text” content, similar to a `children` prop. **Required.** */
text: React.ReactNode;
```

### `<IconLayoutProvider>`

Provider component.

```ts
/** Sets the content. **Required.** */
children: React.ReactNode;
/** Sets the initial state. **Default:** `iconAndText` */
value?: IconLayoutState | undefined;
```

### `useIconLayoutState()`

Hook for accessing `state`, requires `<IconLayoutProvider>`.

### `useIconLayoutDispatch()`

Hook for accessing `dispatch`, requires `<IconLayoutProvider>`.

## License

[MIT](https://github.com/michaelschwobe/react-icon-layout/blob/master/LICENSE)
