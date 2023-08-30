import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Orders from './pages/Orders';
import Customers from './pages/Customers';
import Price from './pages/Price';
import { CustomerContextProvider } from './context/Customer';
import { OrderContextProvider } from './context/Orders';
import PrivacyPolicy from './pages/PrivacyPolicy';
import { AuthContextProvider } from './context/Auth';
import Login from './pages/Login';

function App() {
  return (
    <>
      <Router>
        <AuthContextProvider>
          <CustomerContextProvider>
            <OrderContextProvider>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/customers" element={<Customers />} />
                <Route path="/price" element={<Price />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              </Routes>
            </OrderContextProvider>
          </CustomerContextProvider>
        </AuthContextProvider>
      </Router>
    </>
  );
}

export default App;
