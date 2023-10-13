import React from "react";
import PropTypes from "prop-types";
import Layout from '../../components/Layout';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Notification from '../../components/Notification';
import SplashScreen from '../../components/SplashScreen';
import Services from '../../components/Services';
import Office from '../../components/Office';
import Partnerships from '../../components/Partnerships';

const ServicesPage = ({ ...props }) => {

    document.title = "Our services - Coding Monsters — www.codingmonsters.com";

	return (
		<>
            <Navigation />
            <Services />
            <Footer />
        </>
        );
};

ServicesPage.propTypes = {
};

ServicesPage.defaultProps = {
	// nothing
};

export default ServicesPage;