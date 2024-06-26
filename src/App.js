import NavBar from "./components/navbar/NavBar";
import Footer from "./footer/Footer";
import Menu from "./menu/Menu";
import Login from "./login/Login";
import Home from "./pages/home/Home";
import Products from "./pages/products/Products";
import Users from "./pages/users/Users";
import "./styles/global.scss";


import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet
} from 'react-router-dom';


const Layout = () => {
  return (
  <div className="main">
    <NavBar />
    <div className="container">
      <div className="menuContainer">
        <Menu />
      </div>
      <div className="contentContainer">
    <Home />
        <Outlet />

      </div>
    </div>
    <Footer />

  </div>
  )
  }
function App() {
  return (
    <div className="App">
     
      <Router>
        <Routes>
        <Route path="/" element={<Layout />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/products" element={<Products />}/>
          <Route path="/users" element={<Users />}/>
          <Route path="/login" element={<Login />}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App; 
