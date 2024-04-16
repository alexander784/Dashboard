import NavBar from "./components/navbar/NavBar";
import Footer from "./footer/Footer";
import Menu from "./footer/menu/Menu";
import Login from "./login/Login";
import Home from "./pages/home/Home";
import Products from "./pages/products/Products";
import Users from "./pages/users/Users";
import {
  BrowserRouter as Router,
  Route,
  Routes
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

      </div>
    </div>
    <Footer />

  </div>
  )
  }
function App() {
  return (
    <div className="App">
      <Home />
      <Router>
        <Routes>
        <Route path="/" element={<Layout />}/>
          <Route path="/" element={<Home />}/>
          <Route path="/products" element={<Products />}/>
          <Route path="/users" element={<Users />}/>
          <Route path="/login" element={<Login />}/>
          


        </Routes>
      </Router>
      
    </div>
  );
}

export default App; 
