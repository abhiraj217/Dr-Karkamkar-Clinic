import './App.scss';
import Home from './pages/Home';
import {Routes, Route} from 'react-router-dom';
import KnowYourDr from './pages/KnowYourDr';
import ServicesPage from './pages/ServicesPage';
import Contactus from './pages/Contact/Contactus';
import FaqPage from './pages/FaqPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aboutUs" element={<KnowYourDr />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path='/Faq' element={<FaqPage />} />
      <Route path="/contact" element={<Contactus />} />
    </Routes>
  );
}

export default App;
