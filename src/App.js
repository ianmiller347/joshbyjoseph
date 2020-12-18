import Image from './Image';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Josh by Joseph Carr Wine</h1>
        <p>Josh wines is named after Joseph's dad. His dad's name was Joseph, but his friends called him Josh.</p>
        <p>This Cabernet is a classic! In the beginning, he only made one wine, Cabernet Sauvignon, but soon thereafter began making a Josh Chardonnay for his wife, Dee.</p>
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
