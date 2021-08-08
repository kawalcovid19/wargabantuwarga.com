import * as React from "react";
import { Container } from "../ui/container";

export const PageContent: React.FC = ({ children }) => {
  return (
    <div className="flex-1 px-4 pb-12">
      <Container>{children}</Container>
    </div>
  );
};
