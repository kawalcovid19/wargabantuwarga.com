import { SpeakerphoneIcon } from "@heroicons/react/outline";
import { InternalPageSection } from "../layout/page";
import { PrimaryAnchorButton } from "~/components/ui/button";
import { DISCUSSION_URL } from "~/lib/constants/link";

export function FeedbackSection() {
  return (
    <InternalPageSection className="pt-6 pb-24 space-y-2 sm:pb-6">
      <h2 className="text-center font-semibold text-gray-700 text-lg">
        Ada usulan / laporan terkait website ini?
      </h2>
      <div className="flex justify-center">
        <PrimaryAnchorButton
          aria-label="Sampaikan masukan Anda"
          className="mt-2"
          href={DISCUSSION_URL}
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
  );
}
