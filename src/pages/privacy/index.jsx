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

const Privacy = ({ ...props }) => {

    document.title = "Privacy policy - Coding Monsters — www.codingmonsters.com";

	return (
		<>
            <Navigation />
            <ContentPage title="privacy policy"/>
            <Footer />
        </>
        );
};

Privacy.propTypes = {
};

Privacy.defaultProps = {
	// nothing
};

export default Privacy;