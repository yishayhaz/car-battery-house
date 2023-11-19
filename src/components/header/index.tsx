import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import styles from "./style.module.scss";

export const Header = component$(() => {
  const isMobile = useSignal(false);

  useVisibleTask$(() => {
    isMobile.value = window.innerWidth < 768;
  });

  return (
    <header class={styles.header}>
      <div>
        <img src="/battery.png" width={30} height={30} alt="battery" />
        LOGO
      </div>
      <nav>
        <ul>
          {isMobile.value ? null : (
            <>
              <li>
                <a href="#">בית</a>
              </li>
              <li>
                <a href="#">גלריה</a>
              </li>
            </>
          )}
          <li>
            <a href="#">יצירת קשר</a>
          </li>
        </ul>
      </nav>
    </header>
  );
});
