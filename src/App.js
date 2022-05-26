import './App.css';
import AreaCharts from './components/AreaCharts/AreaCharts';
import BarCharts from './components/BarCharts/BarCharts';
import LineCharts from './components/LineCharts/LineCharts';
import SpecialCharts from './components/SpecialCharts/SpecialCharts';

function App() {
  return (
    <div className="App">
      <h1>Welcome to my recharts board</h1>

      <h3 style={{marginTop:"50px"}}>Simple Line Charts</h3>
      <LineCharts></LineCharts>

      <h3 style={{marginTop:"50px"}}>Simple Bar Charts</h3>
      <BarCharts></BarCharts>

      <h3 style={{marginTop:"50px"}}>Responsible Area Charts</h3>
      <AreaCharts></AreaCharts>

      <h3 style={{marginTop:"50px"}}>Charts with Axios Js</h3>
      <SpecialCharts></SpecialCharts>
    </div>
  );
}

export default App;
