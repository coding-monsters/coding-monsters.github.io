import React from "react";
import PropTypes from "prop-types";
import Layout from '../../../components/Layout';
import Navigation from '../../../components/Navigation';
import Footer from '../../../components/Footer';
import Notification from '../../../components/Notification';
import SplashScreen from '../../../components/SplashScreen';
import Services from '../../../components/Services';
import Office from '../../../components/Office';
import Blog from '../../../components/BlogPage';

const BlogPage = ({ ...props }) => {

    document.title = "Helping the next generation takeoff - Blog - Coding Monsters — www.codingmonsters.com";

	return (
		<>
            <Navigation />
            <Blog title="helping the next generation takeoff"/>
            <Footer />
        </>
        );
};

BlogPage.propTypes = {
};

BlogPage.defaultProps = {
	// nothing
};

export default BlogPage;