import React from "react";
import PropTypes from "prop-types";
import Layout from '../../components/Layout';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Notification from '../../components/Notification';
import SplashScreen from '../../components/SplashScreen';
import ContentBlock from '../../components/ContentBlock';
import Office from '../../components/Office';
import Partnerships from '../../components/Partnerships';

const Home = ({ ...props }) => {
	return (
		<>
            
            <ContentBlock />
            <Office />
            <Partnerships />
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