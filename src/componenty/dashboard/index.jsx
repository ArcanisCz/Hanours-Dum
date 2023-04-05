import React from "react";
import './style.css';
import Lights from "../lights";
import Climate from "../climate";
import Blinds from "../blinds";
import Energy from "../energy";


const Dashboard = ({data}) => (
  <main className="dashboard">
    <Lights key={data.lights} lights={data.lights} />
    <Climate temperature={data.climate.temperature} humidity={data.climate.humidity} />
    <Energy electricity={data.energyConsumption.electricity} water={data.energyConsumption.water} />
    <Blinds state={data.blinds} />
    
  </main>
)

export default Dashboard;