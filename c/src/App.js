import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import AllProudactComponet from "./componet/AllProudactComponet";
import Layout from "./Layout";
import AddProudctComonet from "./componet/AddProudctComponet";
import RegisterComponent from "./componet/RegisterComponent";
import LoginComponet from "./componet/LoginComponet";
import SingleProudct from "./componet/SingleProudct";
import SingelShoppingCard from "./componet/SingelShoppingCard";
import SinglePCategory from "./componet/SinglePCategory";
import Out from "./componet/Out";


function App() {


  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* <Route path="/" element={<HomeComponet />}></Route> */}
            <Route path="/" element={<AllProudactComponet />} />
            <Route path="add" element={<AddProudctComonet />} />
            <Route path="register" element={<RegisterComponent />} />
            <Route path="login" element={<LoginComponet />} />
            <Route path="all/:id" element={<SingleProudct />} />
            <Route path="cart" element={<SingelShoppingCard />} />
            <Route path="category" element={<SinglePCategory />} />
            <Route path="out" element={<Out />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
