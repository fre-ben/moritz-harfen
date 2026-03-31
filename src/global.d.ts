declare module "*.jpg" {
  import type { ImageMetadata } from "astro";
  const value: ImageMetadata;
  export default value;
}

declare module "*.jpeg" {
  import type { ImageMetadata } from "astro";
  const value: ImageMetadata;
  export default value;
}

declare module "*.png" {
  import type { ImageMetadata } from "astro";
  const value: ImageMetadata;
  export default value;
}

declare module "@splidejs/splide/css";
