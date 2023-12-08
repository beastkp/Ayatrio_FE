import "./App.css";
import Page1 from "./Components/Page1";
import Page2 from "./Components/Page2";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Page3 from "./Components/Page3";
import Header from "./Components/Header";
import FooterSection from "./Components/FooterSection";

function App() {
  return (
    <div className="m-10">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Page1 />} />
          <Route exact path="/page2" element={<Page2 />} />
          <Route exact path="/page3" element={<Page3 />} />
        </Routes>
        <FooterSection />
      </BrowserRouter>
    </div>
  );
}

export default App;
