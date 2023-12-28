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
import Plant1DataAnalytics from "./components/plant1DataAnalytics.js";
import Plant2DataAnalytics from "./components/plant2DataAnalytics.js";
import FutureStats from "./components/futureStats.js";
import QrContent from "./components/QrContent.js";
import RecommondComp from "./components/recommondComp.js";
import React, { useEffect, useState } from "react";
import solarPanels from "./components/images/solarPanel.gif";

function App() {
  const [Value, setValue] = useState([]);
  const [Metrics, setMetrics] = useState([]);
  const [DailyGen, setDailyGen] = useState([]);
  const [Value2, setValue2] = useState([]);
  const [Metrics2, setMetrics2] = useState([]);
  const [DailyGen2, setDailyGen2] = useState([]);
  const [FutureEstimations, setFutureEstimations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showComponent, setShowComponent] = useState(false);
  const [Plant1_Cleaning, setPlant1_Cleaning] = useState(false);
  const [Plant2_Cleaning, setPlant2_Cleaning] = useState(false);
  const [Plant1_Maintainance, setPlant1_Maintainance] = useState(false);
  const [Plant2_Maintainance, setPlant2_Maintainance] = useState(false);
  const [showComponent2, setShowComponent2] = useState(false);
  var [D, setD] = useState(true);
  var [D2, setD2] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response1 = await fetch("http://localhost:5000/api/modules");
        const data1 = await response1.json();
        setValue(data1);
        const response2 = await fetch(
          "http://localhost:5000/api/MetricsPlant1"
        );
        const data2 = await response2.json();
        setMetrics(data2);
        const response3 = await fetch(
          "http://localhost:5000/api/DailyPlant1Generation"
        );
        const data3 = await response3.json();
        setDailyGen(data3);
        const response4 = await fetch("http://localhost:5000/api/modules2");
        const data4 = await response4.json();
        setValue2(data4);
        const response5 = await fetch(
          "http://localhost:5000/api/MetricsPlant2"
        );
        const data5 = await response5.json();
        setMetrics2(data5);
        const response6 = await fetch(
          "http://localhost:5000/api/DailyPlant2Generation"
        );
        const data6 = await response6.json();
        setDailyGen2(data6);
        const response7 = await fetch(
          "http://localhost:5000/api/FutureEstimations"
        );
        const data7 = await response7.json();
        setFutureEstimations(data7);

        const response8 = await fetch(
          "http://localhost:5000/api/Plant1_Cleaning"
        );
        const data8 = await response8.json();
        setPlant1_Cleaning(data8);

        const response9 = await fetch(
          "http://localhost:5000/api/Plant1_Maintainance"
        );
        const data9 = await response9.json();
        setPlant1_Maintainance(data9);

        const response10 = await fetch(
          "http://localhost:5000/api/Plant2_Cleaning"
        );
        const data10 = await response10.json();
        setPlant2_Cleaning(data10);

        const response11 = await fetch(
          "http://localhost:5000/api/Plant2_Maintainance"
        );
        const data11 = await response11.json();
        setPlant2_Maintainance(data11);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    if (showComponent) {
    }
  }, [showComponent]);
  useEffect(() => {
    if (showComponent2) {
    }
  }, [showComponent2]);

  // Render loading state if data is still being fetched
  if (loading) {
    return (
      <div className="imgSolar">
        <img
          src={solarPanels}
          alt="Solar Panels"
          width={50}
          height={50}
        />
      </div>
    );
  }

  // Callback function to receive data from the child
  const handleChildData = async (data) => {
    // Simulating an asynchronous operation (e.g., processing data)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // After the asynchronous operation, update the state
    //Dataa = Value[parseInt(data) - 1].ID;
    setD(Value[parseInt(data) - 1].ID);
    console.log("Data received from child:", D);
    setShowComponent(true);
  };
  // Callback function to receive data from the child
  const handleChildData2 = async (data) => {
    // Simulating an asynchronous operation (e.g., processing data)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // After the asynchronous operation, update the state
    //Dataa = Value[parseInt(data) - 1].ID;
    setD2(Value2[parseInt(data) - 1].ID);
    console.log("Data received from child:", D2);
    setShowComponent2(true);
  };
  // This useEffect will be triggered whenever showComponent changes

  var modulesPlant1 = [];
  var modulesPlant2 = [];
  for (var i = 0; i < Value.length; i++) modulesPlant1.push(Value[i].ID);
  for (var j = 0; j < Value2.length; j++) modulesPlant2.push(Value2[j].ID);

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
                  <Dropdown
                    customNames={modulesPlant1}
                    sendDataToParent={handleChildData}
                  ></Dropdown>
                  {/*Plant-1 Data Analytics Main Content */}
                  {showComponent && (
                    <Plant1DataAnalytics
                      Module={D}
                      Metrics={Metrics}
                      DailyGen={DailyGen}
                    ></Plant1DataAnalytics>
                  )}
                </TabPanel>
                <TabPanel>
                  {/*Drop-Down Component*/}
                  <Dropdown
                    customNames={modulesPlant2}
                    sendDataToParent={handleChildData2}
                  ></Dropdown>
                  {/*Plant-2 Data Analytics Main Content */}
                  {showComponent2 && (
                    <Plant2DataAnalytics
                      Module={D2}
                      Metrics={Metrics2}
                      DailyGen={DailyGen2}
                    ></Plant2DataAnalytics>
                  )}
                </TabPanel>
              </TabPanels>
            </Tabs>
          </ChakraProvider>
        </div>

        {/*Component of Predictive Module*/}
        <div className="App-container sub-title bor">Future Stats</div>
        <FutureStats FutureEstimations={FutureEstimations}></FutureStats>

        {/*Component of Recommandations*/}
        <div className="bor App-container sub-title">Recommandations</div>
        <RecommondComp
          Plant1_Cleaning={Plant1_Cleaning}
          Plant2_Cleaning={Plant2_Cleaning}
          Plant1_Maintainance={Plant1_Maintainance}
          Plant2_Maintainance={Plant2_Maintainance}
        ></RecommondComp>

        {/*Component of QR Links*/}
        <div className="bor App-container sub-title">QR Links</div>
        <QrContent></QrContent>
      </header>
    </>
  );
}

export default App;
