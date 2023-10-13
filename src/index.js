import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import App from './App';
import reportWebVitals from './reportWebVitals';
import './Typography.module.scss';
import Home from './pages/home';
import About from './pages/about';
import Learning from './pages/learning';
import Contact from './pages/contact';
import Services from './pages/services';

import Terms from './pages/home';
import Error404 from './pages/404';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter basename={"/"}>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="learn-coding" element={<Learning />} />
          <Route path="contact-us" element={<Contact />} />
          <Route path="blog/helping-the-next-generation" element={<Terms />} />
          <Route path="terms" element={<Terms />} />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </HashRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
