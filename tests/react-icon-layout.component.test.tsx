import { render, screen } from '@testing-library/react';

import { IconLayout } from '../src/index';
import { getIconLayoutClassNames } from '../src/react-icon-layout.component';

// -----------------------------------------------------------------------------

describe('getIconLayoutClassNames', () => {
  test('Contains the parent-provided `className`', () => {
    const result = getIconLayoutClassNames({ className: 'example-className' });
    expect(result).toContain('example-className');
  });

  test('Contains the base `className`', () => {
    const result = getIconLayoutClassNames({});
    expect(result).toContain('icon-layout');
  });

  test('Contains the DEFAULT direction `className`', () => {
    const result = getIconLayoutClassNames({});
    expect(result).toContain('icon-layout--direction-center');
  });

  test('Contains the DERIVED direction `className`', () => {
    const result = getIconLayoutClassNames({ direction: 'top' });
    expect(result).toContain('icon-layout--direction-top');
  });

  test('Does NOT contain ANY direction `className` when `variant` is NOT the default', () => {
    const result = getIconLayoutClassNames({ variant: 'iconOnly' });
    expect(result).not.toContain(/icon-layout--direction-/i);
  });

  test('Does NOT contain ANY direction `className` when an invalid value is provided', () => {
    // @ts-expect-error bad prop passed
    const result = getIconLayoutClassNames({ direction: 'badValue' });
    expect(result).not.toContain(/icon-layout--direction-/i);
  });

  test('Contains the DEFAULT placement `className`', () => {
    const result = getIconLayoutClassNames({});
    expect(result).toContain('icon-layout--placement-center');
  });

  test('Contains the DERIVED placement `className`', () => {
    const result = getIconLayoutClassNames({ placement: 'top' });
    expect(result).toContain('icon-layout--placement-top');
  });

  test('Does NOT contain ANY placement `className` when an invalid value is provided', () => {
    // @ts-expect-error bad prop passed
    const result = getIconLayoutClassNames({ placement: 'badValue' });
    expect(result).not.toContain(/icon-layout--placement-/i);
  });

  test('Contains the DEFAULT variant `className`', () => {
    const result = getIconLayoutClassNames({});
    expect(result).toContain('icon-layout--variant-iconAndText');
  });

  test('Contains the DERIVED variant `className`', () => {
    const result = getIconLayoutClassNames({ variant: 'iconOnly' });
    expect(result).toContain('icon-layout--variant-iconOnly');
  });

  test('Does NOT contain ANY variant `className` when an invalid value is provided', () => {
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
