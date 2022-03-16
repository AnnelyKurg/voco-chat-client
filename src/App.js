import './App.css';
import Chat from "./chat";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <h3>VOCO</h3>
          <div>
            <Chat/>
          </div>
        </header>
      </div>
  );
}

export default App;


