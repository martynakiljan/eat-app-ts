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
import Footer from "./mainComponents/Footer/Footer";
export default function App() {
  return (
    <>
      <div className="eat-app">
        <div className="eat-app__col1">
          <Nav />
        </div>
        <div className="eat-app__col2">
          <BasketProvider>
            <Home />
            <Routes>
              <Route path="/">
                <Route path="Contact" element={<Contact />} />
                <Route path="ComingSoon" element={<ComingSoon />} />
                <Route path="Help" element={<Help />} />
                <Route path="Location" element={<Location />} />
              </Route>
            </Routes>
          </BasketProvider>
          <Footer />
        </div>
      </div>
    </>
  );
}
