import Global from "./Global";
import Header from "./Components/Header/Index";
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import styled from "styled-components";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Cart from "./Components/Cart";
import Search from "./Components/Search";
import Contact from "./Components/Contact";
import ViewMore from "./Components/ViewMore";
import Product from "./Components/Product";
import Account from "./Components/Account";
import Information from "./Components/Information";
import Method from "./Components/Method";
import FAQ from "./Components/FAQ";
import Term from "./Components/Term";
import Who from "./Components/Who";
import Privacy from "./Components/Privacy";
import PQRS from "./Components/PQRS";
import MethodAdd from "./Components/MethodAdd";
import MethodEdit from "./Components/MethodEdit";
import Pay from "./Components/Pay";
import Confirmation from "./Components/Confirmation";
import TableList from "./Components/TableList";
import Table from "./Components/Table";
import Security from "./Components/Security";
import ChangePassword from "./Components/ChangePassword";
import RecoveryPassword from "./Components/RecoveryPassword";
import InformationEdit from "./Components/InformationEdit";
import Bill from "./Components/Bill";
import Login from "./Components/Login";
import Register from "./Components/Register";
import { useEffect } from "react";
import RegisterNext from "./Components/RegisterNext";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: start;

`

function App() {
    const noHeaderFooterRoutes = ['/login', '/register', '/register-next'];
    
    function Layout({ children }) {
      const location = useLocation();
      const shouldShowHeaderFooter = !noHeaderFooterRoutes.includes(location.pathname);

      useEffect(() => {
        // Esto asegura que el layout se actualice correctamente.
      }, [location]);

      return (
        <>
          {shouldShowHeaderFooter && <Header />}
          {children}
          {shouldShowHeaderFooter && <Footer />}
        </>
      );
    }
    return (
      <>
        <Global/>
        <Router>
          <Container>
            <Layout>
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/login' element={<Login/>} />
              <Route path='/register' element={<Register/>} />
              <Route path='/register-next' element={<RegisterNext/>} />
              <Route path='/cart' element={<Cart/>} />
              <Route path='/search' element={<Search/>} />
              <Route path='/contact' element={<Contact/>} />
              <Route path='/view-more' element={<ViewMore/>} />
              <Route path='/product' element={<Product/>} />
              <Route path='/account' element={<Account/>} />
              <Route path='/information' element={<Information/>} />
              <Route path='/information-edit' element={<InformationEdit/>} />
              <Route path='/method' element={<Method/>} />
              <Route path='/FAQ' element={<FAQ/>} />
              <Route path='/term' element={<Term/>} />
              <Route path='/who' element={<Who/>} />
              <Route path='/privacy' element={<Privacy/>} />
              <Route path='/PQRS' element={<PQRS/>} />
              <Route path='/method-add' element={<MethodAdd/>} />
              <Route path='/method-edit' element={<MethodEdit/>} />
              <Route path='/pay' element={<Pay/>} />
              <Route path='/confirmation' element={<Confirmation/>} />
              <Route path='/table-list' element={<TableList/>} />
              <Route path='/table' element={<Table/>} />
              <Route path='/security' element={<Security/>} />
              <Route path='/change-password' element={<ChangePassword/>} />
              <Route path='/recovery-password' element={<RecoveryPassword/>} />
              <Route path='/bill' element={<Bill/>} />

            </Routes>
            </Layout>
          </Container>
        </Router>
      </>
  
  
    );
}
  
export default App;