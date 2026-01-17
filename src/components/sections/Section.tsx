import { SectionType } from "../../constants";
import About from "../pages/about/About";
import Projects from "../pages/projects/Projects";

interface SectionTypeProps {
  type: SectionType;
}

/**
 * Section component
 *
 * Renders different content based on the provided SectionType
 * @param type - enum value that determines which section is displayed
 *
 * 0 - about
 *
 * 1 - projects
 *
 * 2 - skills
 *
 * 3 - contact
 */
function Section({ type }: SectionTypeProps) {
  return (
    <div className="h-dvh size-vw border-2 border-red-600">
      {type == 0 && <About></About>}
      {type == 1 && <Projects></Projects>}
    </div>
  );
}

export default Section;
