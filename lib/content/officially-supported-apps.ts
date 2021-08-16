import supportedApps from "~/_content/officially_supported_apps.json";

export type SupportedApps = SupportedApp[];

export type SupportedApp = {
  readonly application: ApplicationDetail[];
};
export type ApplicationDetail = {
  readonly logo: string;
  readonly link: string;
  readonly name: string;
};

export default supportedApps as unknown as SupportedApp;
