import { createContext, useContext, useReducer } from 'react';

import { defaultIconLayoutState } from './react-icon-layout.constants';

import type {
  IconLayoutAction,
  IconLayoutDispatch,
  IconLayoutState,
} from './react-icon-layout.constants';

// -----------------------------------------------------------------------------
// Context
// -----------------------------------------------------------------------------

export const IconLayoutStateContext = createContext<
  IconLayoutState | undefined
>(undefined);

IconLayoutStateContext.displayName = 'IconLayoutStateContext';

export const IconLayoutDispatchContext = createContext<
  IconLayoutDispatch | undefined
>(undefined);

IconLayoutDispatchContext.displayName = 'IconLayoutDispatchContext';

// -----------------------------------------------------------------------------
// Hooks
// -----------------------------------------------------------------------------

export const useIconLayoutState = (): IconLayoutState => {
  const context = useContext(IconLayoutStateContext);
  if (context === undefined) {
    throw new Error(
      'useIconLayoutState must be used within a <IconLayoutProvider>',
    );
  }
  return context;
};

export const useIconLayoutDispatch = (): IconLayoutDispatch => {
  const context = useContext(IconLayoutDispatchContext);
  if (context === undefined) {
    throw new Error(
      'useIconLayoutDispatch must be used within a <IconLayoutProvider>',
    );
  }
  return context;
};

// -----------------------------------------------------------------------------
// Reducer
// -----------------------------------------------------------------------------

export const iconLayoutReducer = (
  _state: IconLayoutState,
  action: IconLayoutAction,
): IconLayoutState => {
  switch (action.type) {
    case 'iconAndText':
    case 'iconOnly':
    case 'textOnly':
      return action.type;
    case 'reset':
      return defaultIconLayoutState;
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

// -----------------------------------------------------------------------------
// Provider
// -----------------------------------------------------------------------------

export interface IconLayoutProviderProps {
  /** Sets the content. */
  children: React.ReactNode;
  /** Sets the initial state. */
  value?: IconLayoutState | undefined;
}

export const IconLayoutProvider = ({
  children,
  value = defaultIconLayoutState,
}: IconLayoutProviderProps): JSX.Element => {
  const [state, dispatch] = useReducer(iconLayoutReducer, value);
  return (
    <IconLayoutStateContext.Provider value={state}>
      <IconLayoutDispatchContext.Provider value={dispatch}>
        {children}
      </IconLayoutDispatchContext.Provider>
    </IconLayoutStateContext.Provider>
  );
};
