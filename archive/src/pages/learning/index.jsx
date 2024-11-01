import React from "react";
import PropTypes from "prop-types";
import Layout from '../../components/Layout';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Notification from '../../components/Notification';
import SplashScreen from '../../components/SplashScreen';
import Learning from '../../components/Learning';
import Office from '../../components/Office';
import Partnerships from '../../components/Partnerships';

const LearningPage = ({ ...props }) => {

    
    document.title = "Learn Coding - Coding Monsters — www.codingmonsters.com";
    
    
	return (
		<>
            <Navigation colour={ "purple" }/>
            <Learning />
            <Footer />
        </>
        );
};

LearningPage.propTypes = {
};

LearningPage.defaultProps = {
	// nothing
};

export default LearningPage;