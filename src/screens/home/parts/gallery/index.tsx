import { component$ } from "@builder.io/qwik";
import styles from "./style.module.scss";

export const GallerySection = component$(() => {
  return (
    <section class={styles.gallery_wrapper} id="gallery">
      <h2>גלריה</h2>
      <div class={styles.gallery}>
        {Array.from({ length: 9 }).map((_, i) => (
          <div key={i}>
            <img
              src={`https://source.unsplash.com/random?q=${i}`}
              loading="lazy"
              width={400}
              height={400}
              alt="בית המצבר תמונה"
            />
          </div>
        ))}
      </div>
    </section>
  );
});
