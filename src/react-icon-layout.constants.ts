// -----------------------------------------------------------------------------
// Direction
// -----------------------------------------------------------------------------

export const iconLayoutDirections = [
  'top-left',
  'top',
  'top-right',
  'left',
  'center',
  'right',
  'bottom-left',
  'bottom',
  'bottom-right',
] as const;

export const defaultIconLayoutDirection = 'center';

export type IconLayoutDirection = typeof iconLayoutDirections[number];

// -----------------------------------------------------------------------------
// Placement
// -----------------------------------------------------------------------------

export const iconLayoutPlacements = iconLayoutDirections;

export const defaultIconLayoutPlacement = 'center';

export type IconLayoutPlacement = typeof iconLayoutPlacements[number];

// -----------------------------------------------------------------------------
// State / Actions
// -----------------------------------------------------------------------------

export const iconLayoutStates = [
  'iconAndText',
  'iconOnly',
  'textOnly',
] as const;

export const defaultIconLayoutState = 'iconAndText';

export type IconLayoutState = typeof iconLayoutStates[number];

export type IconLayoutAction =
  | { type: IconLayoutState }
  | { type: 'reset' }
  | { type: string };

export type IconLayoutDispatch = React.Dispatch<IconLayoutAction>;

// -----------------------------------------------------------------------------
// Options
// -----------------------------------------------------------------------------

export const iconLayoutOptions: IconLayoutOption[] = [
  { id: 'iconAndText', name: 'Icon and Text' },
  { id: 'iconOnly', name: 'Icon Only' },
  { id: 'textOnly', name: 'Text Only' },
];

export type IconLayoutOption = { id: IconLayoutState; name: string };
