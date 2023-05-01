import { useCallback, useContext } from 'react';

import { MetricaTagIDContext } from '../components/YandexMetricaProvider';
import { type EventParameters } from '../lib/types/events';
import { type NotBounceOptions } from '../lib/types/options';
import { type UserParameters, type VisitParameters } from '../lib/types/parameters';
import { ym } from '../lib/ym';

export const useMetrica = () => {
  const tagID = useContext(MetricaTagIDContext);

  const notBounce = useCallback(
    (options?: NotBounceOptions) => {
      ym(tagID, 'notBounce', options);
    },
    [tagID],
  );

  const reachGoal = useCallback(
    (target: string, params?: VisitParameters, callback?: () => void) => {
      ym(tagID, 'reachGoal', target, params, callback);
    },
    [tagID],
  );

  const setUserID = useCallback(
    (userID: string) => {
      ym(tagID, 'setUserID', userID);
    },
    [tagID],
  );

  const userParams = useCallback(
    (parameters: UserParameters) => {
      ym(tagID, 'userParams', parameters);
    },
    [tagID],
  );

  const ymEvent = useCallback(
    (...parameters: EventParameters) => {
      ym(tagID, ...parameters);
    },
    [tagID],
  );

  return { notBounce, reachGoal, setUserID, userParams, ymEvent };
};
