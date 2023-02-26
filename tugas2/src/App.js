import mobil from "./mobil.webp";
import "./App.css";

function App() {
  return (
    <div>
      <div className="container">
        <h1>Hi, Nama Saya Rahmat Satyawan</h1>
        <p>Senang Bisa mengenal mu!</p>
      </div>
      <div className="container">
        <p>Dibawah ini adalah gambar mobil</p>
      </div>
      <div className="container">
        <img src={mobil} alt="mobil" />
      </div>
      <div className="container">
        <span className="color red">r</span>
        <span className="color yellow">y</span>
        <span className="color green">g</span>
        <span className="color blue">b</span>
      </div>
    </div>
  );
}

export default App;
