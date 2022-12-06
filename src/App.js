import './App.css';
import GameRedux from './game-redux/GameRedux';
import Home from './game-state-props/Home';

function App() {
  return (
    <div className="App">
     {/* <Home/> */}
     <GameRedux/>
    </div>
  );
}

export default App;
