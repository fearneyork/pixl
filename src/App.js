import './App.css';
import {useState} from "react";

function App() {

  
  return (
    <div className="App">
      <header className="App-header">
        <h1>pixl</h1>
      </header>
      <main>
        <section className="grid">
          {
            [...Array(64)].map(
              (_value, index) => (
                <CellItem key={index}/>
              )
            )
          }
        </section>

      </main>
    </div>
  );
}

function CellItem() {
  const [isBoxClicked, setIsBoxClicked]=useState(false);
  return (
<div className={`grid-box ${isBoxClicked ? 'grid-box-clicked':''}`} onClick={() => setIsBoxClicked(!isBoxClicked)}></div>

  )

}

export default App;
