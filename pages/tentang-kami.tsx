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
import { Page } from "~/components/layout/page";
import { PageContent } from "~/components/layout/page-content";
import { PageHeader } from "~/components/layout/page-header";

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
        <PageHeader
          backButton={<BackButton href="/" />}
          breadcrumbs={[
            {
              name: "Tentang Kami",
              href: "/tentang-kami",
              current: true,
            },
          ]}
          title="Tentang Kami"
        />
        <PageContent>
          <div className="space-y-4 bg-gray-100">
            <div className="bg-white overflow-hidden shadow rounded-md">
              <div className="text-gray-400">
                <div className="p-4 space-y-4">
                  <h2 className="font-bold text-gray-700 text-4xl">
                    {attributes.title}
                  </h2>
                  <p className="text-gray-700">{attributes.description}</p>
                </div>

                {/* TODO: change to next/image once we get correct Cloudinary Image */}
                <img
                  alt={attributes.title}
                  height={236}
                  src={attributes.thumbnail_image}
                  width={656}
                />

                <article className="p-4 space-y-4">
                  {htmr(html, { transform: htmrTransform })}

                  <Alert color="blue" icon={InformationCircleIcon}>
                    <span className="text-gray-700">
                      Anda bebas menggunakan dan menyebarluaskan informasi yang
                      ada dalam website ini.
                    </span>
                  </Alert>
                </article>

                <div className="flex p-4 space-x-4 relative">
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
            <div className="p-4 space-y-4 bg-white overflow-hidden shadow rounded-md">
              <h2 className="text-center font-semibold text-gray-700 text-lg">
                Terima kasih kepada para kolaborator inisiatif #WargaBantuWArga
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
            </div>

            {/* Submit Feedback Sections --start */}
            <div className="p-4 space-y-4 bg-white overflow-hidden shadow rounded-md">
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
            </div>
          </div>
        </PageContent>
      </Page>
    </div>
  );
}
