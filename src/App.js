import './App.css';
import BarCharts from './components/BarCharts/BarCharts';
import LineCharts from './components/LineCharts/LineCharts';

function App() {
  return (
    <div className="App">
      <h1>Welcome to my recharts board</h1>
      <h3>Simple Line Charts</h3>
      <LineCharts></LineCharts>
      <h3>Simple Bar Charts</h3>
      <BarCharts></BarCharts>
    </div>
  );
}

export default App;
