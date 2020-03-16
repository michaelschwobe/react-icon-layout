# react-icon-layout

React hook for displaying icon-to-text relationships.

<figure>
  <figcaption>You've likely seen this relationship before within the macOS Finder</figcaption>
  <img src="https://github.com/michaelschwobe/react-icon-layout/raw/master/media/Finder.png" width="800" alt="macOS Finder with it’s header right-click menu visible" />
</figure>

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
import React from 'react';
import ReactDOM from 'react-dom';
import {
  IconLayoutProvider,
  IconLayout,
  useIconLayout,
  iconLayoutOptions,
} from 'react-icon-layout';
import 'react-icon-layout/styles.css';

import { ReactComponent as ArrowRightIcon } from './arrow-right.svg';

const NextButton = props => (
  <button type="button" {...props}>
    <IconLayout
      icon={<ArrowRightIcon />}
      text="Next"
      direction="right"
      placement="right"
    />
  </button>
);

const IconLayoutPicker = () => {
  const [iconLayout, dispatch] = useIconLayout();
  return (
    <select
      value={iconLayout}
      onChange={event => dispatch({ type: event.target.value })}
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

- View “Basic” demo on [CodeSandbox](https://codesandbox.io/s/react-icon-layout-basic-example-urw6e)

### Advanced Examples

- View “Finder” demo on [CodeSandbox](https://codesandbox.io/s/react-icon-layout-finder-example-dzedn)
- View “example” folder on [GitHub](https://github.com/michaelschwobe/react-icon-layout/tree/master/example)
- View “stories” folder on [GitHub](https://github.com/michaelschwobe/react-icon-layout/tree/master/stories)

## API

### Exports

```js
import {
  iconLayouts, // List of context states
  defaultIconLayout, // Default context state
  iconLayoutOptions, // List of context ids and names
  iconLayoutPositions, // List of context consumer prop values
  defaultIconLayoutPosition, // Default context consumer prop value
  IconLayoutProvider, // Context provider component
  IconLayout, // Context consumer and display component
  useIconLayout, // Context consumer hook and updater
} from 'react-icon-layout';
import 'react-icon-layout/styles.css'; // Styles for <IconLayout>
```

### `<IconLayoutProvider>`

```js
import { IconLayoutProvider } from 'react-icon-layout';

const App = () => (
  <IconLayoutProvider value="textOnly">
    <div>exampleChild</div>
  </IconLayoutProvider>
);
```

#### `value`

`value?: 'iconAndText' | 'iconOnly' | 'textOnly' | null;`

Initial context state. **Default:** `'iconAndText'`.

#### `children`

`children: React.ReactNode;`

Consumer component(s). **Required.**

### `<IconLayout>`

```jsx
import { IconLayout } from 'react-icon-layout';
import 'react-icon-layout/styles.css';

const ExampleIconLayout = props => (
  <IconLayout
    {...props}
    className="exampleIconLayout"
    direction="left"
    placement="left"
    icon="exampleIcon"
    text="exampleText"
  />
);
```

#### `className`

`className?: string;`

CSS class name(s). **Default:** `null`

#### `direction`

`direction?: 'top-left' | 'top' | 'top-right' | 'left' | 'center' | 'right' | 'bottom-left' | 'bottom' | 'bottom-right' | null;`

Styles the positioning of `icon` to `text` while maintaining source order. **Default:** `'center'`.

#### `placement`

`placement?: 'top-left' | 'top' | 'top-right' | 'left' | 'center' | 'right' | 'bottom-left' | 'bottom' | 'bottom-right' | null;`

Styles the positioning of the component within a larger parent. **Default:** `null`.

#### `icon`

`icon: React.ReactNode;` **Required.**

Slot for the icon, similar to a `children` prop.

#### `text`

`text: React.ReactNode;` **Required.**

Slot for the text, similar to a `children` prop.

### `useIconLayout()`

```js
import { useIconLayout } from 'react-icon-layout';

const TextOnlyButton = props => {
  const [state, dispatch] = useIconLayout();
  return (
    <button
      {...props}
      type="button"
      onClick={() => dispatch({ type: 'textOnly' })}
    >
      Text Only
    </button>
  );
};
```

`const useIconLayout: () => readonly ['iconAndText' | 'iconOnly' | 'textOnly', React.Dispatch<ActionType>]`

#### `state`

Initial context state. **Default:** `'iconAndText'`.

#### `dispatch()`

`{ type: 'iconAndText' } | { type: 'iconOnly' } | { type: 'textOnly' } | { type: 'reset' }`

Method to update context state.

## License

[MIT](https://github.com/michaelschwobe/react-icon-layout/blob/master/LICENSE)
