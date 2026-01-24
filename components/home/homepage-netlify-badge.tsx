import { HomePageSection } from "./homepage-section";

export function HomepageNetlifyBadge() {
  return (
    <HomePageSection className="px-4 py-6 space-y-4">
      <h2 className="text-center font-semibold text-gray-700 text-sm">
        Situs ini didukung oleh
      </h2>
      <div className="flex justify-center items-center">
        <a
          href="https://www.netlify.com"
          rel="nofollow noopener noreferrer"
          target="_blank"
          title="Deploys by Netlify"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt="Deploys by Netlify"
            height="51"
            src="https://www.netlify.com/v3/img/components/netlify-color-accent.svg"
            width="114"
          />
        </a>
      </div>
    </HomePageSection>
  );
}
