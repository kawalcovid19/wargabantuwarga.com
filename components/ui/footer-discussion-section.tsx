import { Container } from "../ui/container";
import { DISCUSSION_URL } from "~/constants/link";

export function FooterDiscussionSection() {
  return (
    <Container>
      <section className="bg-white overflow-hidden px-4 pt-4 pb-20 my-2">
        <span>Ada usulan atau laporan terkait website ini? </span>
        <a
          className="underline text-blue-800"
          href={DISCUSSION_URL}
          rel="nofollow noopener noreferrer"
          target="_blank"
        >
          Sampaikan masukan Anda di sini.
        </a>
      </section>
    </Container>
  );
}
