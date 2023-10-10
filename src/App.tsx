import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import GalleryPage from './pages/Gallery/GalleryPage';
import HomePage from './pages/Home/HomePage';
import AboutPage from './pages/About/AboutPage';
import ContactPage from './pages/Contact/ContactPage';

function App() {
  return (
      <div className="App">
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Layout />}>
                      <Route path="/" element={<HomePage />} />
                      <Route path="Gallery" element={<GalleryPage />} />
                      <Route path="About" element={<AboutPage />} />
                      <Route path="Contact" element={<ContactPage />} />
                  </Route>
              </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;