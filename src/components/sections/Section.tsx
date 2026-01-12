import { SectionType } from "../../constants";

interface SectionTypeProps {
  type: SectionType;
}

/**
 * Section component
 *
 * Renders different content based on the provided SectionType
 * @param type - enum value that determines which section is displayed
 */
function Section({ type }: SectionTypeProps) {
  return (
    <div className="size-svw border border-red-600">
      <p>{type}</p>
    </div>
  );
}

export default Section;
