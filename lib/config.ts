import config from "../config.json";

type Config = {
  readonly site_name: string;
  readonly site_tagline: string;
  readonly site_description: string;
};

export default config as Config;
