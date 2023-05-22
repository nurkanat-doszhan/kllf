// import logo from './logo.svg';
import style from './App.module.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Home from './containers/Home/Home';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className={style.container}>
    <Header />
      <Routes>
        {/* <Route path="/" element={<Home />}> */}
          <Route path="/" element={<Home />} />
    {/* 
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
