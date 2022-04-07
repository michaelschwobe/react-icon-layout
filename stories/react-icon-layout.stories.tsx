import {
  IconLayout,
  IconLayoutProvider,
  defaultVariant,
  iconLayoutOptions,
  useIconLayoutDispatch,
  useIconLayoutState,
} from '../src/index';

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

export const IconOnly = Template.bind({});
IconOnly.args = {
  ...Default.args,
  variant: 'iconOnly',
};

export const TextOnly = Template.bind({});
TextOnly.args = {
  ...Default.args,
  variant: 'textOnly',
};

export const WithReactElements = Template.bind({});
WithReactElements.args = {
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

export const WithIconLayoutProvider = () => (
  <IconLayoutProvider>
    <h1 style={{ marginTop: 0 }}>Input:</h1>
    <p>
      <ResetButton />
    </p>
    <p>
      <Select />
    </p>
    <p>
      <RadioGroup />
    </p>
    <p>
      <Buttons />
    </p>
    <h1>Output:</h1>
    <p>
      <Status />
    </p>
    <p>
      <Pagination />
    </p>
  </IconLayoutProvider>
);
WithIconLayoutProvider.storyName = 'With IconLayoutProvider';

// -----------------------------------------------------------------------------

function Select() {
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
}

function RadioGroup() {
  const iconLayoutState = useIconLayoutState();
  const iconLayoutDispatch = useIconLayoutDispatch();
  return (
    <span style={{ display: 'flex', gap: '1rem' }}>
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
    </span>
  );
}

function ResetButton() {
  const iconLayoutState = useIconLayoutState();
  const iconLayoutDispatch = useIconLayoutDispatch();
  return (
    <button
      type="button"
      onClick={() => iconLayoutDispatch({ type: 'reset' })}
      disabled={iconLayoutState === defaultVariant}
      aria-pressed={iconLayoutState === defaultVariant}
    >
      Reset
    </button>
  );
}

function Buttons() {
  const iconLayoutState = useIconLayoutState();
  const iconLayoutDispatch = useIconLayoutDispatch();
  return (
    <span style={{ display: 'flex', gap: '1rem' }}>
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
    </span>
  );
}

function Status() {
  const iconLayoutState = useIconLayoutState();
  return <code>{iconLayoutState}</code>;
}

function ArrowLeftIcon() {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      style={{ fill: 'currentColor' }}
    >
      <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
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
        placeIcon="left"
        placeSelf="left"
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
        placeIcon="right"
        placeSelf="right"
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
