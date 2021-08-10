import { NextSeo } from "next-seo";
import Image from "next/image";
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
              <div className="p-4 space-y-4">
                <h2 className="font-bold text-gray-700 text-2xl sm:text-3xl">
                  {attributes.title}
                </h2>
                <p className="text-gray-700">{attributes.description}</p>
              </div>

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

              <article className="p-4 space-y-4">
                {htmr(html, { transform: htmrTransform })}

                <Alert color="blue" icon={InformationCircleIcon}>
                  <span className="text-gray-700">
                    Anda bebas menggunakan dan menyebarluaskan informasi yang
                    ada dalam website ini.
                  </span>
                </Alert>
              </article>

              <div className="grid grid-cols-2 gap-4 p-4 relative">
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
                        blurDataURL={getBlurred(
                          replaceCloudinaryPrefix(video.thumbnail_image),
                          720,
                        )}
                        className="shadow rounded-md"
                        height={397}
                        layout="intrinsic"
                        loader={cloudinaryLoader}
                        loading="lazy"
                        placeholder="blur"
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
            <div className="p-4 space-y-4 bg-white overflow-hidden shadow rounded-md">
              <h2 className="text-center font-semibold text-gray-700 text-lg">
                Terima kasih kepada para kolaborator inisiatif #WargaBantuWarga
              </h2>
              <div className="flex flex-wrap justify-center items-center space-x-4 relative">
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
                          // height={80}
                          layout="fill"
                          loader={cloudinaryLoader}
                          loading="lazy"
                          objectFit="contain"
                          quality={90}
                          // width={100}
                          src={replaceCloudinaryPrefix(
                            collaborator.thumbnail_image,
                          )}
                        />
                      </a>
                    );
                  },
                )}
              </div>
            </div>
          </div>
        </PageContent>
      </Page>
    </div>
  );
}
