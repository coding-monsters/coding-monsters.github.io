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
import Blog14102023 from './pages/blog/helping-the-next-generation';
import Terms from './pages/terms';
import Privacy from './pages/privacy';
import Accessibility from './pages/accessibility';
import Cookies from './pages/cookies';
import Error404 from './pages/404';
import Signup from './pages/signup';

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
          <Route path="blog/helping-the-next-generation" element={<Blog14102023 />} />
          <Route path="terms-of-use" element={<Terms />} />
          <Route path="privacy-policy" element={<Privacy />} />
          <Route path="accessibility" element={<Accessibility />} />
          <Route path="cookies" element={<Cookies />} />
          <Route path="sign-up-to-coding-monsters" element={<Signup />} />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </HashRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
