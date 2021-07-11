declare module "*.md" {
  const attributes: {
    title: string;
  };
  const html: string;
  export { attributes, html };
}
