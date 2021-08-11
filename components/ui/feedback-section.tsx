import { SpeakerphoneIcon } from "@heroicons/react/outline";
import { Container } from "~/components/ui/container";
import { PrimaryAnchorButton } from "~/components/ui/button";
import { DISCUSSION_URL } from "~/lib/constants/link";

export function FeedbackSection() {
  return (
    <div className="flex-1 px-4 pt-4 pb-12">
      <Container>
        <div className="p-4 bg-white overflow-hidden shadow rounded-md">
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
        </div>
      </Container>
    </div>
  );
}
