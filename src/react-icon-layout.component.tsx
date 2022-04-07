import { forwardRef } from 'react';

import {
  defaultPlaceIcon,
  defaultPlaceSelf,
  defaultVariant,
  iconLayoutPlacements,
  iconLayoutVariants,
} from './react-icon-layout.constants';

import type {
  IconLayoutPlacement,
  IconLayoutState,
} from './react-icon-layout.constants';

// -----------------------------------------------------------------------------
// Helper
// -----------------------------------------------------------------------------

export const getIconLayoutClassNames = ({
  className,
  placeIcon = defaultPlaceIcon,
  placeSelf = defaultPlaceSelf,
  variant = defaultVariant,
}: Partial<
  Pick<IconLayoutProps, 'className' | 'placeIcon' | 'placeSelf' | 'variant'>
>) =>
  [
    className,
    'icon-layout',
    iconLayoutPlacements.includes(placeIcon) && variant === 'iconAndText'
      ? `icon-layout--place-icon-${placeIcon}`
      : undefined,
    iconLayoutPlacements.includes(placeSelf)
      ? `icon-layout--place-self-${placeSelf}`
      : undefined,
    iconLayoutVariants.includes(variant)
      ? `icon-layout--variant-${variant}`
      : undefined,
  ]
    .filter(Boolean)
    .join(' ');

// -----------------------------------------------------------------------------
// Component
// -----------------------------------------------------------------------------

export interface IconLayoutProps
  extends Omit<
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLSpanElement>,
      HTMLSpanElement
    >,
    'children'
  > {
  /** Sets the `class` attribute. **Default:** `undefined` */
  className?: string | undefined;
  /** Styles the “icon” placement within the display component. **Default:** `'center'` */
  placeIcon?: IconLayoutPlacement | undefined;
  /** Styles the component placement within a larger parent. **Default:** `'center'` */
  placeSelf?: IconLayoutPlacement | undefined;
  /** Styles the content visibility. **Default:** `'iconAndText'` */
  variant?: IconLayoutState | undefined;
  /** Sets the “icon” content, similar to a `children` prop. **Required.** */
  icon: React.ReactNode;
  /** Sets the “text” content, similar to a `children` prop. **Required.** */
  text: React.ReactNode;
}

export const IconLayout = forwardRef<HTMLSpanElement, IconLayoutProps>(
  (
    {
      className,
      placeIcon = defaultPlaceIcon,
      placeSelf = defaultPlaceSelf,
      variant = defaultVariant,
      icon,
      text,
      ...props
    },
    forwardedRef,
  ) => {
    return (
      <span
        {...props}
        className={getIconLayoutClassNames({
          className,
          placeIcon,
          placeSelf,
          variant,
        })}
        ref={forwardedRef}
      >
        <span className="icon-layout__inner">
          <span className="icon-layout__icon-wrap">{icon}</span>
          <span className="icon-layout__text-wrap">{text}</span>
        </span>
      </span>
    );
  },
);

IconLayout.displayName = 'IconLayout';
