import logo from './logo.svg';
import './App.css';
import '../src/components/css/bootstrap.min.css'
import Header from './components/Header/Header';
import AllPlayer from './components/AllPlayer/AllPlayer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <AllPlayer></AllPlayer>
    </div>
  );
}

export default App;
