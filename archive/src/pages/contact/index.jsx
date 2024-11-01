import React from "react";
import PropTypes from "prop-types";
import Layout from '../../components/Layout';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import GoogleMap from '../../components/GoogleMap';

const ContactPage = ({ ...props }) => {

    document.title = "Contact us - Coding Monsters — www.codingmonsters.com";
	return (
		<>
            <Navigation />
            <GoogleMap />
            <Footer />
        </>
        );
};

ContactPage.propTypes = {
};

ContactPage.defaultProps = {
	// nothing
};

export default ContactPage;