import { HomePageSection } from "./homepage-section";
import { TelemedicineCTA } from "~/components/telemedicine/telemedicine-cta";

export function HomePageTelemedicineCTA() {
  return (
    <HomePageSection className="px-4 py-6 space-y-4 text-center">
      <TelemedicineCTA />
    </HomePageSection>
  );
}
