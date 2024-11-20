import Global from "./Global";
import Header from "./Components/Header/Index";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from "styled-components";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Cart from "./Components/Cart";
import Search from "./Components/Search";
import Contact from "./Components/Contact";
import ViewMore from "./Components/ViewMore";
import Product from "./Components/Product";
import Account from "./Components/Account";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: start;

`

function App() {
    return (
      <>
        <Global/>
        <Router>
          <Container>
            <Header/>
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/cart' element={<Cart/>} />
              <Route path='/search' element={<Search/>} />
              <Route path='/contact' element={<Contact/>} />
              <Route path='/view-more' element={<ViewMore/>} />
              <Route path='/product' element={<Product/>} />
              <Route path='/account' element={<Account/>} />
            </Routes>
            <Footer/>
          </Container>
        </Router>
      </>
  
  
    );
}
  
export default App;