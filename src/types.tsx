import * as React from 'react';

// -----------------------------------------------------------------------------
// Types
// -----------------------------------------------------------------------------

/** Reducer state */
export type StateType = 'iconAndText' | 'iconOnly' | 'textOnly';

/** Reducer action */
export type ActionType =
  | { type: 'iconAndText' }
  | { type: 'iconOnly' }
  | { type: 'textOnly' }
  | { type: 'reset' }
  | { type?: string };

/** Reducer dispatch */
export type DispatchType = React.Dispatch<ActionType>;

/** Options for `direction` and `placement` Consumer props */
export type PositionsType =
  | 'top-left'
  | 'top'
  | 'top-right'
  | 'left'
  | 'center'
  | 'right'
  | 'bottom-left'
  | 'bottom'
  | 'bottom-right';

/** Provider props */
export interface ProviderProps {
  /** Initial state */
  value?: StateType | null;
  /** Consumer component(s) */
  children: React.ReactNode;
}

/** Consumer props */
export interface ConsumerProps {
  /** CSS class name(s). */
  className?: string;
  /** Styles the positioning of `icon` to `text` while maintaining source order. */
  direction?: PositionsType | null;
  /** Styles the positioning of the component within a larger parent. */
  placement?: PositionsType | null;
  /** Slot for the icon, similar to a `children` prop. */
  icon: React.ReactNode;
  /** Slot for the text, similar to a `children` prop. */
  text: React.ReactNode;
}
