import { InternalPageSection } from "~/components/layout/page";
import StackedLink from "~/components/layout/stacked-link";
import { Telecounseling } from "~/lib/content/telekonseling";

interface TelecounselingSectionProps {
  telekonseling: Telecounseling;
}

export function TelecounselingSection(props: TelecounselingSectionProps) {
  return (
    <InternalPageSection className="flex-1 pb-6 space-y-8">
      {props.telekonseling.supports.map((counseling) => (
        <div key={counseling.support} className="space-y-4">
          <h2 className="text-base font-semibold text-gray-900">
            {counseling.support}
          </h2>
          <div className="p-2 bg-gray-50 rounded-md">
            <StackedLink links={counseling.contents} />
          </div>
        </div>
      ))}
    </InternalPageSection>
  );
}
