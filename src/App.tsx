/** @format */

import "./App.css";
import "./styles/all.scss";
import Home from "./mainComponents/Home/Home";
import Nav from "./mainComponents/NavVertical/Nav";
import { Routes, Route } from "react-router-dom";
import Contact from "./mainComponents/Contact/Contact";
import Help from "./mainComponents/Help/Help";
import ComingSoon from "./mainComponents/ComingSoon/ComingSoon";
import Location from "./mainComponents/Location/Location";
import { BasketProvider } from "./context/BasketContext";

export default function App() {
  return (
    <BasketProvider>
      <div className="eat-app">
        <div className="eat-app__col1">
          <Nav />
        </div>
        <div className="eat-app__col2">
          <Home />
          <Routes>
            <Route path="/">
              <Route path="contact" element={<Contact />} />
              <Route path="coming-soon" element={<ComingSoon />} />
              <Route path="help" element={<Help />} />
              <Route path="location" element={<Location />} />
            </Route>
          </Routes>
        </div>
      </div>
    </BasketProvider>
  );
}
