import { Router } from 'next/router';
import { useEffect } from 'react';

import { ym } from '../lib/ym';

export const useTrackRouteChange = ({ tagID }: { tagID: number | null }) => {
  useEffect(() => {
    const handleRouteChange = (url: URL): void => {
      ym(tagID, 'hit', url.toString());
    };

    Router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [tagID]);
};
