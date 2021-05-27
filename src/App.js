import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import ModelS from "./assets/ModelS.jpeg";
import SolarPanels from "./assets/SolarPanels.jpeg";
import ModelX from "./assets/ModelX.jpeg";
import SolarRoof from "./assets/SolarRoof.jpeg";
import TeslaLogo from "./assets/TeslaLogo.png";
import TslaCharger from "./assets/TslaCharger.jpeg";
import ModelY from "./assets/ModelY.jpeg";
import Model3 from "./assets/Model3.jpeg";
import Item from "./components/Item";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app_items_container">
        <Item
          title="Lowest Cost Solar Panels in the country"
          desc="money-back guarantee"
          descLink=""
          backgroundImg={SolarPanels}
          leftBtnTxt="ORDER NOW"
          leftBtnLink=""
          twoButtons="true"
          first
        />
        <Item
          title="ModelS"
          desc="$69,420"
          descLink=""
          backgroundImg={ModelS}
          leftBtnTxt="CUSTOM ORDER"
          leftBtnLink=""
          rightBtnTx="LEARN MORE"
          rightBtnLink=""
          twoButtons="true"
        />
        <Item
          title="Model 3"
          desc="Money-back guarantee"
          descLink=""
          backgroundImg={Model3}
          leftBtnTxt="CUSTOM ORDER"
          leftBtnLink=""
          rightBtnTx="LEARN MORE"
          rightBtnLink=""
          twoButtons="true"
        />
        <Item
          title="Model X"
          desc="Money-back guarantee"
          descLink=""
          backgroundImg={ModelX}
          leftBtnTxt="CUSTOM ORDER"
          leftBtnLink=""
          rightBtnTx="LEARN MORE"
          rightBtnLink=""
          twoButtons="true"
        />
        <Item
          title="ModelY"
          desc="Money-back guarantee"
          descLink=""
          backgroundImg={ModelY}
          leftBtnTxt="CUSTOM ORDER"
          leftBtnLink=""
          rightBtnTx="LEARN MORE"
          rightBtnLink=""
          twoButtons="true"
        />
      </div>
    </div>
  );
}

export default App;
