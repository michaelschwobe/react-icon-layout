import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import * as React from 'react';

// Local modules
import { IconLayout } from '../src/IconLayout';
import { IconLayoutProvider } from '../src/IconLayoutProvider';

// -----------------------------------------------------------------------------

describe('IconLayout', () => {
  beforeEach(() => {
    console.error = jest.fn(); // eslint-disable-line no-console
  });

  test('Should export a Function', () => {
    expect(IconLayout).toEqual(expect.any(Function));
  });

  test('Should throw an Error if used outside of <IconLayoutProvider>', () => {
    expect(() => render(<IconLayout icon="" text="" />)).toThrow();
    expect(console.error).toHaveBeenCalledTimes(2); // eslint-disable-line no-console
  });

  describe('classNames', () => {
    test('Should handle defaults', () => {
      const { container } = render(
        <IconLayoutProvider>
          <IconLayout icon="" text="" />
        </IconLayoutProvider>,
      );
      const rootEl = container.firstChild;
      expect(rootEl).toHaveClass('IconLayout');
      expect(rootEl).toHaveClass('IconLayout--display-iconAndText');
      expect(rootEl).toHaveClass('IconLayout--direction-center');
    });

    test('Should handle `direction` prop', () => {
      const { container } = render(
        <IconLayoutProvider>
          <IconLayout icon="" text="" direction="top" />
        </IconLayoutProvider>,
      );
      const rootEl = container.firstChild;
      expect(rootEl).toHaveClass('IconLayout--direction-top');
    });

    test('Should handle `placement` prop', () => {
      const { container } = render(
        <IconLayoutProvider>
          <IconLayout icon="" text="" placement="top" />
        </IconLayoutProvider>,
      );
      const rootEl = container.firstChild;
      expect(rootEl).toHaveClass('IconLayout--placement-top');
    });
  });

  describe('icon, text', () => {
    test('Should render `icon` String', () => {
      const { container } = render(
        <IconLayoutProvider>
          <IconLayout icon="someIcon" text="" />
        </IconLayoutProvider>,
      );
      const iconEl = container.getElementsByClassName('IconLayout__icon')[0];
      expect(iconEl.textContent).toEqual('someIcon');
    });

    test('Should render `icon` Component', () => {
      const Icon = () => <span>someIcon</span>;
      const { container } = render(
        <IconLayoutProvider>
          <IconLayout icon={<Icon />} text="" />
        </IconLayoutProvider>,
      );
      const iconEl = container.getElementsByClassName('IconLayout__icon')[0];
      expect(iconEl.textContent).toEqual('someIcon');
    });

    test('Should render `text` String', () => {
      const { container } = render(
        <IconLayoutProvider>
          <IconLayout icon="" text="someText" />
        </IconLayoutProvider>,
      );
      const textEl = container.getElementsByClassName('IconLayout__text')[0];
      expect(textEl.textContent).toEqual('someText');
    });

    test('Should render `text` Component', () => {
      const Text = () => <span>someText</span>;
      const { container } = render(
        <IconLayoutProvider>
          <IconLayout icon="" text={<Text />} />
        </IconLayoutProvider>,
      );
      const textEl = container.getElementsByClassName('IconLayout__text')[0];
      expect(textEl.textContent).toEqual('someText');
    });
  });
});
