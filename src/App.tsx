import {
  defaultIconLayoutState,
  IconLayout,
  iconLayoutOptions,
  IconLayoutProvider,
  useIconLayoutDispatch,
  useIconLayoutState,
} from '../lib/index';

import '../styles.css';

// -----------------------------------------------------------------------------

function Select() {
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
}

function RadioGroup() {
  const iconLayoutState = useIconLayoutState();
  const iconLayoutDispatch = useIconLayoutDispatch();
  return (
    <div style={{ display: 'flex', gap: '1rem' }}>
      {iconLayoutOptions.map(({ id, name }) => (
        <label key={id} htmlFor={`iconLayout-${id}`}>
          <input
            type="radio"
            name="iconLayout"
            id={`iconLayout-${id}`}
            value={id}
            onChange={() => iconLayoutDispatch({ type: id })}
            checked={iconLayoutState === id}
          />
          {name}
        </label>
      ))}
    </div>
  );
}

function ResetButton() {
  const iconLayoutState = useIconLayoutState();
  const iconLayoutDispatch = useIconLayoutDispatch();
  return (
    <button
      type="button"
      onClick={() => iconLayoutDispatch({ type: 'reset' })}
      disabled={iconLayoutState === defaultIconLayoutState}
      aria-pressed={iconLayoutState === defaultIconLayoutState}
    >
      Reset
    </button>
  );
}

function Buttons() {
  const iconLayoutState = useIconLayoutState();
  const iconLayoutDispatch = useIconLayoutDispatch();
  return (
    <div style={{ display: 'flex', gap: '1rem' }}>
      {iconLayoutOptions.map(({ id, name }) => (
        <button
          key={id}
          type="button"
          onClick={() => iconLayoutDispatch({ type: id })}
          disabled={iconLayoutState === id}
          aria-pressed={iconLayoutState === id}
        >
          {name}
        </button>
      ))}
    </div>
  );
}

function Status() {
  const iconLayoutState = useIconLayoutState();
  return <code>{iconLayoutState}</code>;
}

function ArrowLeftIcon() {
  return (
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
}

function ArrowRightIcon() {
  return (
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
}

function PrevButton() {
  const iconLayoutState = useIconLayoutState();
  return (
    <button type="button">
      <IconLayout
        icon={<ArrowLeftIcon />}
        text="Previous"
        direction="left"
        placement="left"
        variant={iconLayoutState}
      />
    </button>
  );
}

function NextButton() {
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
}

function Pagination() {
  return (
    <span
      style={{
        display: 'inline-grid',
        gridTemplateColumns: '1fr 1fr',
        width: '20rem',
        height: '5rem',
        gap: '1rem',
      }}
    >
      <PrevButton /> <NextButton />
    </span>
  );
}

export default function App() {
  return (
    <IconLayoutProvider>
      <p>
        <ResetButton />
      </p>
      <h2>Input:</h2>
      <p>
        <Select />
      </p>
      <p>
        <RadioGroup />
      </p>
      <p>
        <Buttons />
      </p>

      <h2>Output:</h2>
      <p>
        <Status />
      </p>
      <p>
        <Pagination />
      </p>
    </IconLayoutProvider>
  );
}
