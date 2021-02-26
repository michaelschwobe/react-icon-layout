import * as React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';

// Local modules
import {
  IconLayoutStateContext,
  IconLayoutDispatchContext,
  iconLayoutReducer,
  IconLayoutProvider,
} from '../src/IconLayoutProvider';

// -----------------------------------------------------------------------------
// Contexts
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

// -----------------------------------------------------------------------------
// Reducer
// -----------------------------------------------------------------------------

describe('iconLayoutReducer', () => {
  test('Should export a Function', () => {
    expect(iconLayoutReducer).toEqual(expect.any(Function));
  });

  test('Should throw an Error if missing params', () => {
    expect(iconLayoutReducer).toThrow();
  });

  test('Should throw an Error if passed an invalid action', () => {
    const state = undefined;
    const action = { type: 'nextValue' };
    expect(() => iconLayoutReducer(state, action)).toThrow();
  });

  test('Should return `iconAndText` when provided `{ type: "iconAndText" }`', () => {
    const state = undefined;
    const actionType = 'iconAndText';
    const action = { type: actionType };
    expect(iconLayoutReducer(state, action)).toEqual(actionType);
  });

  test('Should return `iconOnly` when provided `{ type: "iconOnly" }`', () => {
    const state = undefined;
    const actionType = 'iconOnly';
    const action = { type: actionType };
    expect(iconLayoutReducer(state, action)).toEqual(actionType);
  });

  test('Should return `textOnly` when provided `{ type: "textOnly" }`', () => {
    const state = undefined;
    const actionType = 'textOnly';
    const action = { type: actionType };
    expect(iconLayoutReducer(state, action)).toEqual(actionType);
  });

  test('Should return `iconAndText` when provided `{ type: "reset" }`', () => {
    const state = undefined;
    const actionType = 'reset';
    const action = { type: actionType };
    expect(iconLayoutReducer(state, action)).toEqual('iconAndText');
  });
});

// -----------------------------------------------------------------------------
// Provider
// -----------------------------------------------------------------------------

describe('IconLayoutProvider', () => {
  test('Should export a Function', () => {
    expect(IconLayoutProvider).toEqual(expect.any(Function));
  });

  test('Should return the initial state to consumers', () => {
    const { getByText } = render(
      <IconLayoutProvider value={null}>
        <IconLayoutStateContext.Consumer>
          {state => <span>Received: {state}</span>}
        </IconLayoutStateContext.Consumer>
      </IconLayoutProvider>,
    );
    expect(getByText(/^Received:/).textContent).toEqual(
      'Received: iconAndText',
    );
  });

  test('Should return the provided state to consumers', () => {
    const { getByText } = render(
      <IconLayoutProvider value="iconOnly">
        <IconLayoutStateContext.Consumer>
          {state => <span>Received: {state}</span>}
        </IconLayoutStateContext.Consumer>
      </IconLayoutProvider>,
    );
    expect(getByText(/^Received:/).textContent).toEqual('Received: iconOnly');
  });

  test('Should return the state setter function to consumers', () => {
    const { getByText } = render(
      <IconLayoutProvider>
        <IconLayoutDispatchContext.Consumer>
          {dispatch => <span>Received: {typeof dispatch}</span>}
        </IconLayoutDispatchContext.Consumer>
      </IconLayoutProvider>,
    );
    expect(getByText(/^Received:/).textContent).toEqual('Received: function');
  });

  test('Should handle state and dispatch events', () => {
    const { getByText } = render(
      <IconLayoutProvider>
        <IconLayoutStateContext.Consumer>
          {state => (
            <IconLayoutDispatchContext.Consumer>
              {dispatch =>
                !!dispatch && (
                  <span>
                    <span>State: {state}</span>
                    <button
                      type="button"
                      onClick={() => dispatch({ type: 'iconAndText' })}
                    >
                      Button: iconAndText
                    </button>
                    <button
                      type="button"
                      onClick={() => dispatch({ type: 'iconOnly' })}
                    >
                      Button: iconOnly
                    </button>
                    <button
                      type="button"
                      onClick={() => dispatch({ type: 'textOnly' })}
                    >
                      Button: textOnly
                    </button>
                    <button
                      type="button"
                      onClick={() => dispatch({ type: 'reset' })}
                    >
                      Button: reset
                    </button>
                  </span>
                )
              }
            </IconLayoutDispatchContext.Consumer>
          )}
        </IconLayoutStateContext.Consumer>
      </IconLayoutProvider>,
    );

    const state = getByText(/^State:/);
    const iconAndTextButton = getByText(/Button: iconAndText/);
    const iconOnlyButton = getByText(/Button: iconOnly/);
    const textOnlyButton = getByText(/Button: textOnly/);
    const resetButton = getByText(/Button: reset/);

    expect(state).toHaveTextContent('iconAndText');

    fireEvent.click(iconOnlyButton);
    expect(state).toHaveTextContent('iconOnly');

    fireEvent.click(iconAndTextButton);
    expect(state).toHaveTextContent('iconAndText');

    fireEvent.click(textOnlyButton);
    expect(state).toHaveTextContent('textOnly');

    fireEvent.click(resetButton);
    expect(state).toHaveTextContent('iconAndText');
  });
});
