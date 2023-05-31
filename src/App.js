import mao from './assets/mao.jpeg';
import commi from './assets/commi.png';
import starling from './assets/starling.jpeg';
import sung from './assets/sung.jpeg';
import jongun from './assets/jongun.jpeg';
import './App.css';


function App() {
  return (
    <div className="App">
      <div className="Comms">
        <img src={commi} className='App-comms' alt="Commi symbol" />
      </div>
      <div className="Leaders">
        <div className="Starling">
          <a target="_blank" href="https://en.wikipedia.org/wiki/Joseph_Stalin">
            <img src={starling} className="App-starling" alt="Joesph Starling" /></a>
        </div>
        <a target="_blank" href="https://en.wikipedia.org/wiki/Mao_Zedong">
          <img src={mao} className="App-mao" alt="Chairman Mao" /></a>
        <div className="Sung">
          <a target="_blank" href="https://en.wikipedia.org/wiki/Kim_Il_Sung">
            <img src={sung} className="App-sung" alt="Kim Il Sung" /></a>
        </div>
      </div>
      <div className="Mao-Text">
        <p>
          Hello Comrade, <code>Chairman Mao</code> looks to woooow
        </p>
        <a
          className="App-link"
          href="https://www.youtube.com/watch?v=U06jlgpMtQs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Come This Way Comrade
        </a>
      </div>
    </div >
  );
}

export default App;
