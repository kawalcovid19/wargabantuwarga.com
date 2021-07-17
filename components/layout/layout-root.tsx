import * as React from "react";

import { GlobalHeader } from "./global-header";

export const LayoutRoot: React.FC = ({ children }) => (
  <div className="w-full min-h-screen">
    <GlobalHeader />
    {children}
  </div>
);
