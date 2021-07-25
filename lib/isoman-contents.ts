import isoman from "~/_content/isoman-page.json";

type Isoman = [
  {
    category: string;
    description: string;
    links: [
      {
        title: string;
        link: string;
      },
    ];
  },
];

export default isoman as Isoman;
