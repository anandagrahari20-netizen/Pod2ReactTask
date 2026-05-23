// src/App.jsx

import Navbar from "./components/navbar";
import Body from "./components/body";

function App() {
  return (
    <div  className="bg-[#F5F5F5] min-h-screen overflow-hidden" >
      <Navbar />
      <Body />
    </div>
  );
}

export default App;