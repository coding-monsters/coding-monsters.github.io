import React from "react";
import PropTypes from "prop-types";
import layout from "./../Layout/index.module.scss";
import styles from "./index.module.scss";

const Footer = ({ ...props }) => {
	// console.log('props', props)
	return (
		<>
		<div className={styles.photos + ' ' + layout.grid_container_25}>
		<div className={layout.grid_col_full_width}>
		<img src="photos.png" width="100%"/>
		</div>
		</div>
		<div className={styles.footer + ' ' + layout.grid_container_25}>
       
			<div className={layout.grid_col_lg_1of2}>

			<p>&copy; 2023 Coding Monsters. All rights reserved.</p>
			<p>Helping the next generation</p>
			</div>
			<div className={styles.footerRight + ' ' + layout.grid_col_lg_1of2}>

				<p>
					<a href="#/privacy-policy">Privacy Policy</a> <a href="#/cookies">Cookies</a> <a href="#/terms-of-use">Terms of use</a> <a href="#/accessibility">Accessibility</a>
				</p>
			
			</div>
			
		
		</div>
		</>
        );
};

Footer.propTypes = {
};

Footer.defaultProps = {
	// nothing
};

export default Footer;