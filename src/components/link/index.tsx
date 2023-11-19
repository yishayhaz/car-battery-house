import { component$, Slot } from "@builder.io/qwik";
import type { QwikIntrinsicElements } from "@builder.io/qwik";
import styles from "./style.module.scss";

export type LinkProps = QwikIntrinsicElements["a"] & {
  active?: boolean;
};

export const Link = component$(
  ({ class: className, active, ...rest }: LinkProps) => {
    return (
      <a
        class={`${styles.link} ${className || ""}`}
        data-active={active ? "true" : undefined}
        {...rest}
      >
        <Slot />
      </a>
    );
  }
);
