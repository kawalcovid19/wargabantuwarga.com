import PostTitle from "../components/post-title";

export default function PostHeader({ title, coverImage, date, author }) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
    </>
  );
}
