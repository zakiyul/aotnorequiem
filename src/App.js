import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Legal from "./pages/Legal";
import Manga from "./pages/Manga";
import About from "./pages/About";
import PromoPosters from "./pages/PromoPosters";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about-us" component={AboutUs} />
        <Route path="/legal" component={Legal} />
        <Route path="/chapter/aot-no-requiem/:id" component={Manga} />
        <Route path="/about" component={About} />
        <Route path="/bonus/promo-posters" component={PromoPosters} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
