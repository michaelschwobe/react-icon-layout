import { fireEvent, render, screen } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';

import {
  IconLayoutDispatchContext,
  IconLayoutProvider,
  IconLayoutProviderProps,
  IconLayoutStateContext,
  defaultVariant,
  iconLayoutVariants,
  useIconLayoutDispatch,
  useIconLayoutState,
} from '../src/index';
import { iconLayoutReducer } from '../src/react-icon-layout.context';

// -----------------------------------------------------------------------------

describe('IconLayoutStateContext', () => {
  test('Exported type is a React context component', () => {
    expect(IconLayoutStateContext).toEqual(
      expect.objectContaining({
        Consumer: expect.any(Object),
        Provider: expect.any(Object),
      }),
    );
  });
});

describe('IconLayoutDispatchContext', () => {
  test('Exported type is a React context component', () => {
    expect(IconLayoutDispatchContext).toEqual(
      expect.objectContaining({
        Consumer: expect.any(Object),
        Provider: expect.any(Object),
      }),
    );
  });
});

describe('useIconLayoutState', () => {
  test('Exported type is a Function', () => {
    expect(useIconLayoutState).toEqual(expect.any(Function));
  });

  test('Throws an Error if used outside of <IconLayoutProvider>', () => {
    const { result } = renderHook(() => useIconLayoutState());
    expect(result.error).toEqual(
      Error('useIconLayoutState must be used within a <IconLayoutProvider>'),
    );
  });

  test('Returns the default `state`', () => {
    const wrapper = ({ children }) => (
      <IconLayoutProvider>{children}</IconLayoutProvider>
    );
    const { result } = renderHook(() => useIconLayoutState(), { wrapper });
    expect(result.current).toEqual(defaultVariant);
  });
});

describe('useIconLayoutDispatch', () => {
  test('Exported type is a Function', () => {
    expect(useIconLayoutDispatch).toEqual(expect.any(Function));
  });

  test('Throws an Error if used outside of <IconLayoutProvider>', () => {
    const { result } = renderHook(() => useIconLayoutDispatch());
    expect(result.error).toEqual(
      Error('useIconLayoutDispatch must be used within a <IconLayoutProvider>'),
    );
  });

  test('Returns the `dispatch` function', () => {
    const wrapper = ({ children }) => (
      <IconLayoutProvider>{children}</IconLayoutProvider>
    );
    const { result } = renderHook(() => useIconLayoutDispatch(), { wrapper });
    expect(result.current).toEqual(expect.any(Function));
  });
});

describe('iconLayoutReducer', () => {
  test('Exported type is a Function', () => {
    expect(iconLayoutReducer).toEqual(expect.any(Function));
  });
  test('Throws an Error if missing params', () => {
    // @ts-expect-error missing params
    expect(() => iconLayoutReducer()).toThrow();
  });
  test('Throws an Error if passed an invalid action', () => {
    const state = undefined;
    const action = { type: 'badValue' };
    expect(() => iconLayoutReducer(state, action)).toThrow();
  });
});

describe('IconLayoutProvider', () => {
  const customRender = (
    ui: React.ReactNode,
    {
      providerProps,
      ...renderOptions
    }: { providerProps: Partial<IconLayoutProviderProps> } & Parameters<
      typeof render
    >[1],
  ) => {
    return render(
      <IconLayoutProvider {...providerProps}>{ui}</IconLayoutProvider>,
      renderOptions,
    );
  };

  test('Exported type is a Function', () => {
    expect(IconLayoutProvider).toEqual(expect.any(Function));
  });

  test('Returns the INITIAL `state` to consumers', () => {
    const providerProps: Partial<IconLayoutProviderProps> = {
      value: undefined,
    };
    customRender(
      <IconLayoutStateContext.Consumer>
        {(state) => <span>Received: {state}</span>}
      </IconLayoutStateContext.Consumer>,
      { providerProps },
    );
    expect(screen.getByText(/^Received:/).textContent).toContain(
      defaultVariant,
    );
  });

  test('Returns the PROVIDED `state` to consumers', () => {
    const providerProps: Partial<IconLayoutProviderProps> = {
      value: 'iconOnly',
    };
    customRender(
      <IconLayoutStateContext.Consumer>
        {(state) => <span>Received: {state}</span>}
      </IconLayoutStateContext.Consumer>,
      { providerProps },
    );
    expect(screen.getByText(/^Received:/).textContent).toContain(
      providerProps.value,
    );
  });

  test('Handles `state` and `dispatch` events', () => {
    const providerProps: Partial<IconLayoutProviderProps> = {
      value: undefined,
    };
    customRender(
      <IconLayoutStateContext.Consumer>
        {(state) => (
          <IconLayoutDispatchContext.Consumer>
            {(dispatch) => (
              <>
                <span>state: {state}</span>
                {[...iconLayoutVariants, 'reset'].map((variant) => (
                  <button
                    key={variant}
                    type="button"
                    onClick={() => dispatch({ type: variant })}
                  >
                    button: {variant}
                  </button>
                ))}
              </>
            )}
          </IconLayoutDispatchContext.Consumer>
        )}
      </IconLayoutStateContext.Consumer>,
      { providerProps },
    );

    const state = screen.getByText(/^state:/i);
    expect(state).toHaveTextContent('iconAndText');

    fireEvent.click(screen.getByText(/button: iconOnly/i));
    expect(state).toHaveTextContent('iconOnly');

    fireEvent.click(screen.getByText(/button: iconAndText/i));
    expect(state).toHaveTextContent('iconAndText');

    fireEvent.click(screen.getByText(/button: textOnly/i));
    expect(state).toHaveTextContent('textOnly');

    fireEvent.click(screen.getByText(/button: reset/i));
    expect(state).toHaveTextContent('iconAndText');
  });
});
