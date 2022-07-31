import Layout from "./components/Layout";
import Home from "./pages/home/Home";
import Infos from "./pages/Infos";
import Prices from "./pages/Prices";
import DeliveryInformations from "./pages/DeliveryInformations";
import AboutMe from "./pages/AboutMe";

function App() {
  return (
    <Layout>
        <Home />
        <Infos />
        <Prices />
        <DeliveryInformations />
        <AboutMe />
    </Layout>
  );
}

export default App;
