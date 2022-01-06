import Image from './Image';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Josh by Joseph Carr Wine</h1>
        <p>
          Josh wines is named after Joseph's dad. His dad's name was Joseph, but
          his friends called him Josh.
        </p>
        <span className="growing-wine">🍷</span>
      </header>
      <section className="content">
        <div className="page-section">
          <p>
            This Cabernet is a classic! In the beginning, he only made one wine,
            Cabernet Sauvignon, but soon thereafter began making a Josh
            Chardonnay for his wife, Dee.
          </p>
          <Image
            className="image"
            src="https://i.ibb.co/2v97GNd/josh-wine.jpg"
            alt="Josh Wines Cabernet Sauvignon"
            border="0"
          />
        </div>
        <div className="page-section">
          <h3>Josh?</h3>
          <p>His friends called him Josh!</p>
          <Image
            className="image"
            src="https://i.ibb.co/6bh0FRX/josh-label-dad-transparent.png"
            alt="josh-label-dad-transparent"
            border="0"
          />
        </div>
        <div className="page-section">
          <h3>Joseph?</h3>
          <p>His real name was Joseph.</p>
          <Image
            className="image"
            src="https://i.ibb.co/M6V50qN/joshbyjosephlabel.png"
            alt="joshbyjosephlabel"
            border="0"
          />
        </div>
        <div className="page-section">
          <h3>Oh my Josh!</h3>
          <div>
            <div className="iframe-container">
              <iframe
                className="iframe"
                src="https://www.youtube.com/embed/HlgY4XETGUE"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
