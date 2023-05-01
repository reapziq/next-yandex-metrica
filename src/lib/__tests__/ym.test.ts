import { ym } from '../ym';

const YM_MOCK = jest.fn();
Object.defineProperty(window, 'ym', {
  value: YM_MOCK,
  writable: true,
});

describe('ym', () => {
  it('calls ym with provided parameters', () => {
    ym(444, 'hit', '/url');
    ym(444, 'reachGoal', 'goal');

    expect(YM_MOCK).toHaveBeenCalledTimes(2);
    expect(YM_MOCK).toHaveBeenNthCalledWith(1, 444, 'hit', '/url');
    expect(YM_MOCK).toHaveBeenNthCalledWith(2, 444, 'reachGoal', 'goal');
  });

  it('does not call ym if tagID is not provided', () => {
    ym(null, 'hit', '/url');
    ym(null, 'reachGoal', 'goal');

    expect(YM_MOCK).not.toHaveBeenCalled();
  });

  it('does not call ym if ym is not defined', () => {
    Object.defineProperty(window, 'ym', {
      value: undefined,
      writable: true,
    });

    ym(444, 'hit', '/url');
    ym(444, 'reachGoal', 'goal');

    expect(YM_MOCK).not.toHaveBeenCalled();
  });
});
