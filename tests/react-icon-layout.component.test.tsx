import { render, screen } from '@testing-library/react';

import { IconLayout } from '../src/index';
import { getIconLayoutClassNames } from '../src/react-icon-layout.component';

// -----------------------------------------------------------------------------

describe('getIconLayoutClassNames', () => {
  test('Contains the parent-provided class', () => {
    const result = getIconLayoutClassNames({ className: 'example-className' });
    expect(result).toContain('example-className');
  });

  test('Contains the base class', () => {
    const result = getIconLayoutClassNames({});
    expect(result).toContain('icon-layout');
  });

  test('Contains the DEFAULT `placeIcon` class', () => {
    const result = getIconLayoutClassNames({});
    expect(result).toContain('icon-layout--place-icon-center');
  });

  test('Contains the DERIVED `placeIcon` class', () => {
    const result = getIconLayoutClassNames({ placeIcon: 'top' });
    expect(result).toContain('icon-layout--place-icon-top');
  });

  test('Does NOT contain ANY `placeIcon` class when `variant` is NOT the default', () => {
    const result = getIconLayoutClassNames({ variant: 'iconOnly' });
    expect(result).not.toContain(/icon-layout--place-icon-/i);
  });

  test('Does NOT contain ANY `placeIcon` class when an invalid value is provided', () => {
    // @ts-expect-error bad prop passed
    const result = getIconLayoutClassNames({ placeIcon: 'badValue' });
    expect(result).not.toContain(/icon-layout--place-icon-/i);
  });

  test('Contains the DEFAULT `placeSelf` class', () => {
    const result = getIconLayoutClassNames({});
    expect(result).toContain('icon-layout--place-self-center');
  });

  test('Contains the DERIVED `placeSelf` class', () => {
    const result = getIconLayoutClassNames({ placeSelf: 'top' });
    expect(result).toContain('icon-layout--place-self-top');
  });

  test('Does NOT contain ANY `placeSelf` class when an invalid value is provided', () => {
    // @ts-expect-error bad prop passed
    const result = getIconLayoutClassNames({ placeSelf: 'badValue' });
    expect(result).not.toContain(/icon-layout--place-self-/i);
  });

  test('Contains the DEFAULT variant class', () => {
    const result = getIconLayoutClassNames({});
    expect(result).toContain('icon-layout--variant-iconAndText');
  });

  test('Contains the DERIVED variant class', () => {
    const result = getIconLayoutClassNames({ variant: 'iconOnly' });
    expect(result).toContain('icon-layout--variant-iconOnly');
  });

  test('Does NOT contain ANY variant class when an invalid value is provided', () => {
    // @ts-expect-error bad prop passed
    const result = getIconLayoutClassNames({ variant: 'badValue' });
    expect(result).not.toContain(/icon-layout--variant-/i);
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
