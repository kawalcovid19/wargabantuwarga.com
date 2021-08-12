import { StackedLinkDisclosure } from "~/components/layout/stacked-link-disclosure";
import { InternalPageSection } from "~/components/layout/page";
import StackedLink from "~/components/layout/stacked-link";
import { Education } from "~/lib/content/educations";

interface EducationSectionProps {
  educations: Education;
}

export function EducationSection(props: EducationSectionProps) {
  return (
    <InternalPageSection>
      {props.educations.topics.map((education, index) => (
        <StackedLinkDisclosure
          key={education.topic}
          defaultOpen={index === 0}
          title={education.topic}
        >
          <div className="p-2 bg-gray-50 rounded-md">
            <StackedLink links={education.contents} />
          </div>
        </StackedLinkDisclosure>
      ))}
    </InternalPageSection>
  );
}
