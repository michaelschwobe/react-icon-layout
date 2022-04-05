import {
  defaultIconLayoutDirection,
  defaultIconLayoutPlacement,
  defaultIconLayoutState,
  iconLayoutDirections,
  iconLayoutOptions,
  iconLayoutPlacements,
  iconLayoutStates,
} from '../lib/react-icon-layout.constants';

// -----------------------------------------------------------------------------

describe('iconLayoutDirections', () => {
  test('Should export an Array of Strings', () => {
    expect(iconLayoutDirections).toEqual(
      expect.arrayContaining([expect.any(String)]),
    );
  });
});

describe('defaultIconLayoutDirection', () => {
  test('Should export a String', () => {
    expect(defaultIconLayoutDirection).toEqual(expect.any(String));
  });

  test('Should be found within `iconLayoutDirections`', () => {
    expect(iconLayoutDirections.includes(defaultIconLayoutDirection)).toEqual(
      true,
    );
  });
});

describe('iconLayoutPlacements', () => {
  test('Should export an Array of Strings', () => {
    expect(iconLayoutPlacements).toEqual(
      expect.arrayContaining([expect.any(String)]),
    );
  });
});

describe('defaultIconLayoutPlacement', () => {
  test('Should export a String', () => {
    expect(defaultIconLayoutPlacement).toEqual(expect.any(String));
  });

  test('Should be found within `iconLayoutPlacements`', () => {
    expect(iconLayoutPlacements.includes(defaultIconLayoutPlacement)).toEqual(
      true,
    );
  });
});

describe('iconLayoutStates', () => {
  test('Should export an Array of Strings', () => {
    expect(iconLayoutStates).toEqual(
      expect.arrayContaining([expect.any(String)]),
    );
  });
});

describe('defaultIconLayoutState', () => {
  test('Should export a String', () => {
    expect(defaultIconLayoutState).toEqual(expect.any(String));
  });

  test('Should be an `id` found within `iconLayoutStates`', () => {
    expect(iconLayoutStates.includes(defaultIconLayoutState)).toEqual(true);
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
