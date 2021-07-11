/// <reference types="next" />
/// <reference types="next/types/global" />
/// <reference types="next/image-types/global" />

declare module "*.md" {
  const attributes: {
    title: string;
  };
  const html: string;
  export { attributes, html };
}
