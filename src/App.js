import "./App.css"
import NavBar from "./pages/NavBar";
import SectionOne from "./pages/SectionOne";
import SectionTwo from "./pages/SectionTwo";
import SectionThree from "./pages/SectionThree";
import SectionFour from "./pages/SectionFour";
import SectionSix from "./pages/SectionSix";
function App() {
  return (
    <div className="App">
      <div className="Header"><NavBar/></div>
      <SectionOne/>
      <SectionTwo/>
      <SectionThree/>
      <SectionFour/>
      <SectionSix/>
    </div>
  );
}

export default App;
