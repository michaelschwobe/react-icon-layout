import {
  defaultPlaceIcon,
  defaultPlaceSelf,
  defaultVariant,
  iconLayoutOptions,
  iconLayoutPlacements,
  iconLayoutVariants,
} from '../src/index';

// -----------------------------------------------------------------------------

describe('iconLayoutPlacements', () => {
  test('Exported type is an Array of Strings', () => {
    expect(iconLayoutPlacements).toEqual(
      expect.arrayContaining([expect.any(String)]),
    );
  });
});

describe('defaultPlaceIcon', () => {
  test('Exported type is a String', () => {
    expect(defaultPlaceIcon).toEqual(expect.any(String));
  });

  test('Found within `iconLayoutPlacements`', () => {
    expect(iconLayoutPlacements.includes(defaultPlaceIcon)).toEqual(true);
  });
});

describe('defaultPlaceSelf', () => {
  test('Exported type is a String', () => {
    expect(defaultPlaceSelf).toBeUndefined();
  });

  test('Found within `iconLayoutPlacements`', () => {
    expect(iconLayoutPlacements.includes(defaultPlaceSelf)).toEqual(false);
  });
});

describe('iconLayoutVariants', () => {
  test('Exported type is an Array of Strings', () => {
    expect(iconLayoutVariants).toEqual(
      expect.arrayContaining([expect.any(String)]),
    );
  });
});

describe('defaultVariant', () => {
  test('Exported type is a String', () => {
    expect(defaultVariant).toEqual(expect.any(String));
  });

  test('Found within `iconLayoutVariants`', () => {
    expect(iconLayoutVariants.includes(defaultVariant)).toEqual(true);
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
