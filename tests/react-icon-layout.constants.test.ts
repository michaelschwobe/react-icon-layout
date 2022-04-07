import {
  defaultIconLayoutDirection,
  defaultIconLayoutPlacement,
  defaultIconLayoutState,
  iconLayoutDirections,
  iconLayoutOptions,
  iconLayoutPlacements,
  iconLayoutStates,
} from '../src/index';

// -----------------------------------------------------------------------------

describe('iconLayoutDirections', () => {
  test('Exported type is an Array of Strings', () => {
    expect(iconLayoutDirections).toEqual(
      expect.arrayContaining([expect.any(String)]),
    );
  });
});

describe('defaultIconLayoutDirection', () => {
  test('Exported type is a String', () => {
    expect(defaultIconLayoutDirection).toEqual(expect.any(String));
  });

  test('Found within `iconLayoutDirections`', () => {
    expect(iconLayoutDirections.includes(defaultIconLayoutDirection)).toEqual(
      true,
    );
  });
});

describe('iconLayoutPlacements', () => {
  test('Exported type is an Array of Strings', () => {
    expect(iconLayoutPlacements).toEqual(
      expect.arrayContaining([expect.any(String)]),
    );
  });
});

describe('defaultIconLayoutPlacement', () => {
  test('Exported type is a String', () => {
    expect(defaultIconLayoutPlacement).toEqual(expect.any(String));
  });

  test('Found within `iconLayoutPlacements`', () => {
    expect(iconLayoutPlacements.includes(defaultIconLayoutPlacement)).toEqual(
      true,
    );
  });
});

describe('iconLayoutStates', () => {
  test('Exported type is an Array of Strings', () => {
    expect(iconLayoutStates).toEqual(
      expect.arrayContaining([expect.any(String)]),
    );
  });
});

describe('defaultIconLayoutState', () => {
  test('Exported type is a String', () => {
    expect(defaultIconLayoutState).toEqual(expect.any(String));
  });

  test('Found within `iconLayoutStates`', () => {
    expect(iconLayoutStates.includes(defaultIconLayoutState)).toEqual(true);
  });
});

describe('iconLayoutOptions', () => {
  test('Exported type is an Array of Objects with `id` and `name` properties', () => {
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
