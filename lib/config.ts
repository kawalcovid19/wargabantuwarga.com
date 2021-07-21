import config from "../config.json";

type Config = {
  readonly site_name: string;
  readonly site_tagline: string;
  readonly site_description: string;
  readonly site_url: string;
};

export default config as Config;
