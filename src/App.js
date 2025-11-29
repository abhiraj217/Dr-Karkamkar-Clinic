import './App.scss';
import Home from './pages/Home';
import {Routes, Route} from 'react-router-dom';
import KnowYourDr from './pages/KnowYourDr';
import ServicesPage from './pages/ServicesPage';
import BlogsPage from './pages/BlogsPage';
import SingleBlog from './pages/SingleBlog/SingleBlog';
import Contactus from './pages/Contact/Contactus';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aboutUs" element={<KnowYourDr />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/blogs" element={<BlogsPage />} />
      <Route path="/blog/:url" element={<SingleBlog />} />
      <Route path="/contact" element={<Contactus />} />
    </Routes>
  );
}

export default App;
