# Next.js Yandex Metrica

Yandex Metrica integration for Next.js

## Usage

### Add the provider

To enable analytics, include `YandexMetricaProvider` in the custom [`_app`](https://nextjs.org/docs/advanced-features/custom-app) component.

```jsx
// pages/_app.tsx
import { YandexMetricaProvider } from 'next-yandex-metrica';

export default function MyApp({ Component, pageProps }) {
  return (
    <YandexMetricaProvider
      tagID={12345678}
      initParameters={{ clickmap: true, trackLinks: true, accurateTrackBounce: true }}
    >
      <Component {...pageProps} />
    </YandexMetricaProvider>
  );
}
```

#### `YandexMetricaProvider` Props

| Name             | Description                                                                                                                                              |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `tagID`          | Yandex.Metrica tag ID.                                                                                                                                   |
| `strategy`       | Script loading strategy. Defaults to `afterInteractive`. See [next/script](https://nextjs.org/docs/api-reference/next/script#strategy) for more details. |
| `initParameters` | Yandex.Metrica tag [initialization parameters](https://yandex.com/support/metrica/code/counter-initialize.html).                                         |

The Yandex.Metrica tag ID is read from the `tagID` property and the `NEXT_PUBLIC_YANDEX_METRICA_ID` environment variable. If both are set, the provider property takes priority.

### Send events

`next/router` pageviews are tracked automatically.

The package provides `useMetrica` hook for sending custom analytics events.

```jsx
import { useMetrica } from 'next-yandex-metrica';

export function ActionButton() {
  const { reachGoal } = useMetrica();

  return (
    <button type="button" onClick={() => reachGoal('cta-click')}>
      CTA
    </button>
  );
}
```

The returned functions accept the same parameters as those found in the [Yandex.Metrica object methods](https://yandex.com/support/metrica/objects/method-reference.html).

All functions are automatically provided with the tag ID that is supplied to the provider or the environment variable. `useMetrica` hook exposes functions for calling `notBounce`, `reachGoal`, `setUserID`, and `userParams` without specifying the event name. Other methods can be called using the `ymEvent` function, with the event name as the first argument. In both cases, all event parameters are type-checked.

```jsx
import { useMetrica } from 'next-yandex-metrica';

export function ActionButton() {
  const { ymEvent } = useMetrica();

  const handleExternalLinkClick = () => {
    ymEvent('extLink', 'https://www.google.com');
  };

  // ...
}
```