import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Header from './components/layout/Header';
import Programming from './pages/Programming';
import About from './pages/About';
import Design from './pages/Design';
import Footer from './components/layout/Footer';
import VideoBackground from './components/VideoBackground';

function App() {
  return (
    <>
      <Router>
        <VideoBackground />
        <div className="page">
          <Header />

          <main className="main">
            <Navbar />
            <Routes>
              <Route path="/" element={<Programming />} />
              <Route path="/about" element={<About />} />
              <Route path="/design" element={<Design />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
