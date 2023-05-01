import React, { FC } from 'react';

interface Props {
  tagID: number;
}

export const MetricaPixel: FC<Props> = ({ tagID }) => (
  <img
    height="1"
    width="1"
    style={{ display: 'none' }}
    src={`https://mc.yandex.ru/watch/${tagID}`}
    alt=""
  />
);
