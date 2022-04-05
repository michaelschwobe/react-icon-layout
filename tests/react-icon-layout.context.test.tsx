import { fireEvent, render, screen } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';

import {
  defaultIconLayoutState,
  iconLayoutStates,
} from '../lib/react-icon-layout.constants';
import {
  IconLayoutDispatchContext,
  IconLayoutProvider,
  iconLayoutReducer,
  IconLayoutStateContext,
  useIconLayoutDispatch,
  useIconLayoutState,
  IconLayoutProviderProps,
} from '../lib/react-icon-layout.context';

// -----------------------------------------------------------------------------

describe('IconLayoutStateContext', () => {
  test('Should export a React context component', () => {
    expect(IconLayoutStateContext).toEqual(
      expect.objectContaining({
        Consumer: expect.any(Object),
        Provider: expect.any(Object),
      }),
    );
  });
});

describe('IconLayoutDispatchContext', () => {
  test('Should export a React context component', () => {
    expect(IconLayoutDispatchContext).toEqual(
      expect.objectContaining({
        Consumer: expect.any(Object),
        Provider: expect.any(Object),
      }),
    );
  });
});

describe('useIconLayoutState', () => {
  test('Should export a Function', () => {
    expect(useIconLayoutState).toEqual(expect.any(Function));
  });

  test('Should throw an Error if used outside of <IconLayoutProvider>', () => {
    const { result } = renderHook(() => useIconLayoutState());
    expect(result.error).toEqual(
      Error('useIconLayoutState must be used within a <IconLayoutProvider>'),
    );
  });

  test('Should return the default state', () => {
    const wrapper = ({ children }) => (
      <IconLayoutProvider>{children}</IconLayoutProvider>
    );
    const { result } = renderHook(() => useIconLayoutState(), { wrapper });
    expect(result.current).toEqual(defaultIconLayoutState);
  });
});

describe('useIconLayoutDispatch', () => {
  test('Should export a Function', () => {
    expect(useIconLayoutDispatch).toEqual(expect.any(Function));
  });

  test('Should throw an Error if used outside of <IconLayoutProvider>', () => {
    const { result } = renderHook(() => useIconLayoutDispatch());
    expect(result.error).toEqual(
      Error('useIconLayoutDispatch must be used within a <IconLayoutProvider>'),
    );
  });

  test('Should return the dispatch function', () => {
    const wrapper = ({ children }) => (
      <IconLayoutProvider>{children}</IconLayoutProvider>
    );
    const { result } = renderHook(() => useIconLayoutDispatch(), { wrapper });
    expect(result.current).toEqual(expect.any(Function));
  });
});

describe('iconLayoutReducer', () => {
  test('Should export a Function', () => {
    expect(iconLayoutReducer).toEqual(expect.any(Function));
  });
  test('Should throw an Error if missing params', () => {
    // @ts-expect-error missing params
    expect(() => iconLayoutReducer()).toThrow();
  });
  test('Should throw an Error if passed an invalid action', () => {
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

  test('Should export a Function', () => {
    expect(IconLayoutProvider).toEqual(expect.any(Function));
  });

  test('Should return the initial state to consumers', () => {
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
      defaultIconLayoutState,
    );
  });

  test('Should return the provided state to consumers', () => {
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

  test('Should handle state and dispatch events', () => {
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
                {[...iconLayoutStates, 'reset'].map((variant) => (
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