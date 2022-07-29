import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Leaflet from "./pages/Leaflet";
import Prices from "./pages/Prices";
import DeliveryInformations from "./pages/DeliveryInformations";
import AboutMe from "./pages/AboutMe";

function App() {
  return (
    <Layout>
      <Routes>
        <Route exact path="/fanka-decor" element={<Home />} />
        <Route exact path="/fanka-decor/tajekoztato" element={<Leaflet />} />
        <Route exact path="/fanka-decor/arak" element={<Prices />} />
        <Route exact path="/fanka-decor/szallitasi-informaciok" element={<DeliveryInformations />} />
        <Route exact path="/fanka-decor/rolam" element={<AboutMe />} />
      </Routes>
    </Layout>
  );
}

export default App;
