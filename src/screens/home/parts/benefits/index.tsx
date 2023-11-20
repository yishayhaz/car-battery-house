import { component$ } from "@builder.io/qwik";
import styles from "./style.module.scss";

const benefits = [
  {
    icon: "price.png",
    title: "שירות",
    description: `שירות זה מספק לכם מצבר עד הבית 24 שעות ביממה לקריאת חירום מיידית או לקריאה מתוכננת מראש לשירות החלפת מצבר עד הבית או למקום העבודה.`,
  },
  {
    icon: "speed.png",
    title: "מהירות",
    description: `הבדיקה הינה בדיקה מהירה ולפיה קובעים או צריך להחליף מצבר או רק להטעין.
    אנו מגיעים ומבצעים בדיקת טעינה של האלטרנטור ולאחר מכן בדיקת וולטמטר של המצבר כדי לדעת אם הוא נטען או לא.
    לפי התוצאות שמקבלים אנו יודעים אם זקוקים רק להטעין או יש צורך להחליף מצבר.`,
  },
  {
    icon: "quality.png",
    title: "איכות",
    description: `אנו משתמשים במצברים האיכותיים ביותר של כל החברות המובילות בשוק, שנפ, וורטה שנה/שנתיים אחריות`,
  },
];

export const BenefitsSection = component$(() => {
  return (
    <section class={styles.benefits_wrapper}>
      <h2>היתרונות שלנו</h2>
      <div class={styles.benefits}>
        {benefits.map((benefit, idx) => (
          <div class={styles.benefit} key={idx}>
            <img
              src={`/benefits/${benefit.icon}`}
              alt={benefit.title}
              width={45}
              height={45}
            />
            <h3>{benefit.title}</h3>
            <p>{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
});
