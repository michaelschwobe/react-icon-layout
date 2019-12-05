// Local modules.
import * as Exports from '../src/index';

// -----------------------------------------------------------------------------

describe('Exports', () => {
  test('Should return the correct named exports', () => {
    expect(Exports).toHaveProperty('defaultIconLayout');
    expect(Exports).toHaveProperty('defaultIconLayoutPosition');
    expect(Exports).toHaveProperty('IconLayout');
    expect(Exports).toHaveProperty('iconLayoutOptions');
    expect(Exports).toHaveProperty('iconLayoutPositions');
    expect(Exports).toHaveProperty('IconLayoutProvider');
    expect(Exports).toHaveProperty('iconLayouts');
    expect(Exports).toHaveProperty('useIconLayout');
  });

  test('Should NOT return the test-only named exports', () => {
    expect(Exports).not.toHaveProperty('IconLayoutDispatchContext');
    expect(Exports).not.toHaveProperty('iconLayoutReducer');
    expect(Exports).not.toHaveProperty('IconLayoutStateContext');
    expect(Exports).not.toHaveProperty('useIconLayoutDispatch');
    expect(Exports).not.toHaveProperty('useIconLayoutState');
  });
});
