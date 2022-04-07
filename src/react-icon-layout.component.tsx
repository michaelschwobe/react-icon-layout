import { forwardRef } from 'react';

import {
  defaultIconLayoutDirection,
  defaultIconLayoutPlacement,
  defaultIconLayoutState,
  iconLayoutDirections,
  iconLayoutPlacements,
  iconLayoutStates,
} from './react-icon-layout.constants';

import type {
  IconLayoutDirection,
  IconLayoutPlacement,
  IconLayoutState,
} from './react-icon-layout.constants';

// -----------------------------------------------------------------------------
// Helper
// -----------------------------------------------------------------------------

export const getIconLayoutClassNames = ({
  className,
  direction = defaultIconLayoutDirection,
  placement = defaultIconLayoutPlacement,
  variant = defaultIconLayoutState,
}: Partial<
  Pick<IconLayoutProps, 'className' | 'variant' | 'direction' | 'placement'>
>) =>
  [className, 'icon-layout']
    .concat(
      iconLayoutDirections.includes(direction) &&
        variant === defaultIconLayoutState
        ? `icon-layout--direction-${direction}`
        : undefined,
    )
    .concat(
      iconLayoutPlacements.includes(placement)
        ? `icon-layout--placement-${placement}`
        : undefined,
    )
    .concat(
      iconLayoutStates.includes(variant)
        ? `icon-layout--variant-${variant}`
        : undefined,
    )
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
  /** Styles for positioning the icon-to-text relationship while maintaining source order. **Default:** `'center'` */
  direction?: IconLayoutDirection | undefined;
  /** Styles for positioning the component within a larger parent. **Default:** `'center'` */
  placement?: IconLayoutPlacement | undefined;
  /** Styles the display mode. **Default:** `'iconAndText'` */
  variant?: IconLayoutState | undefined;
  /** Sets the "icon" content, similar to a `children` prop. **Required.** */
  icon: React.ReactNode;
  /** Sets the "text" content, similar to a `children` prop. **Required.** */
  text: React.ReactNode;
}

export const IconLayout = forwardRef<HTMLSpanElement, IconLayoutProps>(
  (
    {
      className,
      direction = defaultIconLayoutDirection,
      placement = defaultIconLayoutPlacement,
      variant = defaultIconLayoutState,
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
          direction,
          placement,
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
