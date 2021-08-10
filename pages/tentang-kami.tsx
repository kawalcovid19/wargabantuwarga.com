import { NextSeo } from "next-seo";
import htmr from "htmr";
import {
  InformationCircleIcon,
  SpeakerphoneIcon,
} from "@heroicons/react/outline";

import { htmrTransform } from "~/lib/htmr-transformers";
import { attributes, html } from "~/lib/content/about/content";

import videosData, { Video } from "~/lib/content/about/videos";

import collaboratorsData, {
  Collaborator,
} from "~/lib/content/about/collaborators";

import { Alert } from "~/components/ui/alert";
import { PrimaryAnchorButton } from "~/components/ui/button";
import { BackButton } from "~/components/layout/back-button";
import {
  AboutPageHeader,
  InternalPageContent,
  InternalPageSection,
  Page,
} from "~/components/layout/page";
import { Container } from "~/components/ui/container";

const meta = {
  title: `Tentang Kami`,
  description: `#WargaBantuWarga adalah inisiatif warga untuk berbagi informasi dan saling membantu warga membutuhkan yang terdampak Covid-19.`,
};

export default function AboutPage() {
  return (
    <div>
      <Page>
        <NextSeo
          description={meta.description}
          openGraph={{ title: meta.title, description: meta.description }}
          title={meta.title}
        />
        <AboutPageHeader
          backButton={<BackButton href="/" />}
          breadcrumbs={[
            {
              name: "Tentang Kami",
              href: "/tentang-kami",
              current: true,
            },
          ]}
          description={attributes.description}
          subtitle="Tentang Kami"
          title={attributes.title}
        />
        <InternalPageContent>
          <Container className="space-y-2">
            <div className="overflow-hidden bg-white">
              <div className="text-gray-600">
                {/* TODO: change to next/image once we get correct Cloudinary Image */}
                <img
                  alt={attributes.title}
                  height={236}
                  src={attributes.thumbnail_image}
                  width={656}
                />

                <article className="px-4 py-6 space-y-4">
                  {htmr(html, { transform: htmrTransform })}

                  <Alert color="blue" icon={InformationCircleIcon}>
                    <span className="text-gray-700">
                      Anda bebas menggunakan dan menyebarluaskan informasi yang
                      ada dalam website ini.
                    </span>
                  </Alert>
                </article>

                <div className="flex px-4 py-6 space-x-4 relative">
                  {videosData.videos.map((video: Video) => {
                    return (
                      <a
                        key={video.video_url}
                        className="shadow rounded-md"
                        href={video.video_url}
                        rel="nofollow noopener noreferrer"
                        target="_blank"
                        title={video.title}
                      >
                        {/* TODO: change to next/image once we get correct Cloudinary Image */}
                        <img
                          alt={video.title}
                          className="rounded-md"
                          height={236}
                          src={video.thumbnail_image}
                          width={656}
                        />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Collaborators Sections --start */}
            <InternalPageSection className="py-6 space-y-4">
              <h2 className="text-center font-semibold text-gray-700 text-lg">
                Terima kasih kepada para kolaborator inisiatif #WargaBantuWarga
              </h2>
              <div className="flex flex-wrap justify-center items-center space-x-4 relative">
                {collaboratorsData.collaborators.map(
                  (collaborator: Collaborator) => {
                    return (
                      <a
                        key={collaborator.link_url}
                        className="flex justify-center items-center"
                        href={collaborator.link_url}
                        rel="nofollow noopener noreferrer"
                        target="_blank"
                        title={collaborator.name}
                      >
                        {/* TODO: change to next/image once we get correct Cloudinary Image */}
                        <img
                          alt={collaborator.name}
                          className="rounded-md"
                          height={80}
                          src={collaborator.thumbnail_image}
                          width="auto"
                        />
                      </a>
                    );
                  },
                )}
              </div>
            </InternalPageSection>

            {/* Submit Feedback Sections --start */}
            <InternalPageSection className="pt-6 pb-24 space-y-2 sm:pb-6">
              <h2 className="text-center font-semibold text-gray-700 text-lg">
                Ada usulan / laporan terkait website ini?
              </h2>
              <div className="flex justify-center">
                <PrimaryAnchorButton
                  aria-label="Sampaikan masukan Anda"
                  className="mt-2"
                  href="https://kcov.id/wbw-discuss"
                  icon={SpeakerphoneIcon}
                  rel="nofollow noopener noreferrer"
                  rounded
                  target="_blank"
                  type="button"
                >
                  Sampaikan masukan Anda
                </PrimaryAnchorButton>
              </div>
            </InternalPageSection>
          </Container>
        </InternalPageContent>
      </Page>
    </div>
  );
}
