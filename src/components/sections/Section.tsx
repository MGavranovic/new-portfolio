import { SectionType } from "../../constants";

interface SectionTypeProps {
  type: SectionType;
}

/** @description to accept props dynamically */
function Section({ type }: SectionTypeProps) {
  return (
    <div className="size-svw border border-red-600">
      <p>{type}</p>
    </div>
  );
}

export default Section;
