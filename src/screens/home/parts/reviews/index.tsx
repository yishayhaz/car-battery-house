import { component$ } from "@builder.io/qwik";
import styles from "./style.module.scss";

const reviews = [
  {
    name: "אבי כהן",
    review: `קיבלתי שירות מצוין ומקצועי, תודה רבה`,
  },
  {
    name: "שלום יוחננוב",
    review: `מצברים חדשים ואיכותיים, רשמי מהחברה`,
  },
  {
    name: "שאול יצחקי",
    review: `מחיר זול והוגן תוך שירות אדיב ומקצועי`,
  },
];

export const ReviewsSection = component$(() => {
  return (
    <section class={styles.reviews_wrapper}>
      <h2>חוות דעת</h2>
      <div class={styles.reviews}>
        {reviews.map((review, idx) => (
          <div class={styles.review} key={idx}>
            <h3>{review.name}</h3>
            <p>{review.review}</p>
          </div>
        ))}
      </div>
    </section>
  );
});
