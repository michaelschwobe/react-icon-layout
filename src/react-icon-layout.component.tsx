import * as React from 'react';

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

/** Helper for combining `IconLayout` class names */
export const getIconLayoutClassNames = ({
  className,
  placeIcon,
  placeSelf,
  variant,
}: Partial<
  Pick<IconLayoutProps, 'className' | 'placeIcon' | 'placeSelf' | 'variant'>
>) =>
  [
    className,
    'icon-layout',
    variant === 'iconAndText' &&
    placeIcon &&
    iconLayoutPlacements.includes(placeIcon)
      ? `icon-layout--place-icon-${placeIcon}`
      : undefined,
    placeSelf && iconLayoutPlacements.includes(placeSelf)
      ? `icon-layout--place-self-${placeSelf}`
      : undefined,
    variant && iconLayoutVariants.includes(variant)
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
  /** Styles the “icon” placement within the display component. **Default:** `'left'` */
  placeIcon?: IconLayoutPlacement | undefined;
  /** Styles the component placement within a larger parent. **Default:** `undefined` */
  placeSelf?: IconLayoutPlacement | undefined;
  /** Styles the content visibility. **Default:** `'iconAndText'` */
  variant?: IconLayoutState | undefined;
  /** Sets the “icon” content, similar to a `children` prop. **Required.** */
  icon: React.ReactNode;
  /** Sets the “text” content, similar to a `children` prop. **Required.** */
  text: React.ReactNode;
}

/** Display component */
export const IconLayout = React.forwardRef<HTMLSpanElement, IconLayoutProps>(
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
