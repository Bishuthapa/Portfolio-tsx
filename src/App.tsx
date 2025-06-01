import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import About from './components/About/About';
import Blogs from './components/Blog/Blog'; // <-- Blogs is the parent
import AI from './components/Contents/runCcode'; // <-- Child of Blogs
import FutureComputer from './components/Contents/FutureOfComputer';
import Footer from './components/Footer/Footer';
import PrivacyPolicy from './components/Privacy policy/PrivacyPolicy';
import Contacts from './components/Contacts/Contacts';
import NotFound from './components/NotFound/NotFound';
import Blank from './components/blank/blank';

function App() {
  return (
    <div className="bg-white text-black dark:bg-black dark:text-white min-h-screen transition-colors duration-200">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* NESTED BLOG ROUTES */}
        <Route path="/blog" element={<Blogs />}>
          <Route path="about-ai" element={<AI />} />
          <Route path="Future-of-computer" element={<FutureComputer />} />
        </Route>

        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/blank" element={<Blank />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
