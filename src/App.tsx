import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Section from "./components/sections/Section";
import { SectionType } from "./constants";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div>
        <Section type={SectionType.ABOUT}></Section>
        <Section type={SectionType.PROJECTS}></Section>
        <Section type={SectionType.SKILLS}></Section>
        <Section type={SectionType.CONTACT}></Section>
      </div>
    </>
  );
}

export default App;
