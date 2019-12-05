import * as React from 'react';
import PropTypes from 'prop-types';

// Local modules
import { defaultIconLayout, iconLayouts } from './constants';
import { ActionType, DispatchType, ProviderProps, StateType } from './types';

// -----------------------------------------------------------------------------
// Contexts
// -----------------------------------------------------------------------------

export const IconLayoutStateContext = React.createContext<
  StateType | undefined
>(undefined);

IconLayoutStateContext.displayName = 'IconLayoutStateContext';

export const IconLayoutDispatchContext = React.createContext<
  DispatchType | undefined
>(undefined);

IconLayoutDispatchContext.displayName = 'IconLayoutDispatchContext';

// -----------------------------------------------------------------------------
// Reducer
// -----------------------------------------------------------------------------

export const iconLayoutReducer = (
  _state: StateType = defaultIconLayout,
  action: ActionType,
): StateType => {
  switch (action.type) {
    case 'iconAndText':
    case 'iconOnly':
    case 'textOnly':
      return action.type;
    case 'reset':
      return defaultIconLayout;
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

// -----------------------------------------------------------------------------
// Provider
// -----------------------------------------------------------------------------

export const IconLayoutProvider = ({ value, children }: ProviderProps) => {
  const [state, dispatch] = React.useReducer(
    iconLayoutReducer,
    value || defaultIconLayout,
  );
  return (
    <IconLayoutStateContext.Provider value={state}>
      <IconLayoutDispatchContext.Provider value={dispatch}>
        {children}
      </IconLayoutDispatchContext.Provider>
    </IconLayoutStateContext.Provider>
  );
};

IconLayoutProvider.propTypes = {
  /** Initial state */
  value: PropTypes.oneOf(iconLayouts),
  /** Consumer component(s) */
  children: PropTypes.node.isRequired,
};

IconLayoutProvider.defaultProps = {
  value: defaultIconLayout,
};
