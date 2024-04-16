import NavBar from "./components/navbar/NavBar";
import Footer from "./components/navbar/footer/Footer";
import Menu from "./components/navbar/footer/menu/Menu";
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


        </Routes>
      </Router>
      
    </div>
  );
}

export default App; 
