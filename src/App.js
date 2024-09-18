import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/shared/Layout";
import Dashboard from "./components/Dashboard";
import Products from "./components/Products";
import SignupLogin from "./components/SignupLogin";
import Table from "./components/fetures/table/Tables";
import AddBlog from "./components/fetures/table/AddBlog";
import AddProduct from "./components/fetures/Product/AddProduct";
import Product from "./components/fetures/Product/Product";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          {/* <Route path="product" element={<Products />} /> */}
          <Route path="/table" element={<Table />} />
          <Route path="/product" element={<Product />} />
          <Route path="/addblog" element={<AddBlog />} />
          <Route path="/addproduct" element={<AddProduct />} />
        </Route>
        <Route path="/login" element={<SignupLogin />} />
      </Routes>
    </Router>
  );
}

export default App;
