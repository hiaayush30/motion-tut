## in framer motion settings propagate from parent to children

## 3D Effect

```jsx
perspective-[1000px] [transform-style:preserve-3d]
```

### 🧠 1. `perspective-[1000px]`

This sets a **3D perspective** on the parent element.

It tells the browser **how "deep" the 3D space should feel**.

- Think of it like your **camera distance** from an object.
- A **lower number (e.g., 100px)** = more dramatic 3D effect (like you're very close).
- A **higher number (e.g., 1000px)** = more subtle 3D effect (like you're farther away).

### 🧠 2. `[transform-style:preserve-3d]`

This is a **custom Tailwind utility** (note the square brackets). It tells the element to **preserve its children’s 3D transforms** instead of flattening them.

```css
transform-style: preserve-3d;
```

- Makes sure that children elements (with things like `rotateX`, `rotateY`, etc.) **actually render in 3D**.
- If you don’t set this, the children will look like flat 2D layers.

## Custom shadow

```jsx
shadow-[0px_1px_4px_0px_rgba(255,255,255,0.1)_inset,0px_-1px_2px_0px_rgba(255,255,255,0.1)_inset]
```

```jsx
x-offset y-offset blur-radius spread-radius color inset
```

### Mental Model:

| Offset | Where it goes |
| --- | --- |
| `y = +ve` | Bottom of the box |
| `y = -ve` | Top of the box |
| `x = +ve` | Right side |
| `x = -ve` | Left side |

inset: Means the shadow is inside the element (not outside like a normal box shadow).