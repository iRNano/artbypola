import React from "react";
import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import PortraitDescription from "./components/Portrait/PortraitDescription";
import eleanor from "./assets/images/shopitems/Eleanor.png";
import lizzy from "./assets/images/shopitems/Lizzy.png";
import lucy from "./assets/images/shopitems/Lucy.png";
import maggie from "./assets/images/shopitems/Maggie.png";
import prudence from "./assets/images/shopitems/Prudence.png";
import sadie from "./assets/images/shopitems/Sadie.png";
import ele_g1 from "./assets/images/shopitems/Eleanor_gallery/Eleanor.png"
import ele_g2 from "./assets/images/shopitems/Eleanor_gallery/Eleanor_Mockup_1.png"
import ele_g3 from "./assets/images/shopitems/Eleanor_gallery/Eleanor_Mockup_2.png"

function App() {
  const photos = [
    {
      _id: 1,
      url: eleanor,
      name: "Eleanor",
      price: "3,500.00",
      gallery: [ele_g1,ele_g2,ele_g3]
    },
    {
      _id: 2,
      url: lizzy,
      name: "Lizzy",
      price: "3,500.00",
      gallery: [lizzy,ele_g2,ele_g3]
    },
    {
      _id: 3,
      url: lucy,
      name: "Lucy",
      price: "3,500.00",
      gallery: [lucy,ele_g2,ele_g3]
    },
    {
      _id: 4,
      url: maggie,
      name: "Maggie",
      price: "3,500.00",
      gallery: [maggie,ele_g2,ele_g3]
    },
    {
      _id: 5,
      url: prudence,
      name: "Prudence",
      price: "3,500.00",
      gallery: [prudence,ele_g2,ele_g3]
    },
    {
      _id: 6,
      url: sadie,
      name: "Sadie",
      price: "3,500.00",
      gallery: [sadie,ele_g2,ele_g3]
    },
  ];

  return (
    <div className="App ui container">
      <Router>
        <Header />

        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route path="/about" element={ <About />} />
          <Route exact path="/shop" element={<Shop photos={photos} />} />
          <Route path="/shop/:_id" element={<PortraitDescription photos={photos} />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/cart" element={<Cart />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
