import Image from './Image';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Josh by Joseph Carr Wine</h1>
        <p>Josh wines by my dad Joseph, but his friends called him Josh.</p>
        <p>Explore our delicious wines.</p>
        <p>This Cabernet is a classic!</p>
        <div>
          <Image 
            src="https://i.ibb.co/2v97GNd/josh-wine.jpg"
            alt="Josh Wines Cabernet Sauvignon" 
            border="0"
          />
        </div>
      </header>
    </div>
  );
}

export default App;
