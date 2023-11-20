import { component$ } from "@builder.io/qwik";
import styles from "./style.module.scss";
import { Link } from "~/components/link";

export const HeroSection = component$(() => {
  return (
    <section class={styles.hero} id="hero">
      <img src="/gallery/5.webp" alt="" />
      <div class={styles.content}>
        <h1>בית המצבר - מצבר לרכב במשלוח עד הבית</h1>
        <p>
          תקועים בדרכים? הרכב לא מניע? נתקעתם בלי מצבר?
          <br />
          ניידת שירות תגיע עד אליכם עם המצבר המדוייק שרכבכם זקוק לו - שירות
          מקצועי ואדיב 24/6 באיזור ירושלים והסביבה
        </p>
        <div>
          <Link href="#callme" active>
            צרו קשר
          </Link>
        </div>
      </div>
    </section>
  );
});
