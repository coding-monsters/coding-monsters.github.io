import './Typography.module.scss';

import Layout from './components/Layout';
import Header from './components/Header';
import Footer from './components/Footer';
import Notification from './components/Notification';
import SplashScreen from './components/SplashScreen';
import ContentBlock from './components/ContentBlock';
function App() {
  return (
    <div className="App" style={{overflow: "hidden"}}>

      <Header />
      <ContentBlock />
      <Footer />
    </div>
  );
}

export default App;
