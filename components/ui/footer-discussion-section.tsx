import siteConfig from "~/lib/content/site-config";

export function FooterDiscussionSection() {
  return (
    <div className="px-4 py-6 space-y-4 text-center">
      <p>Ada usulan atau laporan terkait website ini?</p>
      <a
        href={siteConfig.discussion_url}
        rel="nofollow noopener noreferrer"
        target="_blank"
      >
        Sampaikan masukan Anda di sini.
      </a>
    </div>
  );
}
