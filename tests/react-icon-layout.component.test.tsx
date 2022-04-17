import { render, screen } from '@testing-library/react';

import {
  IconLayout,
  iconLayoutPlacements,
  iconLayoutVariants,
} from '../src/index';
import { getIconLayoutClassNames } from '../src/react-icon-layout.component';

// -----------------------------------------------------------------------------

describe('getIconLayoutClassNames', () => {
  test('Contains the base class', () => {
    expect(getIconLayoutClassNames({})).toContain('icon-layout');
  });

  test('Contains the parent-provided class', () => {
    expect(getIconLayoutClassNames({ className: 'parent' })).toContain(
      'parent',
    );
  });

  describe('placeIcon', () => {
    test('Contains the derived `placeIcon` class when `placeIcon` is VALID and `variant` is "iconAndText"', () => {
      for (const val of iconLayoutPlacements) {
        expect(
          getIconLayoutClassNames({ placeIcon: val, variant: 'iconAndText' }),
        ).toContain(`icon-layout--place-icon-${val}`);
      }
    });

    test('Does NOT contain ANY derived `placeIcon` class when `placeIcon` is VALID and `variant` is NOT the default', () => {
      for (const val of iconLayoutPlacements) {
        expect(
          getIconLayoutClassNames({ placeIcon: val, variant: 'iconOnly' }),
        ).not.toContain(/icon-layout--place-icon-/i);
        expect(
          getIconLayoutClassNames({ placeIcon: val, variant: 'textOnly' }),
        ).not.toContain(/icon-layout--place-icon-/i);
      }
    });

    test('Does NOT contain ANY derived `placeIcon` class when `placeIcon` is INVALID', () => {
      for (const val of iconLayoutVariants) {
        expect(
          // @ts-expect-error -- bad prop
          getIconLayoutClassNames({ placeIcon: 'bad', variant: val }),
        ).not.toContain(/icon-layout--place-icon-/i);
      }
    });
  });

  describe('placeSelf', () => {
    test('Contains the derived `placeSelf` class when `placeSelf` is VALID', () => {
      for (const val of iconLayoutPlacements) {
        expect(getIconLayoutClassNames({ placeSelf: val })).toContain(
          `icon-layout--place-self-${val}`,
        );
      }
    });

    test('Does NOT contain ANY derived `placeSelf` class when `placeSelf` is INVALID', () => {
      expect(
        // @ts-expect-error -- bad prop
        getIconLayoutClassNames({ placeSelf: 'bad' }),
      ).not.toContain(/icon-layout--place-self-/i);
    });
  });

  describe('variant', () => {
    test('Contains the derived `variant` class when `variant` is VALID', () => {
      for (const val of iconLayoutVariants) {
        expect(getIconLayoutClassNames({ variant: val })).toContain(
          `icon-layout--variant-${val}`,
        );
      }
    });

    test('Does NOT contain ANY derived `variant` class when `variant` is INVALID', () => {
      expect(
        // @ts-expect-error -- bad prop
        getIconLayoutClassNames({ variant: 'bad' }),
      ).not.toContain(/icon-layout--variant-/i);
    });
  });
});

describe('IconLayout', () => {
  test('Renders both icon and text values', () => {
    render(
      <IconLayout
        icon="example-icon"
        text="example-text"
        data-testid="IconLayout"
      />,
    );
    expect(screen.getByTestId('IconLayout')).toBeInTheDocument();
    expect(screen.getByText(/example-icon/i)).toBeInTheDocument();
    expect(screen.getByText(/example-text/i)).toBeInTheDocument();
  });
});
