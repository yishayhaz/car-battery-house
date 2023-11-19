import { component$ } from "@builder.io/qwik";
import styles from "./style.module.scss";
import { Link } from "~/components/link";

export const HeroSection = component$(() => {
  return (
    <section class={styles.hero} id="hero">
      <div class={styles.content}>
        <h1>בית המצבר - מצבר לרכב במשלוח עד הבית</h1>
        <p>
          תקועים בדרכים? הרכב לא מניע? נתקעתם בלי מצבר? אנחנו מבית המצבר נגיע עד
          אליכם עם המצבר שאתם צריכים, בכל זמן - שירות מקצועי ואדיב, ומחיר הוגן.
        </p>
        <div>
          <Link href="#callme" active>
            צרו קשר
          </Link>
        </div>
      </div>
      <div class={styles.thumbnail}>
        <img src="/battery-bubble.png" alt="battery" width={150} height={150} />
      </div>
    </section>
  );
});
