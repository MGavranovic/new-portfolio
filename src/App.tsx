import "./App.css";
import Cursor from "./ui/Cursor";
import Room from "./components/room/Room";

function App() {
  return (
    <>
      <Cursor animated={false}></Cursor>
      <Room></Room>
    </>
  );
}

export default App;
