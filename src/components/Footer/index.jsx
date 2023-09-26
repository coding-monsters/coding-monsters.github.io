import React from "react";
import PropTypes from "prop-types";
import layout from "./../Layout/index.module.scss";
import styles from "./index.module.scss";

const Footer = ({ ...props }) => {
	// console.log('props', props)
	return (
		<div className={styles.footer + ' ' + layout.grid_container_25}>
       
			<div className={layout.grid_col_lg_1of2}>

			<p>&copy; 2023 Coding Monsters. All rights reserved.</p>
			<p>Lorem ipsum blah blah blah </p>
			</div>
			<div className={styles.footerRight + ' ' + layout.grid_col_lg_1of2}>

				<p>
					<a href="">Privacy Policy</a> <a href="">Cookies</a> <a href="">Terms of use</a>
				</p>
			
			</div>
			
		
		</div>

        );
};

Footer.propTypes = {
};

Footer.defaultProps = {
	// nothing
};

export default Footer;