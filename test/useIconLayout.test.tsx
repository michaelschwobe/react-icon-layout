import { renderHook } from '@testing-library/react-hooks';

// Local modules
import {
  useIconLayoutState,
  useIconLayoutDispatch,
  useIconLayout,
} from '../src/useIconLayout';

// -----------------------------------------------------------------------------

describe('useIconLayoutState', () => {
  test('Should export a Function', () => {
    expect(useIconLayoutState).toEqual(expect.any(Function));
  });

  test('Should throw an Error if used outside of <IconLayoutProvider>', () => {
    const { result } = renderHook(() => useIconLayoutState());
    expect(result.error).toEqual(
      Error('useIconLayoutState must be used within a <IconLayoutProvider>'),
    );
  });
});

describe('useIconLayoutDispatch', () => {
  test('Should export a Function', () => {
    expect(useIconLayoutDispatch).toEqual(expect.any(Function));
  });

  test('Should throw an Error if used outside of <IconLayoutProvider>', () => {
    const { result } = renderHook(() => useIconLayoutDispatch());
    expect(result.error).toEqual(
      Error('useIconLayoutDispatch must be used within a <IconLayoutProvider>'),
    );
  });
});

describe('useIconLayout', () => {
  test('Should export a Function', () => {
    expect(useIconLayout).toEqual(expect.any(Function));
  });

  test('Should throw an Error if used outside of <IconLayoutProvider>', () => {
    const { result } = renderHook(() => useIconLayout());
    expect(result.error).toEqual(
      Error('useIconLayoutState must be used within a <IconLayoutProvider>'),
    );
  });
});
