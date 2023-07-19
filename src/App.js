// import logo from './logo.svg';
import style from './App.module.scss';
import { Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Home from './containers/Home/Home';
import Footer from './components/Footer/Footer';
import Schedule from './containers/Page/Schedule';

function App() {
  return (
    <div className={style.container}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/schedule" element={<Schedule />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
