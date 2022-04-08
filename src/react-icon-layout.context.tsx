import * as React from 'react';

import { defaultVariant } from './react-icon-layout.constants';

import type {
  IconLayoutAction,
  IconLayoutDispatch,
  IconLayoutState,
} from './react-icon-layout.constants';

// -----------------------------------------------------------------------------
// Context
// -----------------------------------------------------------------------------

/** Context component for `state` */
export const IconLayoutStateContext = React.createContext<
  IconLayoutState | undefined
>(undefined);

IconLayoutStateContext.displayName = 'IconLayoutStateContext';

/** Context component for `dispatch` */
export const IconLayoutDispatchContext = React.createContext<
  IconLayoutDispatch | undefined
>(undefined);

IconLayoutDispatchContext.displayName = 'IconLayoutDispatchContext';

// -----------------------------------------------------------------------------
// Hooks
// -----------------------------------------------------------------------------

/** Hook for accessing context `state` */
export const useIconLayoutState = (): IconLayoutState => {
  const context = React.useContext(IconLayoutStateContext);
  if (context === undefined) {
    throw new Error(
      'useIconLayoutState must be used within a <IconLayoutProvider>',
    );
  }
  return context;
};

/** Hook for accessing context `dispatch` */
export const useIconLayoutDispatch = (): IconLayoutDispatch => {
  const context = React.useContext(IconLayoutDispatchContext);
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

/** State handler used by `IconLayoutProvider` */
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
      return defaultVariant;
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

// -----------------------------------------------------------------------------
// Provider
// -----------------------------------------------------------------------------

export interface IconLayoutProviderProps {
  /** Sets the content. **Required.** */
  children: React.ReactNode;
  /** Sets the initial state. **Default:** `iconAndText` */
  value?: IconLayoutState | undefined;
}

/** Context provider component */
export const IconLayoutProvider = ({
  children,
  value = defaultVariant,
}: IconLayoutProviderProps): JSX.Element => {
  const [state, dispatch] = React.useReducer(iconLayoutReducer, value);
  return (
    <IconLayoutStateContext.Provider value={state}>
      <IconLayoutDispatchContext.Provider value={dispatch}>
        {children}
      </IconLayoutDispatchContext.Provider>
    </IconLayoutStateContext.Provider>
  );
};
