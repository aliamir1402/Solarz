import "./App.css";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  ChakraProvider,
} from "@chakra-ui/react";
import Dropdown from "./components/dropdown.js";
import AreaChart from "./components/areaChart.js";
import Plant1DataAnalytics from "./components/plant1DataAnalytics.js";
import Plant2DataAnalytics from "./components/plant2DataAnalytics.js";
import FutureStats from "./components/futureStats.js";
import QrContent from "./components/QrContent.js";
import RecommondComp from "./components/recommondComp.js";

function App() {
  var modulesPlant1=["A1", "B1", "C1"]
  return (
    <>
      <header className="App-header">
        {/*Component of Title */}
        <div className="App-container bor">
          <div className="bor App-item title">Dashboard</div>
        </div>

        {/*Component of Tabs Plant 1 and Plant 2 */}
        <div className="App-container bor">
          <div className="bor App-item sub-title">Data Analytics</div>
        </div>
        <div className="bor Main-Content">
          <ChakraProvider>
            <Tabs variant="soft-rounded" colorScheme="green">
              <TabList>
                <Tab>Plant 1</Tab>
                <Tab>Plant 2</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  {/*Drop-Down Component*/}
                  <Dropdown customNames={modulesPlant1}></Dropdown>
                  {/*Plant-1 Data Analytics Main Content */}
                  <Plant1DataAnalytics></Plant1DataAnalytics>
                </TabPanel>
                <TabPanel>
                  {/*Drop-Down Component*/}
                  <Dropdown customNames={["A2", "B2", "C2"]}></Dropdown>
                  {/*Plant-2 Data Analytics Main Content */}
                  <Plant2DataAnalytics></Plant2DataAnalytics>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </ChakraProvider>
        </div>

        {/*Component of Predictive Module*/}
        <div className="App-container sub-title bor">Future Stats</div>
        <FutureStats></FutureStats>
        <div className="App-container bor">
          <div className="App-item bor ml-16">
            <AreaChart title="Future Daily Generation"></AreaChart>
          </div>
        </div>

        {/*Component of Recommandations*/}
        <div className="bor App-container sub-title">Recommandations</div>
        <RecommondComp></RecommondComp>

        {/*Component of QR Links*/}
        <div className="bor App-container sub-title">QR Links</div>
        <QrContent></QrContent>
      </header>
    </>
  );
}

export default App;
