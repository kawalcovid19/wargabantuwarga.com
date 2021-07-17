declare module "*.css" {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module "*.md" {
  const attributes: {
    title: string;
  };
  const html: string;
  export { attributes, html };
}
