import { BrowserRouter, Routes, Route } from "react-router-dom";

const Header = () => {
  return (
    <header className={ styles.header }>
      <div className={ styles.inner }>
          <div className={ styles.wrap }>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="blogs" element={<Blogs />} />
                <Route path="contact" element={<Contact />} />
                <Route path="*" element={<NoPage />} />
              </Route>
            </Routes>
          </BrowserRouter>
          </div>
      </div>
    </header>
  )
}

export default Header