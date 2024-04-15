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

  </div>
  )
  }
function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/products" element={<Products />}/>
          <Route path="/users" element={<Users />}/>


        </Routes>
      </Router>
      
    </div>
  );
}

export default App; 
