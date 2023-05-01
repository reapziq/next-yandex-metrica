import { renderHook } from '@testing-library/react';
import { Router } from 'next/router';

import { useTrackRouteChange } from '../useTrackRouteChange';

const YM_MOCK = jest.fn();
Object.defineProperty(window, 'ym', {
  value: YM_MOCK,
  writable: true,
});

describe('useTrackRouteChange', () => {
  it('handles route change', () => {
    renderHook(() => useTrackRouteChange({ tagID: 444 }));

    Router.events.emit('routeChangeStart');

    expect(YM_MOCK).not.toHaveBeenCalled();

    Router.events.emit('routeChangeComplete', 'https://test.com/');

    expect(YM_MOCK).toHaveBeenCalledTimes(1);
    expect(YM_MOCK).toHaveBeenCalledWith(444, 'hit', 'https://test.com/');
  });
});
