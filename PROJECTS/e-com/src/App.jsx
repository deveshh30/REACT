import Header from "./component/Header";
import Home from "./pages/Home";
import Orders from "./pages/Orders";
import Contact from "./pages/Contact"
import Product from "./pages/Product"
import Cart from "./pages/cart";
import Single from "./pages/Single";
import Errorpage from "./pages/Errorpage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Single" element={<Single />} />
        <Route path="*" element={<Errorpage />} />
      </Routes>
    </>
  );
}

export default App;
