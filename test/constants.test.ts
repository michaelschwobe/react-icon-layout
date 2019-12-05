// Local modules
import {
  iconLayouts,
  defaultIconLayout,
  iconLayoutOptions,
  iconLayoutPositions,
  defaultIconLayoutPosition,
} from '../src/constants';

// -----------------------------------------------------------------------------

describe('iconLayouts', () => {
  test('Should export an Array of Strings', () => {
    expect(iconLayouts).toEqual(expect.arrayContaining([expect.any(String)]));
  });
});

describe('defaultIconLayout', () => {
  test('Should export a String', () => {
    expect(defaultIconLayout).toEqual(expect.any(String));
  });

  test('Should be an `id` found within `iconLayouts`', () => {
    expect(iconLayouts.includes(defaultIconLayout)).toEqual(true);
  });
});

describe('iconLayoutOptions', () => {
  test('Should export an Array of Objects with `id` and `name` properties', () => {
    expect(iconLayoutOptions).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(String),
          name: expect.any(String),
        }),
      ]),
    );
  });
});

describe('iconLayoutPositions', () => {
  test('Should export an Array of Strings', () => {
    expect(iconLayoutPositions).toEqual(
      expect.arrayContaining([expect.any(String)]),
    );
  });
});

describe('defaultIconLayoutPosition', () => {
  test('Should export a String', () => {
    expect(defaultIconLayoutPosition).toEqual(expect.any(String));
  });

  test('Should be found within `iconLayoutPositions`', () => {
    expect(iconLayoutPositions.includes(defaultIconLayoutPosition)).toEqual(
      true,
    );
  });
});
