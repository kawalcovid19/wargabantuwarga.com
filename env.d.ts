declare module "*.css" {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module "*.md" {
  // eslint-disable-next-line one-var
  const attributes: {
    last_updated_time: string;
    home_banner_image_path?: string;
  };
  // eslint-disable-next-line one-var
  const html: string;
  export { attributes, html };
}
