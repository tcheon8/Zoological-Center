import "./App.css";
import { Routes, Route } from "react-router-dom";

import { Navbar } from "./components/Navbar";
import { Home } from "./components//Home";
import { About } from "./components/About";
import { Animals } from "./components/Animals";
import { Donate } from "./components/Donate";
import { Thanks } from "./components/Thanks";
import { Contact } from "./components/Contact";
import { Lion } from "./components/Lion";
import { Zebra } from "./components/Zebra";
import { Giraffe } from "./components/Griaffe";
import { Hawk } from "./components/Hawk";
import { Parrot } from "./components/Parrot";
import { Flamingo } from "./components/Flamingo";
import { Clownfish } from "./components/Clownfish";
import { Shark } from "./components/Shark";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/animals" element={<Animals />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/thanks" element={<Thanks />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/lion" element={<Lion />} />
        <Route path="/zebra" element={<Zebra />} />
        <Route path="/giraffe" element={<Giraffe />} />
        <Route path="/hawk" element={<Hawk />} />
        <Route path="/parrot" element={<Parrot />} />
        <Route path="/flamingo" element={<Flamingo />} />
        <Route path="/clownfish" element={<Clownfish />} />
        <Route path="/shark" element={<Shark />} />
      </Routes>
    </div>
  );
};

export default App;
