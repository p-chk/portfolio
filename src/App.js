import Profile from './PortfolioContainer/Home/Profile';
import './App.css';
import AboutMe from './PortfolioContainer/AboutMe/AboutMe';
import Product from './PortfolioContainer/Product/Product';
import ContactMe from "./PortfolioContainer/ContactMe/ContactMe"
import { ToastProvider, useToasts } from 'react-toast-notifications';

function App() {
  return (
    <ToastProvider>
    <div className="App">
    <Profile/>
    <AboutMe/>
    <Product/>
    <ContactMe/>
    </div>
    </ToastProvider>
  );
}

export default App;
