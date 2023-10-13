import React from "react";
import PropTypes from "prop-types";
import Layout from '../../components/Layout';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Notification from '../../components/Notification';
import SplashScreen from '../../components/SplashScreen';
import AboutUs from '../../components/AboutUs';
import Office from '../../components/Office';
import Partnerships from '../../components/Partnerships';

const Home = ({ ...props }) => {
	return (
		<>
            <Navigation />
            <AboutUs />
           
            <Footer />
        </>
        );
};

Home.propTypes = {
};

Home.defaultProps = {
	// nothing
};

export default Home;