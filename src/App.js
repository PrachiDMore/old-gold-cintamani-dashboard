import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Orders from './pages/Orders';
import Customers from './pages/Customers';
import Price from './pages/Price';
import { CustomerContextProvider } from './context/Customer';
import { OrderContextProvider } from './context/Orders';

function App() {
  return (
    <>
      <CustomerContextProvider>
        <OrderContextProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/price" element={<Price />} />
            </Routes>
          </Router>
        </OrderContextProvider>
      </CustomerContextProvider>
    </>
  );
}

export default App;
