import { component$ } from "@builder.io/qwik";
import styles from "./style.module.scss";
import { Link } from "../link";
import { Location } from "../location";

export const Header = component$(() => {
  return (
    <header class={styles.header}>
      <div class={styles.logo}>
        <img src={"/logo.svg"} height={50} alt="battery" />
      </div>
      <Location />
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
