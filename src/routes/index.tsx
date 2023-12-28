import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { HomeScreen } from "~/screens/home";

export default component$(() => {
  return <HomeScreen />;
});

export const head: DocumentHead = {
  title: "בית המצבר - מצבר לרכב עד הבית",
  meta: [
    {
      name: "description",
      content: `תקועים בדרכים? הרכב לא מניע? נתקעתם בלי מצבר?
      אנחנו מבית המצבר נגיע עד אליכם עם המצבר שאתם צריכים, בכל זמן - שירות מקצועי ואדיב, ומחיר הוגן.`,
    },
    {
      name: "google-site-verification",
      content: "NpjkdpDJJvsQZT2gEXq1vN2xiETKzbI4JldCeA3Cbz4",
    },
    {
      name: "google-site-verification",
      content: "SaHs1z7ECM5IOAgFd6uLnzbpoTbFvE3QbE3I2LY3dXw",
    },
  ],
};
