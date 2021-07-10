import { GetStaticProps } from "next";
import ErrorPage from "next/error";
import Head from "next/head";
import { useRouter } from "next/router";
import Container from "../../components/container";
import Layout from "../../components/layout";
import PostBody from "../../components/post-body";
import PostHeader from "../../components/post-header";
import PostTitle from "../../components/post-title";
import { getAllPosts, getPostBySlug } from "../../lib/api";
import { CMS_NAME } from "../../lib/constants";
import markdownToHtml from "../../lib/markdown-to-html";

type PostProps = {
  post: {
    slug: string;
    title: string;
    author: string;
    ogImage: {
      url: string;
    };
    date: string;
    coverImage: string;
    content: string;
  };
  preview: any;
};

export default function Post({ post, preview }: PostProps) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout preview={preview}>
      <Container>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="mb-32">
              <Head>
                <title>
                  {post.title} | Next.js Blog Example with {CMS_NAME}
                </title>
                <meta content={post.ogImage.url} property="og:image" />
              </Head>
              <PostHeader
                author={post.author}
                coverImage={post.coverImage}
                date={post.date}
                title={post.title}
              />
              <PostBody content={post.content} />
            </article>
          </>
        )}
      </Container>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post: any = getPostBySlug(params?.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
  ]);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
};

export async function getStaticPaths() {
  const posts: any[] = getAllPosts(["slug"]);

  return {
    fallback: false,
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
  };
}
