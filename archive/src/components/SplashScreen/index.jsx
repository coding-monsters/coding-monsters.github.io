
import React from "react";
import PropTypes from "prop-types";
import layout from "./../Layout/index.module.scss";
import styles from "./index.module.scss";

const SplashScreen = ({ ...props }) => {
	// console.log('props', props)
	return (
		<div>
       
			
            <div>
<div className={styles.videoOverlay}></div>
            <video className={styles.background_video} autoPlay loop muted aria-hidden="true"> 
<source src="video.mp4" type="video/mp4"></source>
</video>


            </div>
		
		</div>

        );
};

SplashScreen.propTypes = {
};

SplashScreen.defaultProps = {
	// nothing
};

export default SplashScreen;