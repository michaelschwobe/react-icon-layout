import * as React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

// Local modules
import {
  defaultIconLayout,
  defaultIconLayoutPosition,
  iconLayoutPositions,
  iconLayouts,
} from './constants';
import { useIconLayout } from './useIconLayout';
import { ConsumerProps } from './types';

// -----------------------------------------------------------------------------
// Consumer
// -----------------------------------------------------------------------------

export const IconLayout = ({
  className,
  direction,
  placement,
  icon,
  text,
  ...props
}: ConsumerProps) => {
  const [iconLayout] = useIconLayout();

  const cnBase = 'IconLayout';
  const cn = {
    outer: classNames(className, cnBase, {
      [`${cnBase}--display-${iconLayout}`]: iconLayouts.includes(iconLayout),
      [`${cnBase}--direction-${direction}`]:
        !!direction &&
        iconLayoutPositions.includes(direction) &&
        iconLayout === defaultIconLayout,
      [`${cnBase}--placement-${placement}`]:
        !!placement && iconLayoutPositions.includes(placement),
    }),
    inner: `${cnBase}__inner`,
    icon: `${cnBase}__icon`,
    text: `${cnBase}__text`,
  };
  return (
    <span {...props} className={cn.outer}>
      <span className={cn.inner}>
        <span className={cn.icon}>{icon}</span>
        <span className={cn.text}>{text}</span>
      </span>
    </span>
  );
};

IconLayout.propTypes = {
  /** CSS class name(s). */
  className: PropTypes.string,
  /** Styles the positioning of `icon` to `text` while maintaining source order. */
  direction: PropTypes.oneOf(iconLayoutPositions),
  /** Styles the positioning of the component within a larger parent. */
  placement: PropTypes.oneOf(iconLayoutPositions),
  /** Slot for the icon, similar to a `children` prop. */
  icon: PropTypes.node.isRequired,
  /** Slot for the text, similar to a `children` prop. */
  text: PropTypes.node.isRequired,
};

IconLayout.defaultProps = {
  className: null,
  direction: defaultIconLayoutPosition,
  placement: null,
};
