import './App.css';
import AreaCharts from './components/AreaCharts/AreaCharts';
import BarCharts from './components/BarCharts/BarCharts';
import LineCharts from './components/LineCharts/LineCharts';

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
    </div>
  );
}

export default App;
