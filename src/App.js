import React from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import PortraitDescription from "./components/PortraitDescription";
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
      gallery: [ele_g1,ele_g2,ele_g3]
    },
    {
      _id: 3,
      url: lucy,
      name: "Lucy",
      price: "3,500.00",
      gallery: [ele_g1,ele_g2,ele_g3]
    },
    {
      _id: 4,
      url: maggie,
      name: "Maggie",
      price: "3,500.00",
      gallery: [ele_g1,ele_g2,ele_g3]
    },
    {
      _id: 5,
      url: prudence,
      name: "Prudence",
      price: "3,500.00",
      gallery: [ele_g1,ele_g2,ele_g3]
    },
    {
      _id: 6,
      url: sadie,
      name: "Sadie",
      price: "3,500.00",
      gallery: [ele_g1,ele_g2,ele_g3]
    },
  ];

  return (
    <div className="App ui container">
      <Router>
        <Header />

        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route exact path="/shop">
            <Shop photos={photos} />
          </Route>
          <Route path="/shop/:_id">
            <PortraitDescription photos={photos} />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
