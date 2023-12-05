import { component$ } from "@builder.io/qwik";
import styles from "./style.module.scss";
import { Link } from "../link";

export const Header = component$(() => {
  return (
    <header class={styles.header}>
      <div class={styles.logo}>
        <img src={"/logo.svg"} height={50} alt="battery" />
      </div>
      <div class={styles.location}>
        <span>ירושלים והסביבה</span>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="#hero">בית</Link>
          </li>
          <li>
            <Link href="#gallery">גלריה</Link>
          </li>
          <li>
            <Link active href="#callme">
              יצירת קשר
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
});
