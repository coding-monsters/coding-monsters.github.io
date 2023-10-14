import React from "react";
import PropTypes from "prop-types";
import Layout from '../../components/Layout';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Notification from '../../components/Notification';
import SplashScreen from '../../components/SplashScreen';
import Services from '../../components/Services';
import Office from '../../components/Office';
import ContentPage from '../../components/ContentPage';

const Cookies = ({ ...props }) => {

    document.title = "Cookies - Coding Monsters — www.codingmonsters.com";

	return (
		<>
            <Navigation />
            <ContentPage title="cookies"/>
            <Footer />
        </>
        );
};

Cookies.propTypes = {
};

Cookies.defaultProps = {
	// nothing
};

export default Cookies;