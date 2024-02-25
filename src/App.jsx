
import './App.css';
import Hero from './components/Hero'
import Header from './components/Header'
import Footer from './components/Footer'
import Content from './components/Content'
import Home from './pages/Home'
import Signup from './pages/Signup'
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
} from "react-router-dom";


function App() {
  return (
    <div className="bg-opacity-35 blend-darken bg-black text-white h-screen" >
      <BrowserRouter>
        <Header />
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />

        </Routes>
      </BrowserRouter>
    

    </div>
  );
}

export default App;
