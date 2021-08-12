export const getContactLink = (platform: string, contact: string): string => {
  switch (platform.toLowerCase()) {
    case "whatsapp":
      // WA URL can not use 08, should use 628
      return `https://wa.me/${contact.replace(new RegExp(/^08/, "i"), "628")}`;
    case "telegram":
      return `https://t.me/${contact}`;
    case "instagram":
      return `https://instagram.com/${contact.replace("@", "")}`;
    case "twitter":
      return `https://twitter.com/${contact.replace("@", "")}`;
    default:
      return "";
  }
};
