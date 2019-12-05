import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

// Local modules
import {
  IconLayout,
  IconLayoutProvider,
  defaultIconLayout,
  iconLayoutOptions,
  useIconLayout,
} from '../';
import '../styles.css';

// -----------------------------------------------------------------------------

const Button = (
  props: JSX.IntrinsicAttributes &
    React.ClassAttributes<HTMLButtonElement> &
    React.ButtonHTMLAttributes<HTMLButtonElement>,
) => (
  <button
    {...props}
    type="button"
    style={{
      padding: '0.75em 1em',
      backgroundColor: props.disabled ? '#bbb' : '#68b',
      borderRadius: '0.5em',
      borderWidth: 0,
      color: 'white',
      ...(props.style || {}),
    }}
  />
);

const Status = () => {
  const [iconLayout] = useIconLayout();
  return <code>{iconLayout}</code>;
};

const ResetButton = () => {
  const [iconLayout, dispatch] = useIconLayout();
  return (
    <Button
      onClick={() => dispatch({ type: 'reset' })}
      disabled={iconLayout === defaultIconLayout}
    >
      Reset
    </Button>
  );
};

const Buttons = () => {
  const [iconLayout, dispatch] = useIconLayout();
  return (
    <React.Fragment>
      {iconLayoutOptions.map(({ id, name }) => (
        <Button
          key={id}
          onClick={() => dispatch({ type: id })}
          disabled={iconLayout === id}
        >
          {name}
        </Button>
      ))}
    </React.Fragment>
  );
};

const Radios = () => {
  const [iconLayout, dispatch] = useIconLayout();
  return (
    <React.Fragment>
      {iconLayoutOptions.map(({ id, name }) => (
        <label key={id} htmlFor={`iconLayout-${id}`}>
          <input
            type="radio"
            name="iconLayout"
            id={`iconLayout-${id}`}
            value={id}
            onChange={() => dispatch({ type: id })}
            checked={iconLayout === id}
          />
          {name}
        </label>
      ))}
    </React.Fragment>
  );
};

const Select = () => {
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

const ArrowLeftIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="11"
    height="11"
    viewBox="0 0 24 24"
    style={{ fill: 'currentColor' }}
  >
    <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="11"
    height="11"
    viewBox="0 0 24 24"
    style={{ fill: 'currentColor' }}
  >
    <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
  </svg>
);

const PrevButton = () => (
  <Button style={{ height: '5em', width: '50%', maxWidth: '125px' }}>
    <IconLayout
      icon={<ArrowLeftIcon />}
      text="Previous"
      direction="left"
      placement="left"
    />
  </Button>
);

const NextButton = () => (
  <Button style={{ height: '5em', width: '50%', maxWidth: '125px' }}>
    <IconLayout
      icon={<ArrowRightIcon />}
      text="Next"
      direction="right"
      placement="right"
    />
  </Button>
);

const App = () => (
  <IconLayoutProvider>
    <fieldset>
      <legend>Radios:</legend>
      <Radios />
    </fieldset>

    <fieldset>
      <legend>Buttons:</legend>
      <Buttons />
    </fieldset>

    <fieldset>
      <legend>Select:</legend>
      <Select />
    </fieldset>

    <fieldset>
      <legend>ResetButton:</legend>
      <ResetButton />
    </fieldset>

    <fieldset>
      <legend>Status:</legend>
      <Status />
    </fieldset>

    <fieldset>
      <legend>Usage:</legend>
      <PrevButton /> <NextButton />
    </fieldset>
  </IconLayoutProvider>
);

// -----------------------------------------------------------------------------

ReactDOM.render(<App />, document.getElementById('root'));
