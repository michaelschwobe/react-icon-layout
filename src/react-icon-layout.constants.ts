// -----------------------------------------------------------------------------
// Placements
// -----------------------------------------------------------------------------

export const iconLayoutPlacements = [
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

export const defaultPlaceIcon = 'center';
export const defaultPlaceSelf = 'center';

export type IconLayoutPlacement = typeof iconLayoutPlacements[number];

// -----------------------------------------------------------------------------
// Variant/State & Actions
// -----------------------------------------------------------------------------

export const iconLayoutVariants = [
  'iconAndText',
  'iconOnly',
  'textOnly',
] as const;

export const defaultVariant = 'iconAndText';

export type IconLayoutState = typeof iconLayoutVariants[number];

export type IconLayoutAction =
  | { type: IconLayoutState }
  | { type: 'reset' }
  | { type: string };

export type IconLayoutDispatch = React.Dispatch<IconLayoutAction>;

// -----------------------------------------------------------------------------
// Options
// -----------------------------------------------------------------------------

export const iconLayoutOptions: IconLayoutOptions = [
  { id: 'iconAndText', name: 'Icon and Text' },
  { id: 'iconOnly', name: 'Icon Only' },
  { id: 'textOnly', name: 'Text Only' },
];

export type IconLayoutOptions = { id: IconLayoutState; name: string }[];
