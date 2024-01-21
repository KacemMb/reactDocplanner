import "./App.css"
import NavBar from "./pages/NavBar";
import SectionOne from "./pages/SectionOne";
import SectionTwo from "./pages/SectionTwo";
import SectionThree from "./pages/SectionThree";
import SectionFour from "./pages/SectionFour";
import SectionFive from "./pages/SectionFive";
import SectionSix from "./pages/SectionSix";
import SectionSeven from "./pages/SectionSeven";
import LastSection from "./pages/LastSection";
function App() {
  return (
    <div className="App">
      <div className="Header"><NavBar/></div>
      <SectionOne/>
      <SectionTwo/>
      <SectionThree/>
      <SectionFour/>
      <SectionFive/>
      <SectionSix/>
      <SectionSeven/>
      <LastSection/>
    </div>
  );
}

export default App;
