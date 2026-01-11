import "./App.css";
import Section from "./components/sections/Section";
import { SectionType } from "./constants";

function App() {
  return (
    <>
      <Section type={SectionType.ABOUT}></Section>
      <Section type={SectionType.PROJECTS}></Section>
      <Section type={SectionType.SKILLS}></Section>
      <Section type={SectionType.CONTACT}></Section>
    </>
  );
}

export default App;
