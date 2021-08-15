import { NextSeo } from "next-seo";
import Image, { ImageLoaderProps } from "next/image";
import htmr from "htmr";
import { InformationCircleIcon } from "@heroicons/react/outline";

import { cloudinaryLoader, getBlurred } from "~/lib/image/cloudinary-loader";
import { replaceCloudinaryPrefix } from "~/lib/image/cloudinary-utils";
import { htmrTransform } from "~/lib/htmr-transformers";

import { attributes, html } from "~/lib/content/about/content";
import videosData, { Video } from "~/lib/content/about/videos";
import collaboratorsData, {
  Collaborator,
} from "~/lib/content/about/collaborators";

import { Alert } from "~/components/ui/alert";
import { BackButton } from "~/components/layout/back-button";
import {
  AboutPageHeader,
  InternalPageContent,
  InternalPageSection,
  Page,
} from "~/components/layout/page";
import { Container } from "~/components/ui/container";
import { FeedbackSection } from "~/components/ui/feedback-section";

const meta = {
  title: `Tentang Kami`,
  description: `#WargaBantuWarga adalah inisiatif warga untuk berbagi informasi dan saling membantu warga membutuhkan yang terdampak Covid-19.`,
};

export default function AboutPage() {
  return (
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
              <Image
                alt={attributes.title}
                blurDataURL={getBlurred(
                  replaceCloudinaryPrefix(attributes.thumbnail_image),
                  512,
                )}
                height={341}
                layout="responsive"
                loader={cloudinaryLoader}
                placeholder="blur"
                priority={true}
                quality={90}
                src={replaceCloudinaryPrefix(attributes.thumbnail_image)}
                width={512}
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
            </div>

            <div className="grid grid-cols-2 gap-4 px-4 py-6 relative">
              {videosData.videos.map((video: Video) => {
                return (
                  <a
                    key={video.video_url}
                    href={video.video_url}
                    rel="nofollow noopener noreferrer"
                    target="_blank"
                    title={video.title}
                  >
                    <Image
                      alt={video.title}
                      className="shadow rounded-md"
                      height={397}
                      layout="intrinsic"
                      loader={cloudinaryLoader}
                      loading="lazy"
                      quality={90}
                      src={replaceCloudinaryPrefix(video.thumbnail_image)}
                      width={720}
                    />
                    <p className="text-gray-700 text-xs">{video.title}</p>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Collaborators Sections --start */}
          <InternalPageSection className="py-6 space-y-4">
            <h2 className="text-center font-semibold text-gray-700 text-lg">
              Terima kasih kepada para kolaborator inisiatif #WargaBantuWarga
            </h2>
            <div className="flex flex-wrap justify-center items-center space-x-4 space-y-4 relative">
              {collaboratorsData.collaborators.map(
                (collaborator: Collaborator) => {
                  return (
                    <a
                      key={collaborator.link_url}
                      className="flex justify-center items-center relative h-16 w-24"
                      href={collaborator.link_url}
                      rel="nofollow noopener noreferrer"
                      target="_blank"
                      title={collaborator.name}
                    >
                      <Image
                        alt={collaborator.name}
                        className="rounded-md"
                        layout="fill"
                        loader={({ src, width }: ImageLoaderProps) => {
                          return cloudinaryLoader({
                            src,
                            width,
                            quality: 90,
                          });
                        }}
                        loading="lazy"
                        objectFit="contain"
                        quality={90}
                        sizes="200px"
                        src={replaceCloudinaryPrefix(
                          collaborator.thumbnail_image,
                        )}
                      />
                    </a>
                  );
                },
              )}
            </div>
          </InternalPageSection>

          <FeedbackSection />
        </Container>
      </InternalPageContent>
    </Page>
  );
}
