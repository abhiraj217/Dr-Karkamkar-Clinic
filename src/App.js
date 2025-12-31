import Home from './pages/Home';
import { Routes, Route, Navigate } from 'react-router-dom';
import KnowYourDr from './pages/KnowYourDr';
import ServicesPage from './pages/ServicesPage';
import Contactus from './pages/Contact/Contactus';
import FaqPage from './pages/FaqPage';
import GalleryPage from './pages/GalleryPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aboutUs" element={<KnowYourDr />} />

      {/* Services */}
      <Route path="/services/:slug" element={<ServicesPage />} />
      <Route path="/services" element={<Navigate to="/services/knee-arthroscopy" replace />} />

      {/* ✅ GALLERY ROUTES */}
      <Route path="/gallery" element={<GalleryPage />}>
        <Route path="clinic" element={<GalleryPage />} />
        <Route path="videos" element={<GalleryPage />} />
      </Route>

      <Route path="/faq" element={<FaqPage />} />
      <Route path="/contact" element={<Contactus />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
