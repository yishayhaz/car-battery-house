import { component$ } from "@builder.io/qwik";
import styles from "./style.module.scss";

const images = [
  "1.jpeg",
  "2.jpg",
  "3.jpeg",
  "4.webp",
  "5.webp",
  "6.webp",
  "7.jpg",
  "8.png",
  "9.jpg",
];

export const GallerySection = component$(() => {
  return (
    <section class={styles.gallery_wrapper} id="gallery">
      <h2>גלריה</h2>
      <div class={styles.gallery}>
        {images.map((path, i) => (
          <div key={i}>
            <img
              src={"/gallery/" + path}
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
