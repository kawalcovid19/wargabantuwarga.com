import isoman from "~/_content/isoman-page.json";

type Isoman = {
  isoman_contents: [
    {
      category: string;
      title: string;
      description: string;
      links: [
        {
          title: string;
          url: string;
        },
      ];
    },
  ];
};

export default isoman as Isoman;
