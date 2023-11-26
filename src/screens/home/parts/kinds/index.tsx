import { component$ } from "@builder.io/qwik";
import styles from "./style.module.scss";
import { Link } from "~/components/link";

export const KindsSection = component$(() => {
  return (
    <section class={styles.kinds_wrapper}>
      <h2>סוגי המצברים שאנו מציעים</h2>
      <div class={styles.kinds}>
        <div class={styles.content}>
          <h3>לדו גלגלי</h3>
          <p>
            לקטנועים אנחנו מספקים מצברים של חברת long, מתאים לכל הקטנועים מ50 עד
            500 סמ"ק. מגיע מוכן וטעון, בנוסף אנחנו מספקים שירות החלפת מצבר
            במקום.
          </p>
          <h3>לרכבים</h3>
          <p>
            לרכבים אנחנו מספקים מצברים של חברת "וורטה" ו"שנפ". בנוסף ניתן במקום
            שירות החלפת המצבר ללא עלות נוספת.
          </p>
          <div>
            <Link href="#callme" buttonStyle>
              צרו קשר
            </Link>
          </div>
        </div>
        <div class={styles.img}>
          <img src="/kinds.jpg" alt="מצברי וורטה, שנפ, long" />
        </div>
      </div>
    </section>
  );
});
