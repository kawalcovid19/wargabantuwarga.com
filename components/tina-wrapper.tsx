import { TinaCMS } from "tinacms";
import { Client, TinaCloudProvider } from "tina-graphql-gateway";
import { MarkdownFieldPlugin } from "react-tinacms-editor";
import { useMemo } from "react";

type TinaWrapperProps = {
  children: React.ReactNode;
};

const TinaWrapper = ({ children }: TinaWrapperProps) => {
  const cms = useMemo(() => {
    return new TinaCMS({
      apis: {
        tina: new Client({
          organizationId: process.env.NEXT_PUBLIC_TINA_ORGANIZATION_NAME ?? "",
          clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID ?? "",
          branch: "main",
        }),
      },
      plugins: [MarkdownFieldPlugin],
      sidebar: true,
      enabled: true,
    });
  }, []);

  return <TinaCloudProvider cms={cms}>{children}</TinaCloudProvider>;
};

export default TinaWrapper;
