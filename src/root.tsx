import { component$ } from "@builder.io/qwik";
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";
import { QwikPartytown } from "./components/partytown/partytown";
import "./root.scss";

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Don't remove the `<head>` and `<body>` elements.
   */

  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <RouterHead />
        <QwikPartytown forward={["dataLayer.push"]} />
        <script
          defer
          type="text/partytown"
          src="https://www.googletagmanager.com/gtag/js?id=AW-11417781719"
        />
        <script
          defer
          type="text/partytown"
          dangerouslySetInnerHTML={`
window.dataLayer = window.dataLayer || [];

function gtag() {
  dataLayer.push(arguments);
}

gtag('js', new Date());
gtag('config', 'AW-11417781719');
`}
        ></script>
      </head>

      <body lang="en">
        <RouterOutlet />
        <ServiceWorkerRegister />
      </body>
    </QwikCityProvider>
  );
});
