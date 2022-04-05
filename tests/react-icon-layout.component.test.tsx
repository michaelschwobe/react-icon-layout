import { render, screen } from '@testing-library/react';

import {
  getIconLayoutClassNames,
  IconLayout,
} from '../lib/react-icon-layout.component';

// -----------------------------------------------------------------------------

describe('getIconLayoutClassNames', () => {
  test('Should contain the parent-provided className', () => {
    const result = getIconLayoutClassNames({ className: 'example-className' });
    expect(result).toContain('example-className');
  });

  test('Should contain the base className', () => {
    const result = getIconLayoutClassNames({});
    expect(result).toContain('icon-layout');
  });

  test('Should contain the default direction className', () => {
    const result = getIconLayoutClassNames({});
    expect(result).toContain('icon-layout--direction-center');
  });

  test('Should contain the derived direction className', () => {
    const result = getIconLayoutClassNames({ direction: 'top' });
    expect(result).toContain('icon-layout--direction-top');
  });

  test('Should NOT contain any direction className when variant is NOT the default', () => {
    const result = getIconLayoutClassNames({ variant: 'iconOnly' });
    expect(result).not.toContain(/icon-layout--direction-/i);
  });

  test('Should NOT contain any direction className when an invalid value is provided', () => {
    // @ts-expect-error bad prop passed
    const result = getIconLayoutClassNames({ direction: 'badValue' });
    expect(result).not.toContain(/icon-layout--direction-/i);
  });

  test('Should contain the default placement className', () => {
    const result = getIconLayoutClassNames({});
    expect(result).toContain('icon-layout--placement-center');
  });

  test('Should contain the derived placement className', () => {
    const result = getIconLayoutClassNames({ placement: 'top' });
    expect(result).toContain('icon-layout--placement-top');
  });

  test('Should NOT contain any placement className when an invalid value is provided', () => {
    // @ts-expect-error bad prop passed
    const result = getIconLayoutClassNames({ placement: 'badValue' });
    expect(result).not.toContain(/icon-layout--placement-/i);
  });

  test('Should contain the default variant className', () => {
    const result = getIconLayoutClassNames({});
    expect(result).toContain('icon-layout--variant-iconAndText');
  });

  test('Should contain the derived variant className', () => {
    const result = getIconLayoutClassNames({ variant: 'iconOnly' });
    expect(result).toContain('icon-layout--variant-iconOnly');
  });

  test('Should NOT contain any variant className when an invalid value is provided', () => {
    // @ts-expect-error bad prop passed
    const result = getIconLayoutClassNames({ variant: 'badValue' });
    expect(result).not.toContain(/icon-layout--variant-/i);
  });
});

describe('IconLayout', () => {
  test('should render', () => {
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
