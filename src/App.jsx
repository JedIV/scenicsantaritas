import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout';
import Home from './pages/Home';
import About from './pages/About';
import Letters from './pages/Letters';
import Volunteer from './pages/Volunteer';
import Subscribe from './pages/Subscribe';
import Events from './pages/Events';
import Updates from './pages/Updates';
import News from './pages/News';
import FAQ from './pages/FAQ';
import Maps from './pages/Maps';
import Petition from './pages/Petition';
import './styles/global.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="letters" element={<Letters />} />
          <Route path="volunteer" element={<Volunteer />} />
          <Route path="subscribe" element={<Subscribe />} />
          <Route path="events" element={<Events />} />
          <Route path="updates" element={<Updates />} />
          <Route path="news" element={<News />} />
          <Route path="news/:slug" element={<News />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="maps" element={<Maps />} />
          <Route path="petition" element={<Petition />} />
          <Route path="rosemont" element={<Updates />} />
          <Route path="act-now" element={<Letters />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
