import { component$, Slot } from "@builder.io/qwik";
import type { QwikIntrinsicElements } from "@builder.io/qwik";
import styles from "./style.module.scss";

export type LinkProps = QwikIntrinsicElements["a"] & {
  active?: boolean;
  buttonStyle?: boolean;
};

export const Link = component$(
  ({ class: className, active, buttonStyle, ...rest }: LinkProps) => {
    return (
      <a
        class={`${styles.link} ${className || ""} ${
          buttonStyle ? styles.button : active ? styles.active : ""
        }`}
        {...rest}
      >
        <Slot />
      </a>
    );
  }
);
