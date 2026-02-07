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
import NewsDetail from './pages/NewsDetail';
import FAQ from './pages/FAQ';
import Maps from './pages/Maps';
import Petition from './pages/Petition';
import Rosemont from './pages/Rosemont';
import Story from './pages/Story';
import ActNow from './pages/ActNow';
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
          <Route path="news/:slug" element={<NewsDetail />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="maps" element={<Maps />} />
          <Route path="petition" element={<Petition />} />
          <Route path="rosemont" element={<Rosemont />} />
          <Route path="story" element={<Story />} />
          <Route path="act-now" element={<ActNow />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
