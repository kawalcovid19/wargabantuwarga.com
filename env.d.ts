declare module "*.css" {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module "*/_content/welcome-message.md" {
  // eslint-disable-next-line one-var
  const attributes: {
    last_updated_time: string;
    title: string;
  };
  // eslint-disable-next-line one-var
  const html: string;
  export { attributes, html };
}

declare module "*/_content/home-page.md" {
  // eslint-disable-next-line one-var
  const attributes: {
    last_updated_time: string;
    home_banner_image?: string;
  };
  // eslint-disable-next-line one-var
  const html: string;
  export { attributes, html };
}

declare module "*/_content/informasi-terbaru/*.md" {
  // eslint-disable-next-line one-var
  const attributes: {
    title: string;
    date: string;
    link_text: string;
    link: string;
  };
  // eslint-disable-next-line one-var
  const html: string;
  export { attributes, html };
}

declare module "*/_content/about/content.md" {
  // eslint-disable-next-line one-var
  const attributes: {
    title: string;
    description: string;
    last_updated_time: string;
    thumbnail_image: string;
  };
  // eslint-disable-next-line one-var
  const html: string;
  export { attributes, html };
}
