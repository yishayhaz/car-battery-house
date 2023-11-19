import { component$ } from "@builder.io/qwik";
import styles from "./style.module.scss";

const benefits = [
  {
    icon: "speed.png",
    title: "מהירות",
    description: `נתקעתם בדרך? צריכים מצבר בדחיפות? דברו איתנו ואנחנו נעזור לכם במהירות`,
  },
  {
    icon: "price.png",
    title: "מחיר",
    description: `מחיר זול והוגן תוך שירות אדיב ומקצועי`,
  },
  {
    icon: "quality.png",
    title: "איכות",
    description: `מצברים חדשים ואיכותיים, רשמי מהחברה`,
  },
];

export const BenefitsSection = component$(() => {
  return (
    <section class={styles.benefits}>
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
    </section>
  );
});
