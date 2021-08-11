import { StackedLinkDisclosure } from "~/components/layout/stacked-link-disclosure";
import StackedLink from "~/components/layout/stacked-link";
import { Educations } from "~/lib/content/education";

interface EducationItemsProps {
  educations: Educations;
}

export function EducationItems(props: EducationItemsProps) {
  return (
    <>
      {props.educations.map((education) => (
        <StackedLinkDisclosure key={education.title} title={education.title}>
          <div className="p-2 bg-white rounded-md">
            <StackedLink links={education.links} />
          </div>
        </StackedLinkDisclosure>
      ))}
    </>
  );
}
