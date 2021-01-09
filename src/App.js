import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Homepage from './components/Hompage';
import Card from './components/card';
import Day from './components/day';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Homepage/>
      <Card/>
      <Day/>
    </div>
  );
}

export default App;
