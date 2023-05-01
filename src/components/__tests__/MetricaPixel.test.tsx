import { render, screen } from '@testing-library/react';
import React from 'react';

import { MetricaPixel } from '../MetricaPixel';

describe('MetricaPixel', () => {
  it('should render correctly', () => {
    render(<MetricaPixel tagID={444} />);

    const img = screen.getByRole('img', { hidden: true });

    expect(img).toHaveAttribute('src', 'https://mc.yandex.ru/watch/444');
  });
});
