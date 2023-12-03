import { component$ } from "@builder.io/qwik";
import styles from "./style.module.scss";
import md from "/blog/replace-battery.mdx?url&raw";

export const ReplaceBatterySection = component$(() => {
  return (
    <section class={styles.blog_wrapper}>
      <div class={styles.blog}>
        <h2>למה ומתי מחליפים מצבר?</h2>
        <p dangerouslySetInnerHTML={md}></p>
      </div>
    </section>
  );
});
