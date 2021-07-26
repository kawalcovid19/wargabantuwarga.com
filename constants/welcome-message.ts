import welcomeMessage from "~/_content/welcome-message.json";

export type WelcomeMessage = {
  readonly last_updated_time: string;
  readonly message_text: string;
  readonly title: string;
};

export default welcomeMessage as WelcomeMessage;
