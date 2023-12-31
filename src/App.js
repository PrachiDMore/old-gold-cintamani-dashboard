import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
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
        <Routes>
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
        <AuthContextProvider>
          <CustomerContextProvider>
            <OrderContextProvider>
              <Routes>
                <Route path="/" element={<Orders />} />
                {/* <Route path="/" element={<Home />} /> */}
                <Route path="/login" element={<Login />} />
                <Route path="/customers" element={<Customers />} />
                <Route path="/price" element={<Price />} />
              </Routes>
            </OrderContextProvider>
          </CustomerContextProvider>
        </AuthContextProvider>
      </Router>
    </>
  );
}

export default App;
