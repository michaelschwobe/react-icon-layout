# react-icon-layout

React hook for displaying icon-to-text relationships.

## Features

- 3 common display modes: `Icon and Text`, `Icon Only`, or `Text Only`.
- Styles for positioning of `icon` to `text` while maintaining source order.
- Styles for positioning of `<IconLayout>` within a larger parent.

## Installation

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

ReactDOM.render(<App />, document.getElementById('root'));
```

### Advanced Example

Coming soon.

## License

[MIT](https://github.com/michaelschwobe/react-icon-layout/blob/master/LICENSE)
