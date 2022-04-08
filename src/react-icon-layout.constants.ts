// -----------------------------------------------------------------------------
// Placements
// -----------------------------------------------------------------------------

/** List of `placeIcon` and `placeSelf` prop values */
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

/** Default `placeIcon` prop value */
export const defaultPlaceIcon = 'center';

/** Default `placeSelf` prop value */
export const defaultPlaceSelf = 'center';

export type IconLayoutPlacement = typeof iconLayoutPlacements[number];

// -----------------------------------------------------------------------------
// Variant/State & Actions
// -----------------------------------------------------------------------------

/** List of `variant` prop values / context states */
export const iconLayoutVariants = [
  'iconAndText',
  'iconOnly',
  'textOnly',
] as const;

/** Default `variant` prop value / context state */
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

/** List for iterating button/input/option/etc elements */
export const iconLayoutOptions: IconLayoutOptions = [
  { id: 'iconAndText', name: 'Icon and Text' },
  { id: 'iconOnly', name: 'Icon Only' },
  { id: 'textOnly', name: 'Text Only' },
];

export type IconLayoutOptions = { id: IconLayoutState; name: string }[];
