import React from "react";
import PropTypes from "prop-types";
import styles from "./index.module.scss";

const Logo = ({ ...props }) => {
	
	return (
        <div className={styles.logo}>
        <h1>Coding Monsters</h1>
        <div><img src="logo.png" width="300"/></div>
        </div>
        );
};

Logo.propTypes = {
};

Logo.defaultProps = {
	// nothing
};

export default Logo;

