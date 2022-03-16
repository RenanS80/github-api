import './assets/styles/custom.scss';
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from 'components/Navbar';
import Home from 'pages/Home';
import SearchUser from './pages/SearchUser';
import Footer from 'components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchUser />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
