import * as React from 'react';

// Local modules
import {
  IconLayoutDispatchContext,
  IconLayoutStateContext,
} from './IconLayoutProvider';

// -----------------------------------------------------------------------------
// Hooks
// -----------------------------------------------------------------------------

export const useIconLayoutState = () => {
  const context = React.useContext(IconLayoutStateContext);
  if (context === undefined) {
    throw new Error(
      'useIconLayoutState must be used within a <IconLayoutProvider>',
    );
  }
  return context;
};

export const useIconLayoutDispatch = () => {
  const context = React.useContext(IconLayoutDispatchContext);
  if (context === undefined) {
    throw new Error(
      'useIconLayoutDispatch must be used within a <IconLayoutProvider>',
    );
  }
  return context;
};

export const useIconLayout = () =>
  [useIconLayoutState(), useIconLayoutDispatch()] as const;
