# Shadcn UI Customization

Shadcn UI is fundamentally **not a component library** in the traditional sense. Instead, it acts as a helper to facilitate the building of your own component library.

**Key Concept:** Shadcn UI leverages the **primitive components** provided by **Radix UI** in its implementation.

## Customizing Shadcn UI

The primary way to customize the appearance of your Shadcn UI components involves modifying the CSS.

**1. `globals.css`:**

* This file contains all the default styles for Shadcn UI components.
* To apply styles globally across your application, make changes within the `:root` selector.

    ```css
    :root {
      /* Global styles go here */
    }

    .dark {
      /* Styles specific to dark mode */
    }

    :root {
      --theme-inline-border-radius: 0.375rem; /* Example: Adjust border radius */
      /* Define your CSS variables here */
    }
    ```

* **`:root`**: Styles defined here will apply to the entire application.
* **.dark**: Styles within this selector will only be applied when the application is in dark mode.
* **`theme inline`**: This section is where you define your CSS variables, which are then used to style the Shadcn UI components.

---

**Note on Color Models:**

**OKLCH** is considered a perceptually better color model compared to HSL. Its components are more aligned with human visual perception:

* **`l` (Lightness):** Represents the perceived lightness, ranging from `0` (black) to `1` (white).
* **`c` (Chroma):** Represents the intensity or amount of color (similar to saturation). `0` is grayscale, and `1` is the most vivid.
* **`h` (Hue):** Represents the actual color on the color wheel (0 to 360 degrees).