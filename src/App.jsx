// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./Navbar";
import Cont from "./Cont";
import Content from "./Content";
import ImpactStats from "./ImpactStats";
import Footer from "./Footer";
import Donate from "./Donate"; // Import your new page
import Contactus from './Contactus';

function HomePage() {
  return (
    <>
      <Cont />
      <Content />
      <ImpactStats />
      <Contactus/>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="nam">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/donate" element={<Donate />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
