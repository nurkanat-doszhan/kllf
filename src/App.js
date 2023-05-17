// import logo from './logo.svg';
import style from './App.module.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';

function App() {
  return (
    <div className={style.container}>
    <Header />
    {/* 
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
     */}
    </div>
  );
}

export default App;
