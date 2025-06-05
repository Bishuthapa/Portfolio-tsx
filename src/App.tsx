import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import About from './components/About/About';
import Blogs from './components/Blog/Blog'; // <-- Blogs is the parent
import AI from './components/Blog/contents/runCcode';
import FutureComputer from './components/Blog/contents/FutureOfComputer';
import Footer from './components/Footer/Footer';
import PrivacyPolicy from './components/Privacy policy/PrivacyPolicy';
import Contacts from './components/Contacts/Contacts';
import NotFound from './components/NotFound/NotFound';
import Blank from './components/blank/blank';
import Totalbackend from '/Contents/Totalbackend.mdx';
import { useState, createContext , useContext } from 'react';


const ThemeContext = createContext<{ isDark: boolean; toogleTheme: () => void }>({
  isDark: false,
  toogleTheme: () => {},
})

export const useTheme = () => {
const context = useContext(ThemeContext);

if(!context) throw new Error('useTheme must be used within a ThemeProvider');

return context;
}

export default function App() {

  const [isDark, setIsDark] = useState(false);

  const toogleTheme = () => {
    setIsDark(!isDark);
  }
  


  return (
    <ThemeContext.Provider value={{ isDark, toogleTheme }}>
    <div className= {isDark ? "dark" : "light"}>
    <div className="bg-white text-black dark:bg-black dark:text-white min-h-screen ">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* NESTED BLOG ROUTES */}
        <Route path="/blog" element={<Blogs />}>
          <Route path="ai" element={<AI />} />
          <Route path="Future-of-computer" element={<FutureComputer />} />
          <Route path="Backend-with-nodejs" element={<Totalbackend />} />
        </Route>

        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/blank" element={<Blank />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
    </div>
    
    </ThemeContext.Provider>
  );
}
