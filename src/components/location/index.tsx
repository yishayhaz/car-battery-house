import { component$ } from "@builder.io/qwik";
import styles from "./style.module.scss";

export const Location = component$(() => (
  <div class={styles.location}>
    <span>ירושלים, מודיעין והסביבה</span>
  </div>
));
