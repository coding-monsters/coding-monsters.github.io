import React from "react";
import PropTypes from "prop-types";
import Layout from '../../components/Layout';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Notification from '../../components/Notification';
import SplashScreen from '../../components/SplashScreen';
import Services from '../../components/Services';
import Office from '../../components/Office';
import Signup from '../../components/Signup';
import styles from "../../components/Layout/index.module.scss";

const SignupPage = ({ ...props }) => {

    document.title = "Sign up — Coding Monsters — www.codingmonsters.com";

	return (
		<>
            <Navigation menu={false}/>
           
      
           
            <Signup />

            <Footer />
        </>
        );
};

SignupPage.propTypes = {
};

SignupPage.defaultProps = {
	// nothing
};

export default SignupPage;


